"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { LiveChatComponent } from "@/components/live-chat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Eye, EyeOff, KeyRound, Mail, CheckCircle, AlertCircle, Shield } from "lucide-react";

interface LoginFormData {
  email: string;
  password: string;
  otp: string;
}

interface FormErrors {
  [key: string]: string;
}

type LoginStep = 'credentials' | 'otp' | 'success';

export default function LoginPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<LoginStep>('credentials');
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
    otp: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [attemptsRemaining, setAttemptsRemaining] = useState<number | null>(null);
  const [otpExpiresAt, setOtpExpiresAt] = useState<number | null>(null);
  const [timeRemaining, setTimeRemaining] = useState<number>(0);

  // Timer effect for OTP expiration
  React.useEffect(() => {
    if (otpExpiresAt && currentStep === 'otp') {
      const timer = setInterval(() => {
        const now = Date.now();
        const remaining = Math.max(0, Math.floor((otpExpiresAt - now) / 1000));
        setTimeRemaining(remaining);
        
        if (remaining <= 0) {
          clearInterval(timer);
          setSubmitError("OTP has expired. Please request a new one.");
          setCurrentStep('credentials');
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [otpExpiresAt, currentStep]);

  const validateCredentials = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateOTP = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.otp.trim()) {
      newErrors.otp = "OTP is required";
    } else if (!/^\d{6}$/.test(formData.otp)) {
      newErrors.otp = "OTP must be 6 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleCredentialsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");
    setSubmitSuccess(false);

    if (!validateCredentials()) return;

    setLoading(true);

    try {
      // First validate credentials
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          step: 'credentials'
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Generate OTP
        const otpResponse = await fetch('/api/auth/otp/generate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: formData.email,
            type: 'login'
          }),
        });

        const otpData = await otpResponse.json();

        if (otpResponse.ok) {
          setOtpExpiresAt(new Date(otpData.expiresAt).getTime());
          setCurrentStep('otp');
          setSubmitSuccess(true);
          setSubmitError("");
        } else {
          setSubmitError(otpData.message || 'Failed to send OTP. Please try again.');
        }
      } else {
        if (response.status === 429) {
          setSubmitError('Too many login attempts. Please try again later.');
        } else {
          setSubmitError(data.message || 'Login failed. Please check your credentials and try again.');
        }
      }
    } catch (error) {
      console.error('Login error:', error);
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleOTPSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    if (!validateOTP()) return;

    setLoading(true);

    try {
      // Verify OTP
      const response = await fetch('/api/auth/otp/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          otp: formData.otp,
          type: 'login'
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Complete login
        const loginResponse = await fetch('/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
            step: 'complete'
          }),
        });

        if (loginResponse.ok) {
          setCurrentStep('success');
          setSubmitSuccess(true);
          setTimeout(() => {
            router.push('/dashboard');
          }, 2000);
        } else {
          setSubmitError('Login completion failed. Please try again.');
        }
      } else {
        if (response.status === 423) {
          setSubmitError(data.message || 'Account temporarily locked. Please try again later.');
        } else {
          setSubmitError(data.message || 'Invalid OTP. Please try again.');
          setAttemptsRemaining(data.attemptsRemaining);
        }
      }
    } catch (error) {
      console.error('OTP verification error:', error);
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    setLoading(true);
    setSubmitError("");

    try {
      const response = await fetch('/api/auth/otp/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          type: 'login'
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setOtpExpiresAt(new Date(data.expiresAt).getTime());
        setFormData(prev => ({ ...prev, otp: "" }));
        setSubmitSuccess(true);
        setTimeout(() => setSubmitSuccess(false), 3000);
      } else {
        setSubmitError(data.message || 'Failed to resend OTP. Please try again.');
      }
    } catch (error) {
      console.error('Resend OTP error:', error);
      setSubmitError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-0">
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 flex items-center justify-center py-20">
          <div className="w-full max-w-md space-y-8">
            {/* Header */}
            <div className="text-center">
              <h1 className="text-3xl font-bold text-primary">Welcome Back</h1>
              <p className="mt-2 text-gray-600">
                {currentStep === 'credentials' && "Sign in to your Trade Credit Bancorp account"}
                {currentStep === 'otp' && "Enter the verification code sent to your email"}
                {currentStep === 'success' && "Login successful!"}
              </p>
            </div>

            {/* Success Message */}
            {submitSuccess && (
              <Alert className="border-green-200 bg-green-50">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800">
                  {currentStep === 'credentials' && "Credentials verified! Check your email for OTP."}
                  {currentStep === 'otp' && "OTP sent successfully!"}
                  {currentStep === 'success' && "Login successful! Redirecting to dashboard..."}
                </AlertDescription>
              </Alert>
            )}

            {/* Error Message */}
            {submitError && (
              <Alert className="border-red-200 bg-red-50">
                <AlertCircle className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-800">
                  {submitError}
                  {attemptsRemaining && attemptsRemaining > 0 && (
                    <span className="block mt-1">
                      {attemptsRemaining} attempt{attemptsRemaining !== 1 ? 's' : ''} remaining
                    </span>
                  )}
                </AlertDescription>
              </Alert>
            )}

            {/* Login Form */}
            <Card className="shadow-xl border-0">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold text-center">
                  {currentStep === 'credentials' && "Sign In"}
                  {currentStep === 'otp' && "Verify Your Identity"}
                  {currentStep === 'success' && "Welcome!"}
                </CardTitle>
                <CardDescription className="text-center">
                  {currentStep === 'credentials' && "Enter your credentials to access your account"}
                  {currentStep === 'otp' && "Enter the 6-digit code we sent to your email"}
                  {currentStep === 'success' && "Taking you to your dashboard..."}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {currentStep === 'credentials' && (
                  <form onSubmit={handleCredentialsSubmit} className="space-y-4">
                    {/* Email Field */}
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`pl-10 ${errors.email ? 'border-red-500' : ''}`}
                          disabled={loading}
                          autoComplete="email"
                        />
                      </div>
                      {errors.email && (
                        <p className="text-sm text-red-500">{errors.email}</p>
                      )}
                    </div>

                    {/* Password Field */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                        <Link 
                          href="/forgot-password" 
                          className="text-sm text-[#DAA520] hover:text-[#B8941C] font-medium"
                        >
                          Forgot password?
                        </Link>
                      </div>
                      <div className="relative">
                        <KeyRound className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          value={formData.password}
                          onChange={handleInputChange}
                          className={`pl-10 pr-10 ${errors.password ? 'border-red-500' : ''}`}
                          disabled={loading}
                          autoComplete="current-password"
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-3 h-4 w-4 text-gray-400 hover:text-gray-600"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                      {errors.password && (
                        <p className="text-sm text-red-500">{errors.password}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full bg-[#DAA520] hover:bg-[#B8941C] text-white font-semibold py-3 rounded-lg transition-colors duration-200"
                      disabled={loading}
                    >
                      {loading ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Validating...
                        </div>
                      ) : (
                        "Continue"
                      )}
                    </Button>
                  </form>
                )}

                {currentStep === 'otp' && (
                  <form onSubmit={handleOTPSubmit} className="space-y-4">
                    {/* OTP Instructions */}
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Shield className="h-4 w-4 text-blue-600" />
                        <span className="text-sm font-medium text-blue-900">Security Verification</span>
                      </div>
                      <p className="text-sm text-blue-700">
                        We've sent a 6-digit verification code to <strong>{formData.email}</strong>
                      </p>
                    </div>

                    {/* OTP Input */}
                    <div className="space-y-2">
                      <Label htmlFor="otp">Verification Code</Label>
                      <Input
                        id="otp"
                        name="otp"
                        type="text"
                        placeholder="000000"
                        value={formData.otp}
                        onChange={handleInputChange}
                        className={`text-center text-lg tracking-widest ${errors.otp ? 'border-red-500' : ''}`}
                        disabled={loading}
                        autoComplete="one-time-code"
                        maxLength={6}
                      />
                      {errors.otp && (
                        <p className="text-sm text-red-500">{errors.otp}</p>
                      )}
                    </div>

                    {/* Timer */}
                    {timeRemaining > 0 && (
                      <div className="text-center">
                        <p className="text-sm text-gray-600">
                          Code expires in: <span className="font-mono font-bold text-red-600">{formatTime(timeRemaining)}</span>
                        </p>
                      </div>
                    )}

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full bg-[#DAA520] hover:bg-[#B8941C] text-white font-semibold py-3 rounded-lg transition-colors duration-200"
                      disabled={loading || timeRemaining === 0}
                    >
                      {loading ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Verifying...
                        </div>
                      ) : (
                        "Verify Code"
                      )}
                    </Button>

                    {/* Resend OTP */}
                    <div className="text-center">
                      <Button
                        type="button"
                        variant="link"
                        onClick={handleResendOTP}
                        disabled={loading || timeRemaining > 0}
                        className="text-[#DAA520] hover:text-[#B8941C]"
                      >
                        {timeRemaining > 0 ? `Resend in ${formatTime(timeRemaining)}` : 'Resend Code'}
                      </Button>
                    </div>

                    {/* Back to Login */}
                    <div className="text-center">
                      <Button
                        type="button"
                        variant="link"
                        onClick={() => setCurrentStep('credentials')}
                        className="text-gray-600 hover:text-gray-800"
                      >
                        ← Back to Login
                      </Button>
                    </div>
                  </form>
                )}

                {currentStep === 'success' && (
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <p className="text-lg font-semibold text-green-800">Login Successful!</p>
                    <p className="text-sm text-gray-600">Redirecting to your dashboard...</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Signup Link */}
            {currentStep === 'credentials' && (
              <p className="text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <Link href="/signup" className="text-[#DAA520] hover:text-[#B8941C] font-semibold">
                  Create account
                </Link>
              </p>
            )}

            {/* Additional Security Info */}
            <div className="text-center text-xs text-gray-500">
              <p>
                By signing in, you agree to our{" "}
                <Link href="/terms-of-service" className="text-[#DAA520] hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy-policy" className="text-[#DAA520] hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
}