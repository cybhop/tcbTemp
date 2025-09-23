import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

// Types
export interface EmailConfig {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
  refreshToken: string;
  accessToken?: string;
  fromEmail: string;
  fromName: string;
}

export interface EmailTemplate {
  subject: string;
  html: string;
  text: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  subject?: string;
}

export interface ApplicationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  position: string;
  experience: string;
  loanAmount: string;
  purpose: string;
  message?: string;
}

export interface EmailResponse {
  success: boolean;
  messageId?: string;
  error?: string;
}

export interface EmailError {
  code: string;
  message: string;
  details?: any;
}

export interface RetryOptions {
  maxRetries: number;
  delayMs: number;
  exponentialBackoff: boolean;
}

// Email Service Class
export class EmailService {
  private oauth2Client: OAuth2Client;
  private config: EmailConfig;
  private transporter: Mail | null = null;
  private isInitialized: boolean = false;

  constructor(config: EmailConfig) {
    this.config = config;
    
    // Don't initialize during build time
    if (process.env.VERCEL_ENV || process.env.NODE_ENV === 'development') {
      try {
        this.oauth2Client = new google.auth.OAuth2(
          config.clientId,
          config.clientSecret,
          config.redirectUri
        );
        this.oauth2Client.setCredentials({
          refresh_token: config.refreshToken,
        });
        this.isInitialized = true;
      } catch (error) {
        console.warn('Email service initialization failed:', error);
        this.isInitialized = false;
      }
    }
  }

  /**
   * Ensure service is initialized before use
   */
  private ensureInitialized(): void {
    if (!this.isInitialized) {
      throw new EmailError('SERVICE_NOT_INITIALIZED', 'Email service not initialized');
    }
  }

