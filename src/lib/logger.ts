export type LogLevel = 'DEBUG' | 'INFO' | 'WARN' | 'ERROR';

export interface LogContext {
  [key: string]: any;
}

export interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  context?: LogContext;
  error?: Error;
  stack?: string;
  performance?: {
    duration: number;
    memory?: number;
  };
}

export interface LoggerConfig {
  level: LogLevel;
  environment: 'development' | 'production' | 'test';
  enableConsole: boolean;
  enableRemote: boolean;
  remoteEndpoint?: string;
  includeStackTrace: boolean;
  includePerformance: boolean;
  maxLogSize: number;
  bufferSize: number;
}

export type LogFormatter = (entry: LogEntry) => string;

export class Logger {
  private config: LoggerConfig;
  private buffer: LogEntry[] = [];
  private performanceMarkers: Map<string, number> = new Map();
  private readonly levelPriority: Record<LogLevel, number> = {
    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3,
  };

  constructor(config: Partial<LoggerConfig> = {}) {
    this.config = {
      level: 'INFO',
      environment: (process.env.NODE_ENV as 'development' | 'production' | 'test') || 'development',
      enableConsole: true,
      enableRemote: false,
      includeStackTrace: true,
      includePerformance: false,
      maxLogSize: 1000,
      bufferSize: 100,
      ...config,
    };
  }

  /**
   * Log a debug message
   */
  debug(message: string, context?: LogContext): void {
    this.log('DEBUG', message, context);
  }

  /**
   * Log an info message
   */
  info(message: string, context?: LogContext): void {
    this.log('INFO', message, context);
  }

  /**
   * Log a warning message
   */
  warn(message: string, context?: LogContext): void {
    this.log('WARN', message, context);
  }

  /**
   * Log an error message
   */
  error(message: string, error?: Error, context?: LogContext): void {
    this.log('ERROR', message, context, error);
  }

  /**
   * Start a performance timer
   */
  startTimer(label: string): void {
    if (!this.config.includePerformance) return;
    this.performanceMarkers.set(label, performance.now());
  }

  /**
   * End a performance timer and log the duration
   */
  endTimer(label: string, message?: string, context?: LogContext): void {
    if (!this.config.includePerformance) return;
    
    const startTime = this.performanceMarkers.get(label);
    if (!startTime) {
      this.warn(`Performance timer "${label}" was not started`);
      return;
    }

    const duration = performance.now() - startTime;
    this.performanceMarkers.delete(label);

    const performanceContext = {
      ...context,
      performance: {
        duration,
        memory: this.getMemoryUsage(),
      },
    };

    this.info(message || `Performance: ${label} completed`, performanceContext);
  }

  /**
   * Log a message with specified level
   */
  private log(level: LogLevel, message: string, context?: LogContext, error?: Error): void {
    if (!this.shouldLog(level)) return;

    const entry: LogEntry = {
      timestamp: new Date().toISOString(),
      level,
      message,
      context,
      error,
    };

    // Add stack trace for errors or if explicitly enabled
    if (error && this.config.includeStackTrace) {
      entry.stack = error.stack;
    }

    // Add performance data if enabled
    if (this.config.includePerformance && context?.performance) {
      entry.performance = context.performance;
    }

    this.output(entry);
    this.addToBuffer(entry);
  }

  /**
   * Check if a log level should be logged
   */
  private shouldLog(level: LogLevel): boolean {
    return this.levelPriority[level] >= this.levelPriority[this.config.level];
  }

  /**
   * Output log entry to configured destinations
   */
  private output(entry: LogEntry): void {
    if (this.config.enableConsole) {
      this.outputToConsole(entry);
    }

    if (this.config.enableRemote && this.config.remoteEndpoint) {
      this.outputToRemote(entry);
    }
  }

  /**
   * Output to console with appropriate formatting
   */
  private outputToConsole(entry: LogEntry): void {
    const formatted = this.formatForConsole(entry);
    
    switch (entry.level) {
      case 'DEBUG':
        console.debug(formatted);
        break;
      case 'INFO':
        console.info(formatted);
        break;
      case 'WARN':
        console.warn(formatted);
        break;
      case 'ERROR':
        console.error(formatted);
        if (entry.error) {
          console.error(entry.error);
        }
        break;
    }
  }

