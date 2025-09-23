import nodemailer from 'nodemailer';
import { Mail, User, Lock, MessageCircle, CheckCircle, AlertCircle, Shield, Settings } from 'lucide-react';

// Email configuration types
interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
  from: string;
}

// Email parameter interfaces
interface BaseEmailParams {
  to: string;
  subject: string;
}

interface WelcomeEmailParams extends BaseEmailParams {
  name: string;
  loginUrl: string;
}

interface VerificationEmailParams extends BaseEmailParams {
  name: string;
  verificationToken: string;
  verificationUrl: string;
}

interface PasswordResetEmailParams extends BaseEmailParams {
  name: string;
  resetToken: string;
  resetUrl: string;
}

interface ContactFormEmailParams extends BaseEmailParams {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  subject: string;
}

interface OtpEmailParams extends BaseEmailParams {
  otp: string;
  type: 'login' | 'signup';
  expiresAt: number;
}

// Email sending result
interface EmailResult {
  success: boolean;
  messageId?: string;
  error?: string;
}

// Email templates
class EmailTemplates {
  static getBaseTemplate(content: string): string {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Trade Credit Bancorp</title>
        <style>
          body {
            font-family: 'Inter', Arial, sans-serif;
            line-height: 1.6;
            color: #1a1f36;
            background-color: #ffffff;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          }
          .header {
            background: linear-gradient(135deg, #1a1f36 0%, #2a3550 100%);
            color: #ffffff;
            padding: 30px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 700;
            color: #ffffff;
          }
          .header p {
            margin: 10px 0 0;
            font-size: 14px;
            opacity: 0.9;
            color: #e5e7eb;
          }
          .content {
            padding: 40px 30px;
          }
          .content h2 {
            color: #1a1f36;
            font-size: 24px;
            margin-bottom: 20px;
            font-weight: 600;
          }
          .content p {
            margin-bottom: 20px;
            color: #1a1f36;
            font-size: 16px;
          }
          .button {
            display: inline-block;
            background: linear-gradient(135deg, #d4af37, #b8941c);
            color: #1a1f36;
            text-decoration: none;
            padding: 15px 30px;
            border-radius: 6px;
            font-weight: 600;
            font-size: 16px;
            text-align: center;
            margin: 20px 0;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
          }
          .button:hover {
            background: linear-gradient(135deg, #b8941c, #d4af37);
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(212, 175, 55, 0.4);
          }
          .footer {
            background-color: #f8fafc;
            padding: 30px;
            text-align: center;
            border-top: 1px solid #e5e7eb;
          }
          .footer p {
            margin: 0;
            color: #6b7280;
            font-size: 14px;
          }
          .footer a {
            color: #d4af37;
            text-decoration: none;
          }
          .divider {
            height: 1px;
            background: linear-gradient(90deg, transparent, #e5e7eb, transparent);
            margin: 30px 0;
          }
          .highlight {
            background-color: #fef3c7;
            border-left: 4px solid #d4af37;
            padding: 15px;
            margin: 20px 0;
            border-radius: 4px;
          }
          .contact-info {
            background-color: #f8fafc;
            padding: 20px;
            border-radius: 6px;
            margin: 20px 0;
            border: 1px solid #e5e7eb;
          }
          .contact-info h3 {
            color: #1a1f36;
            margin-bottom: 10px;
            font-size: 18px;
          }
          .contact-info p {
            margin: 5px 0;
            color: #6b7280;
            font-size: 14px;
          }
          .security-notice {
            background-color: #fef2f2;
            border: 1px solid #fecaca;
            padding: 15px;
            border-radius: 6px;
            margin: 20px 0;
          }
          .security-notice p {
            color: #b91c1c;
            margin: 0;
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Trade Credit Bancorp</h1>
            <p>Professional Business Finance Solutions</p>
          </div>
          <div class="content">
            ${content}
          </div>
          <div class="footer">
            <p>© 2024 Trade Credit Bancorp. All rights reserved.</p>
            <p>
              <a href="mailto:info@tradecreditbancorp.com">Contact Us</a> | 
              <a href="https://tradecreditbancorp.com/privacy">Privacy Policy</a> | 
              <a href="https://tradecreditbancorp.com/terms">Terms of Service</a>
            </p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  static welcomeEmail(params: WelcomeEmailParams): string {
    const content = `
      <h2>Welcome to Trade Credit Bancorp!</h2>
      <p>Dear ${params.name},</p>
      <p>Thank you for choosing Trade Credit Bancorp for your business financing needs. We're excited to help you grow your business with our professional financial solutions.</p>
      
      <div class="highlight">
        <p><strong>What's Next?</strong></p>
        <p>Your account has been successfully created. You can now log in to access our comprehensive suite of business finance tools and services.</p>
      </div>
      
      <div style="text-align: center;">
        <a href="${params.loginUrl}" class="button">Access Your Account</a>
      </div>
      
      <div class="divider"></div>
      
      <p>As a valued client, you now have access to:</p>
      <ul>
        <li>Advanced credit analysis tools</li>
        <li>Real-time application tracking</li>
        <li>Personalized financing recommendations</li>
        <li>Dedicated account management</li>
        <li>24/7 customer support</li>
      </ul>
      
      <p>If you have any questions or need assistance, our team is here to help.</p>
      
      <p>Best regards,<br>
      The Trade Credit Bancorp Team</p>
    `;
    
    return this.getBaseTemplate(content);
  }

  static verificationEmail(params: VerificationEmailParams): string {
    const content = `
      <h2>Verify Your Email Address</h2>
      <p>Dear ${params.name},</p>
      <p>To complete your Trade Credit Bancorp account setup, please verify your email address by clicking the button below.</p>
      
      <div style="text-align: center;">
        <a href="${params.verificationUrl}" class="button">Verify Email Address</a>
      </div>
      
      <div class="security-notice">
        <p><strong>Security Notice:</strong> This link will expire in 24 hours for your security.</p>
      </div>
      
      <p>If you're unable to click the button, copy and paste this link into your browser:</p>
      <p style="word-break: break-all; background-color: #f8fafc; padding: 10px; border-radius: 4px; font-family: monospace; font-size: 14px;">${params.verificationUrl}</p>
      
      <div class="divider"></div>
      
      <p>If you didn't create an account with Trade Credit Bancorp, please ignore this email.</p>
      
      <p>Best regards,<br>
      The Trade Credit Bancorp Team</p>
    `;
    
    return this.getBaseTemplate(content);
  }

  static passwordResetEmail(params: PasswordResetEmailParams): string {
    const content = `
      <h2>Password Reset Request</h2>
      <p>Dear ${params.name},</p>
      <p>We received a request to reset your Trade Credit Bancorp account password. If you made this request, click the button below to set a new password.</p>
      
      <div style="text-align: center;">
        <a href="${params.resetUrl}" class="button">Reset Password</a>
      </div>
      
      <div class="security-notice">
        <p><strong>Security Notice:</strong> This link will expire in 1 hour for your security. If you didn't request a password reset, please ignore this email.</p>
      </div>
      
      <p>If you're unable to click the button, copy and paste this link into your browser:</p>
      <p style="word-break: break-all; background-color: #f8fafc; padding: 10px; border-radius: 4px; font-family: monospace; font-size: 14px;">${params.resetUrl}</p>
      
      <div class="divider"></div>
      
      <p>For your security, we recommend:</p>
      <ul>
        <li>Using a strong, unique password</li>
        <li>Enabling two-factor authentication</li>
        <li>Never sharing your login credentials</li>
      </ul>
      
      <p>If you have any concerns about your account security, please contact our support team immediately.</p>
      
      <p>Best regards,<br>
      The Trade Credit Bancorp Team</p>
    `;
    
    return this.getBaseTemplate(content);
  }

  static contactFormEmail(params: ContactFormEmailParams): string {
    const content = `
      <h2>New Contact Form Submission</h2>
      <p>A new contact form has been submitted through the Trade Credit Bancorp website.</p>
      
      <div class="contact-info">
        <h3>Contact Details</h3>
        <p><strong>Name:</strong> ${params.name}</p>
        <p><strong>Email:</strong> ${params.email}</p>
        ${params.phone ? `<p><strong>Phone:</strong> ${params.phone}</p>` : ''}
        ${params.company ? `<p><strong>Company:</strong> ${params.company}</p>` : ''}
        <p><strong>Subject:</strong> ${params.subject}</p>
      </div>
      
      <div class="highlight">
        <p><strong>Message:</strong></p>
        <p>${params.message.replace(/\n/g, '<br>')}</p>
      </div>
      
      <div class="divider"></div>
      
      <p>Please respond to this inquiry promptly to maintain our high standard of customer service.</p>
      
      <p>Best regards,<br>
      Trade Credit Bancorp System</p>
    `;
    
    return this.getBaseTemplate(content);
  }

  static otpEmail(params: OtpEmailParams): string {
    const content = `
      <h2>${params.type === 'login' ? 'Login Verification' : 'Account Verification'}</h2>
      <p>Your verification code is:</p>
      
      <div style="text-align: center; margin: 30px 0;">
        <div style="display: inline-block; background-color: #f8fafc; border: 2px solid #e5e7eb; border-radius: 8px; padding: 20px; font-family: monospace; font-size: 32px; font-weight: bold; letter-spacing: 8px; color: #1a1f36;">
          ${params.otp}
        </div>
      </div>
      
      <div class="security-notice">
        <p><strong>Security Notice:</strong> This code will expire in 5 minutes. Never share this code with anyone.</p>
      </div>
      
      <p>If you didn't request this code, please ignore this email.</p>
      
      <p>Best regards,<br>
      The Trade Credit Bancorp Team</p>
    `;
    
    return this.getBaseTemplate(content);
  }
}

// Logger utility
class Logger {
  static log(level: 'INFO' | 'ERROR' | 'WARN', message: string, data?: any): void {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    
    if (process.env.NODE_ENV === 'development') {
      console.log(logMessage, data || '');
    }
    
    // In production, you would send this to a logging service
    // Example: winston, pino, or cloud logging service
  }
}

// Main EmailService class
export class EmailService {
  private transporter: nodemailer.Transporter | null = null;
  private config: EmailConfig | null = null;
  private isDevelopment: boolean;
  private isInitialized: boolean = false;

  constructor() {
    this.isDevelopment = process.env.NODE_ENV === 'development';
    // Don't initialize during build time to avoid errors
    if (process.env.NODE_ENV !== 'development' && !process.env.VERCEL_ENV) {
      this.initializeEmailConfig();
    }
  }

  private initializeEmailConfig(): void {
    try {
      const emailHost = process.env.EMAIL_HOST;
      const emailPort = process.env.EMAIL_PORT;
      const emailUser = process.env.EMAIL_USER;
      const emailPass = process.env.EMAIL_PASS;
      const emailFrom = process.env.EMAIL_FROM;

      if (!emailHost || !emailPort || !emailUser || !emailPass || !emailFrom) {
        if (this.isDevelopment) {
          Logger.log('WARN', 'Email configuration not found. Running in development mode with console logging.');
          this.isInitialized = true;
          return;
        }
        
        // Don't throw error during build time, just log warning
        if (process.env.NODE_ENV === 'production' && !process.env.VERCEL_ENV) {
          Logger.log('WARN', 'Email configuration not found in production environment');
          this.isInitialized = false;
          return;
        }
        
        throw new Error('Email configuration is required for production environment');
      }

      this.config = {
        host: emailHost,
        port: parseInt(emailPort, 10),
        secure: parseInt(emailPort, 10) === 465,
        auth: {
          user: emailUser,
          pass: emailPass,
        },
        from: emailFrom,
      };

      this.transporter = nodemailer.createTransporter(this.config);
      this.isInitialized = true;
      
      Logger.log('INFO', 'Email service initialized successfully');
    } catch (error) {
      Logger.log('ERROR', 'Failed to initialize email service', error);
      this.isInitialized = false;
      if (!this.isDevelopment && process.env.VERCEL_ENV) {
        throw error;
      }
    }
  }

  private async ensureInitialized(): Promise<void> {
    if (!this.isInitialized && !this.isDevelopment) {
      this.initializeEmailConfig();
    }
  }

  private async sendEmail(to: string, subject: string, html: string): Promise<EmailResult> {
    try {
      await this.ensureInitialized();
      
      // Validate email address
      if (!this.isValidEmail(to)) {
        throw new Error('Invalid email address');
      }

      // Development mode - log to console
      if (this.isDevelopment || !this.transporter || !this.config) {
        Logger.log('INFO', `📧 EMAIL (DEV MODE) - To: ${to}, Subject: ${subject}`);
        console.log('Email HTML Content:', html);
        return {
          success: true,
          messageId: `dev-${Date.now()}`,
        };
      }

      // Check if email service is properly configured
      if (!this.isInitialized) {
        throw new Error('Email service not properly configured');
      }

      // Production mode - send actual email
      const mailOptions = {
        from: this.config.from,
        to,
        subject,
        html,
      };

      const result = await this.transporter.sendMail(mailOptions);
      
      Logger.log('INFO', `Email sent successfully to ${to}`, { messageId: result.messageId });
      
      return {
        success: true,
        messageId: result.messageId,
      };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      Logger.log('ERROR', `Failed to send email to ${to}`, { error: errorMessage });
      
      return {
        success: false,
        error: errorMessage,
      };
    }
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Generic email sending method
  async sendEmail(params: { to: string; subject: string; htmlContent: string }): Promise<EmailResult> {
    try {
      await this.ensureInitialized();
      return await this.sendEmail(params.to, params.subject, params.htmlContent);
    } catch (error) {
      Logger.log('ERROR', 'Failed to send email', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  // Generic email sending method for custom content
  async sendCustomEmail(params: { to: string; subject: string; htmlContent: string }): Promise<EmailResult> {
    try {
      await this.ensureInitialized();
      return await this.sendEmail(params.to, params.subject, params.htmlContent);
    } catch (error) {
      Logger.log('ERROR', 'Failed to send custom email', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  // Public methods for different email types
  async sendWelcomeEmail(params: WelcomeEmailParams): Promise<EmailResult> {
    try {
      await this.ensureInitialized();
      const html = EmailTemplates.welcomeEmail(params);
      return await this.sendEmail(params.to, params.subject, html);
    } catch (error) {
      Logger.log('ERROR', 'Failed to send welcome email', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  async sendVerificationEmail(params: VerificationEmailParams): Promise<EmailResult> {
    try {
      await this.ensureInitialized();
      const html = EmailTemplates.verificationEmail(params);
      return await this.sendEmail(params.to, params.subject, html);
    } catch (error) {
      Logger.log('ERROR', 'Failed to send verification email', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  async sendPasswordResetEmail(params: PasswordResetEmailParams): Promise<EmailResult> {
    try {
      await this.ensureInitialized();
      const html = EmailTemplates.passwordResetEmail(params);
      return await this.sendEmail(params.to, params.subject, html);
    } catch (error) {
      Logger.log('ERROR', 'Failed to send password reset email', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  async sendContactFormEmail(params: ContactFormEmailParams): Promise<EmailResult> {
    try {
      await this.ensureInitialized();
      const html = EmailTemplates.contactFormEmail(params);
      // Send to the specified Trade Credit Bancorp email
      const adminEmail = 'tradecreditbancorp@gmail.com';
      return await this.sendEmail(adminEmail, `Contact Form: ${params.subject}`, html);
    } catch (error) {
      Logger.log('ERROR', 'Failed to send contact form email', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  async sendOtpEmail(params: OtpEmailParams): Promise<EmailResult> {
    try {
      await this.ensureInitialized();
      const html = EmailTemplates.otpEmail(params);
      return await this.sendEmail(params.to, params.subject, html);
    } catch (error) {
      Logger.log('ERROR', 'Failed to send OTP email', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  // Add method to send application form emails
  async sendApplicationFormEmail(params: {
    applicantName: string;
    applicantEmail: string;
    applicantPhone?: string;
    company?: string;
    applicationData: any;
    subject: string;
  }): Promise<EmailResult> {
    try {
      await this.ensureInitialized();
      const content = `
        <h2>New Application Form Submission</h2>
        <p>A new application has been submitted through the Trade Credit Bancorp website.</p>
        
        <div class="contact-info">
          <h3>Applicant Details</h3>
          <p><strong>Name:</strong> ${params.applicantName}</p>
          <p><strong>Email:</strong> ${params.applicantEmail}</p>
          ${params.applicantPhone ? `<p><strong>Phone:</strong> ${params.applicantPhone}</p>` : ''}
          ${params.company ? `<p><strong>Company:</strong> ${params.company}</p>` : ''}
          <p><strong>Application Type:</strong> ${params.subject}</p>
        </div>
        
        <div class="highlight">
          <p><strong>Application Data:</strong></p>
          <pre>${JSON.stringify(params.applicationData, null, 2)}</pre>
        </div>
        
        <div class="divider"></div>
        
        <p>Please review this application and respond promptly to maintain our high standard of customer service.</p>
        
        <p>Best regards,<br>
        Trade Credit Bancorp System</p>
      `;
      
      const html = EmailTemplates.getBaseTemplate(content);
      // Send to the specified Trade Credit Bancorp email
      const adminEmail = 'tradecreditbancorp@gmail.com';
      return await this.sendEmail(adminEmail, `Application Form: ${params.subject}`, html);
    } catch (error) {
      Logger.log('ERROR', 'Failed to send application form email', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  // Add method to send user onboarding emails
  async sendUserOnboardingEmail(params: {
    userName: string;
    userEmail: string;
    userPhone?: string;
    registrationData: any;
  }): Promise<EmailResult> {
    try {
      await this.ensureInitialized();
      const content = `
        <h2>New User Registration</h2>
        <p>A new user has registered on the Trade Credit Bancorp website.</p>
        
        <div class="contact-info">
          <h3>User Details</h3>
          <p><strong>Name:</strong> ${params.userName}</p>
          <p><strong>Email:</strong> ${params.userEmail}</p>
          ${params.userPhone ? `<p><strong>Phone:</strong> ${params.userPhone}</p>` : ''}
          <p><strong>Registration Date:</strong> ${new Date().toLocaleString()}</p>
        </div>
        
        <div class="highlight">
          <p><strong>Registration Data:</strong></p>
          <pre>${JSON.stringify(params.registrationData, null, 2)}</pre>
        </div>
        
        <div class="divider"></div>
        
        <p>Please review this user registration and follow up if necessary.</p>
        
        <p>Best regards,<br>
        Trade Credit Bancorp System</p>
      `;
      
      const html = EmailTemplates.getBaseTemplate(content);
      // Send to the specified Trade Credit Bancorp email
      const adminEmail = 'tradecreditbancorp@gmail.com';
      return await this.sendEmail(adminEmail, `User Registration: ${params.userName}`, html);
    } catch (error) {
      Logger.log('ERROR', 'Failed to send user onboarding email', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  // Health check method
  async testConnection(): Promise<boolean> {
    try {
      await this.ensureInitialized();
      
      if (this.isDevelopment || !this.transporter) {
        Logger.log('INFO', 'Email service health check: Development mode - OK');
        return true;
      }

      if (!this.isInitialized) {
        Logger.log('WARN', 'Email service health check: Not initialized');
        return false;
      }

      await this.transporter.verify();
      Logger.log('INFO', 'Email service health check: Production mode - OK');
      return true;
    } catch (error) {
      Logger.log('ERROR', 'Email service health check failed', error);
      return false;
    }
  }

  // Get service status
  getStatus(): { configured: boolean; mode: 'development' | 'production' } {
    return {
      configured: this.isInitialized,
      mode: this.isDevelopment ? 'development' : 'production',
    };
  }
}

// Export types for use in other parts of the application
export type {
  EmailConfig,
  BaseEmailParams,
  WelcomeEmailParams,
  VerificationEmailParams,
  PasswordResetEmailParams,
  ContactFormEmailParams,
  EmailResult,
};

// Export singleton instance
export const emailService = new EmailService();