  /**
   * Initialize the email transporter with fresh access token
   */
  private async initializeTransporter(): Promise<void> {
    try {
      this.ensureInitialized();
      
      const { credentials } = await this.oauth2Client.refreshAccessToken();
      this.config.accessToken = credentials.access_token || undefined;

      this.transporter = nodemailer.createTransporter({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: this.config.fromEmail,
          clientId: this.config.clientId,
          clientSecret: this.config.clientSecret,
          refreshToken: this.config.refreshToken,
          accessToken: this.config.accessToken,
        },
      });
    } catch (error) {
      throw new EmailError('TRANSPORTER_INIT_FAILED', 'Failed to initialize email transporter', error);
    }
  }

  /**
   * Send email with retry logic
   */
  private async sendEmailWithRetry(
    mailOptions: Mail.Options,
    retryOptions: RetryOptions = { maxRetries: 3, delayMs: 1000, exponentialBackoff: true }
  ): Promise<EmailResponse> {
    try {
      this.ensureInitialized();
    } catch (error) {
      // Log the email details for manual processing
      console.log('Email service not available - logging for manual processing:', {
        to: mailOptions.to,
        subject: mailOptions.subject,
        timestamp: new Date().toISOString(),
        error: error.message
      });
      
      return {
        success: false,
        error: 'Email service not configured'
      };
    }

    let lastError: any;

    for (let attempt = 0; attempt <= retryOptions.maxRetries; attempt++) {
      try {
        if (!this.transporter) {
          await this.initializeTransporter();
        }

        const result = await this.transporter!.sendMail(mailOptions);
        
        console.log(`Email sent successfully on attempt ${attempt + 1}:`, result.messageId);
        
        return {
          success: true,
          messageId: result.messageId,
        };
      } catch (error: any) {
        lastError = error;
        console.error(`Email send attempt ${attempt + 1} failed:`, error);

        // Don't retry on authentication errors
        if (error.code === 'EAUTH' || error.code === 'ENOTFOUND') {
          break;
        }

        // Wait before retrying
        if (attempt < retryOptions.maxRetries) {
          const delay = retryOptions.exponentialBackoff 
            ? retryOptions.delayMs * Math.pow(2, attempt)
            : retryOptions.delayMs;
          
          await new Promise(resolve => setTimeout(resolve, delay));
          
          // Reinitialize transporter on retry
          this.transporter = null;
        }
      }
    }

    return {
      success: false,
      error: lastError?.message || 'Unknown error occurred',
    };
  }

  /**
   * Send contact form notification email
   */
  async sendContactFormNotification(formData: ContactFormData): Promise<EmailResponse> {
    const template = this.getContactFormTemplate(formData);
    
    const mailOptions: Mail.Options = {
      from: `${this.config.fromName} <${this.config.fromEmail}>`,
      to: this.config.fromEmail,
      subject: template.subject,
      html: template.html,
      text: template.text,
      replyTo: formData.email,
    };

    return this.sendEmailWithRetry(mailOptions);
  }

  /**
   * Send application form notification email
   */
  async sendApplicationFormNotification(formData: ApplicationFormData): Promise<EmailResponse> {
    const template = this.getApplicationFormTemplate(formData);
    
    const mailOptions: Mail.Options = {
      from: `${this.config.fromName} <${this.config.fromEmail}>`,
      to: this.config.fromEmail,
      subject: template.subject,
      html: template.html,
      text: template.text,
      replyTo: formData.email,
    };

    return this.sendEmailWithRetry(mailOptions);
  }

  /**
   * Send welcome email to new user
   */
  async sendWelcomeEmail(userEmail: string, userName: string): Promise<EmailResponse> {
    const template = this.getWelcomeEmailTemplate(userName);
    
    const mailOptions: Mail.Options = {
      from: `${this.config.fromName} <${this.config.fromEmail}>`,
      to: userEmail,
      subject: template.subject,
      html: template.html,
      text: template.text,
    };

    return this.sendEmailWithRetry(mailOptions);
  }

  /**
   * Send password reset email
   */
  async sendPasswordResetEmail(userEmail: string, resetToken: string, userName: string): Promise<EmailResponse> {
    const template = this.getPasswordResetTemplate(resetToken, userName);
    
    const mailOptions: Mail.Options = {
      from: `${this.config.fromName} <${this.config.fromEmail}>`,
      to: userEmail,
      subject: template.subject,
      html: template.html,
      text: template.text,
    };

    return this.sendEmailWithRetry(mailOptions);
  }

  /**
   * Send account verification email
   */
  async sendVerificationEmail(userEmail: string, verificationToken: string, userName: string): Promise<EmailResponse> {
    const template = this.getVerificationEmailTemplate(verificationToken, userName);
    
    const mailOptions: Mail.Options = {
      from: `${this.config.fromName} <${this.config.fromEmail}>`,
      to: userEmail,
      subject: template.subject,
      html: template.html,
      text: template.text,
    };

    return this.sendEmailWithRetry(mailOptions);
  }

  // Email Templates
  private getContactFormTemplate(formData: ContactFormData): EmailTemplate {
    const subject = `New Contact Form Submission${formData.subject ? `: ${formData.subject}` : ''}`;
    
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Contact Form Submission</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #1a1f36; color: white; padding: 20px; text-align: center; }
            .content { background: #f9f9f9; padding: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #1a1f36; }
            .value { margin-top: 5px; padding: 10px; background: white; border: 1px solid #e5e7eb; }
            .footer { background: #1a1f36; color: white; padding: 15px; text-align: center; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Form Submission</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${formData.name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${formData.email}</div>
              </div>
              ${formData.company ? `
                <div class="field">
                  <div class="label">Company:</div>
                  <div class="value">${formData.company}</div>
                </div>
              ` : ''}
              ${formData.phone ? `
                <div class="field">
                  <div class="label">Phone:</div>
                  <div class="value">${formData.phone}</div>
                </div>
              ` : ''}
              ${formData.subject ? `
                <div class="field">
                  <div class="label">Subject:</div>
                  <div class="value">${formData.subject}</div>
                </div>
              ` : ''}
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${formData.message}</div>
              </div>
            </div>
            <div class="footer">
              <p>Trade Credit Bancorp | ${new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const text = `
      New Contact Form Submission
      
      Name: ${formData.name}
      Email: ${formData.email}
      ${formData.company ? `Company: ${formData.company}` : ''}
      ${formData.phone ? `Phone: ${formData.phone}` : ''}
      ${formData.subject ? `Subject: ${formData.subject}` : ''}
      
      Message:
      ${formData.message}
      
      ---
      Trade Credit Bancorp | ${new Date().toLocaleDateString()}
    `;

    return { subject, html, text };
  }

  private getApplicationFormTemplate(formData: ApplicationFormData): EmailTemplate {
    const subject = `New Application: ${formData.firstName} ${formData.lastName} - ${formData.company}`;
    
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Application Submission</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #1a1f36; color: white; padding: 20px; text-align: center; }
            .content { background: #f9f9f9; padding: 20px; }
            .section { margin-bottom: 25px; }
            .section-title { color: #1a1f36; font-size: 18px; font-weight: bold; margin-bottom: 10px; border-bottom: 2px solid #d4af37; padding-bottom: 5px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #1a1f36; }
            .value { margin-top: 5px; padding: 10px; background: white; border: 1px solid #e5e7eb; }
            .footer { background: #1a1f36; color: white; padding: 15px; text-align: center; font-size: 14px; }
            .highlight { background: #d4af37; color: #1a1f36; padding: 2px 6px; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Application Submission</h1>
              <p>Loan Amount: <span class="highlight">${formData.loanAmount}</span></p>
            </div>
            <div class="content">
              <div class="section">
                <div class="section-title">Personal Information</div>
                <div class="field">
                  <div class="label">Name:</div>
                  <div class="value">${formData.firstName} ${formData.lastName}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value">${formData.email}</div>
                </div>
                <div class="field">
                  <div class="label">Phone:</div>
                  <div class="value">${formData.phone}</div>
                </div>
              </div>
              
              <div class="section">
                <div class="section-title">Business Information</div>
                <div class="field">
                  <div class="label">Company:</div>
                  <div class="value">${formData.company}</div>
                </div>
                <div class="field">
                  <div class="label">Position:</div>
                  <div class="value">${formData.position}</div>
                </div>
                <div class="field">
                  <div class="label">Experience:</div>
                  <div class="value">${formData.experience}</div>
                </div>
              </div>
              
              <div class="section">
                <div class="section-title">Loan Details</div>
                <div class="field">
                  <div class="label">Loan Amount:</div>
                  <div class="value">${formData.loanAmount}</div>
                </div>
                <div class="field">
                  <div class="label">Purpose:</div>
                  <div class="value">${formData.purpose}</div>
                </div>
              </div>
              
              ${formData.message ? `
                <div class="section">
                  <div class="section-title">Additional Information</div>
                  <div class="field">
                    <div class="value">${formData.message}</div>
                  </div>
                </div>
              ` : ''}
            </div>
            <div class="footer">
              <p>Trade Credit Bancorp | ${new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const text = `
      New Application Submission
      
      Personal Information:
      Name: ${formData.firstName} ${formData.lastName}
      Email: ${formData.email}
      Phone: ${formData.phone}
      
      Business Information:
      Company: ${formData.company}
      Position: ${formData.position}
      Experience: ${formData.experience}
      
      Loan Details:
      Loan Amount: ${formData.loanAmount}
      Purpose: ${formData.purpose}
      
      ${formData.message ? `Additional Information:\n${formData.message}` : ''}
      
      ---
      Trade Credit Bancorp | ${new Date().toLocaleDateString()}
    `;

    return { subject, html, text };
  }

  private getWelcomeEmailTemplate(userName: string): EmailTemplate {
    const subject = `Welcome to Trade Credit Bancorp, ${userName}!`;
    
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to Trade Credit Bancorp</title>
        </head>
        <body>
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: #1a1f36; color: white; padding: 30px; text-align: center;">
              <h1>Welcome to Trade Credit Bancorp!</h1>
              <p>Your trusted partner in business finance</p>
            </div>
            <div style="background: #f9f9f9; padding: 30px;">
              <h2>Hello ${userName},</h2>
              <p>Thank you for joining Trade Credit Bancorp! We're excited to have you as part of our community.</p>
              <p>Welcome aboard!</p>
              <p><strong>The Trade Credit Bancorp Team</strong></p>
            </div>
          </div>
        </body>
      </html>
    `;

    const text = `
      Welcome to Trade Credit Bancorp!
      
      Hello ${userName},
      
      Thank you for joining Trade Credit Bancorp! We're excited to have you as part of our community.
      
      Welcome aboard!
      The Trade Credit Bancorp Team
    `;

    return { subject, html, text };
  }

  private getPasswordResetTemplate(resetToken: string, userName: string): EmailTemplate {
    const subject = 'Reset Your Trade Credit Bancorp Password';
    
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Password Reset Request</title>
        </head>
        <body>
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: #1a1f36; color: white; padding: 30px; text-align: center;">
              <h1>Password Reset Request</h1>
            </div>
            <div style="background: #f9f9f9; padding: 30px;">
              <h2>Hello ${userName},</h2>
              <p>We received a request to reset your Trade Credit Bancorp account password.</p>
              <p>This link will expire in 1 hour for security reasons.</p>
              <p><strong>The Trade Credit Bancorp Security Team</strong></p>
            </div>
          </div>
        </body>
      </html>
    `;

    const text = `
      Password Reset Request
      
      Hello ${userName},
      
      We received a request to reset your Trade Credit Bancorp account password.
      
      This link will expire in 1 hour for security reasons.
      
      The Trade Credit Bancorp Security Team
    `;

    return { subject, html, text };
  }

  private getVerificationEmailTemplate(verificationToken: string, userName: string): EmailTemplate {
    const subject = 'Verify Your Trade Credit Bancorp Account';
    
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Verify Your Account</title>
        </head>
        <body>
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: #1a1f36; color: white; padding: 30px; text-align: center;">
              <h1>Verify Your Account</h1>
            </div>
            <div style="background: #f9f9f9; padding: 30px;">
              <h2>Hello ${userName},</h2>
              <p>Welcome to Trade Credit Bancorp! Please verify your email address to activate your account.</p>
              <p>Thank you for choosing Trade Credit Bancorp!</p>
              <p><strong>The Trade Credit Bancorp Team</strong></p>
            </div>
          </div>
        </body>
      </html>
    `;

    const text = `
      Verify Your Account
      
      Hello ${userName},
      
      Welcome to Trade Credit Bancorp! Please verify your email address to activate your account.
      
      Thank you for choosing Trade Credit Bancorp!
      
      The Trade Credit Bancorp Team
    `;

    return { subject, html, text };
  }
}

// Error class for email-specific errors
class EmailError extends Error {
  public code: string;
  public details?: any;

  constructor(code: string, message: string, details?: any) {
    super(message);
    this.name = 'EmailError';
    this.code = code;
    this.details = details;
  }
}

// Factory function to create email service with environment variables
export function createEmailService(): EmailService {
  const config: EmailConfig = {
    clientId: process.env.GMAIL_CLIENT_ID || '',
    clientSecret: process.env.GMAIL_CLIENT_SECRET || '',
    redirectUri: process.env.GMAIL_REDIRECT_URI || 'https://developers.google.com/oauthplayground',
    refreshToken: process.env.GMAIL_REFRESH_TOKEN || '',
    fromEmail: process.env.GMAIL_FROM_EMAIL || '',
    fromName: process.env.GMAIL_FROM_NAME || 'Trade Credit Bancorp',
  };

  // Validate required environment variables only in runtime
  if (process.env.VERCEL_ENV || process.env.NODE_ENV === 'development') {
    const requiredVars = ['GMAIL_CLIENT_ID', 'GMAIL_CLIENT_SECRET', 'GMAIL_REFRESH_TOKEN', 'GMAIL_FROM_EMAIL'];
    const missingVars = requiredVars.filter(varName => !process.env[varName]);
    
    if (missingVars.length > 0) {
      throw new EmailError(
        'MISSING_CONFIG',
        `Missing required environment variables: ${missingVars.join(', ')}`
      );
    }
  }

  return new EmailService(config);
}

// Singleton instance
let emailServiceInstance: EmailService | null = null;

export function getEmailService(): EmailService {
  if (!emailServiceInstance) {
    emailServiceInstance = createEmailService();
  }
  return emailServiceInstance;
}

// Utility functions for common email operations
export const emailUtils = {
  /**
   * Validate email address format
   */
  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  /**
   * Sanitize email content to prevent XSS
   */
  sanitizeEmailContent(content: string): string {
    return content
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  },

  /**
   * Format phone number for display
   */
  formatPhoneNumber(phone: string): string {
    const cleaned = phone.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phone;
  },

  /**
   * Generate secure token for password reset/verification
   */
  generateSecureToken(): string {
    return Math.random().toString(36).substring(2, 15) + 
           Math.random().toString(36).substring(2, 15) + 
           Date.now().toString(36);
  },
};