  /**
   * Output to remote logging service
   */
  private async outputToRemote(entry: LogEntry): Promise<void> {
    if (!this.config.remoteEndpoint) return;

    try {
      await fetch(this.config.remoteEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(entry),
      });
    } catch (error) {
      // Fallback to console if remote logging fails
      console.error('Failed to send log to remote service:', error);
    }
  }

  /**
   * Format log entry for console output
   */
  private formatForConsole(entry: LogEntry): string {
    const timestamp = new Date(entry.timestamp).toLocaleTimeString();
    const level = entry.level.padEnd(5);
    const context = entry.context ? ` | ${JSON.stringify(entry.context)}` : '';
    const performance = entry.performance ? ` | ${entry.performance.duration.toFixed(2)}ms` : '';
    
    return `[${timestamp}] ${level} | ${entry.message}${context}${performance}`;
  }

  /**
   * Format log entry for JSON output
   */
  private formatForJSON(entry: LogEntry): string {
    return JSON.stringify(entry, null, 2);
  }

  /**
   * Add entry to buffer
   */
  private addToBuffer(entry: LogEntry): void {
    this.buffer.push(entry);
    
    // Keep buffer size within limits
    if (this.buffer.length > this.config.bufferSize) {
      this.buffer.shift();
    }
  }

  /**
   * Get memory usage information
   */
  private getMemoryUsage(): number | undefined {
    if (typeof performance !== 'undefined' && 'memory' in performance) {
      return (performance as any).memory.usedJSHeapSize;
    }
    return undefined;
  }

  /**
   * Clear the log buffer
   */
  clearBuffer(): void {
    this.buffer = [];
  }

  /**
   * Get current log buffer
   */
  getBuffer(): LogEntry[] {
    return [...this.buffer];
  }

  /**
   * Get filtered logs by level
   */
  getLogsByLevel(level: LogLevel): LogEntry[] {
    return this.buffer.filter(entry => entry.level === level);
  }

  /**
   * Get logs within a time range
   */
  getLogsByTimeRange(start: Date, end: Date): LogEntry[] {
    return this.buffer.filter(entry => {
      const entryTime = new Date(entry.timestamp);
      return entryTime >= start && entryTime <= end;
    });
  }

  /**
   * Export logs as JSON
   */
  exportLogs(): string {
    return JSON.stringify(this.buffer, null, 2);
  }

  /**
   * Update logger configuration
   */
  updateConfig(config: Partial<LoggerConfig>): void {
    this.config = { ...this.config, ...config };
  }

  /**
   * Get current configuration
   */
  getConfig(): LoggerConfig {
    return { ...this.config };
  }

  /**
   * Create a child logger with additional context
   */
  child(defaultContext: LogContext): Logger {
    const childLogger = new Logger(this.config);
    
    // Override log method to include default context
    const originalLog = childLogger.log.bind(childLogger);
    (childLogger as any).log = (level: LogLevel, message: string, context?: LogContext, error?: Error) => {
      const mergedContext = { ...defaultContext, ...context };
      originalLog(level, message, mergedContext, error);
    };

    return childLogger;
  }
}

// Create a default logger instance
export const logger = new Logger({
  level: process.env.NODE_ENV === 'production' ? 'INFO' : 'DEBUG',
  environment: process.env.NODE_ENV as 'development' | 'production' | 'test',
  enableConsole: true,
  enableRemote: process.env.NODE_ENV === 'production',
  remoteEndpoint: process.env.LOGGING_ENDPOINT,
  includeStackTrace: true,
  includePerformance: process.env.NODE_ENV === 'development',
});

// Utility functions for common logging patterns
export const withLogging = <T extends any[], R>(
  fn: (...args: T) => R,
  label: string,
  context?: LogContext
) => {
  return (...args: T): R => {
    logger.startTimer(label);
    logger.debug(`Starting ${label}`, context);
    
    try {
      const result = fn(...args);
      logger.endTimer(label, `Completed ${label}`, context);
      return result;
    } catch (error) {
      logger.endTimer(label, `Failed ${label}`, context);
      logger.error(`Error in ${label}`, error as Error, context);
      throw error;
    }
  };
};

export const withAsyncLogging = <T extends any[], R>(
  fn: (...args: T) => Promise<R>,
  label: string,
  context?: LogContext
) => {
  return async (...args: T): Promise<R> => {
    logger.startTimer(label);
    logger.debug(`Starting ${label}`, context);
    
    try {
      const result = await fn(...args);
      logger.endTimer(label, `Completed ${label}`, context);
      return result;
    } catch (error) {
      logger.endTimer(label, `Failed ${label}`, context);
      logger.error(`Error in ${label}`, error as Error, context);
      throw error;
    }
  };
};