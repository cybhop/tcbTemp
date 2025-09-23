"use client";

import { useState, useEffect } from 'react';
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { LiveChatComponent } from "@/components/live-chat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Plus, 
  CreditCard, 
  FileText, 
  TrendingUp, 
  Bell, 
  User, 
  Building, 
  DollarSign, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  ArrowRight,
  Download,
  Upload,
  Globe,
  Shield,
  Settings
} from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-8">
          {/* Dashboard Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, John!</h1>
              <p className="text-muted-foreground">Here's your account overview and recent activity</p>
            </div>
            <div className="flex gap-2 mt-4 sm:mt-0">
              <Button size="sm" className="bg-highlight hover:bg-highlight/90 text-primary">
                <Plus className="w-4 h-4 mr-2" />
                New Application
              </Button>
              <Button size="sm" variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Download Reports
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Available Credit</p>
                    <p className="text-2xl font-bold">Confidential</p>
                  </div>
                  <CreditCard className="w-8 h-8 text-primary" />
                </div>
                <p className="text-xs text-green-600 mt-2">+5.2% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Active Applications</p>
                    <p className="text-2xl font-bold">3</p>
                  </div>
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <p className="text-xs text-blue-600 mt-2">2 pending review</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">This Month</p>
                    <p className="text-2xl font-bold">Confidential</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <p className="text-xs text-green-600 mt-2">+12% vs last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Notifications</p>
                    <p className="text-2xl font-bold">5</p>
                  </div>
                  <Bell className="w-8 h-8 text-primary" />
                </div>
                <p className="text-xs text-orange-600 mt-2">3 require attention</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
              <TabsTrigger value="transactions">Transactions</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Recent Applications */}
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Recent Applications</CardTitle>
                    <CardDescription>Your latest application submissions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { id: 'APP001', type: 'Business Loan', amount: '$100,000', status: 'approved', date: '2024-01-15' },
                        { id: 'APP002', type: 'Letter of Credit', amount: '$50,000', status: 'pending', date: '2024-01-10' },
                        { id: 'APP003', type: 'Bank Guarantee', amount: '$75,000', status: 'under_review', date: '2024-01-08' }
                      ].map((app) => (
                        <div key={app.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                              <FileText className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <p className="font-medium">{app.type}</p>
                              <p className="text-sm text-muted-foreground">Application ID: {app.id}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold">Amount on file</p>
                            <Badge variant={app.status === 'approved' ? 'default' : app.status === 'pending' ? 'secondary' : 'outline'}>
                              {app.status.replace('_', ' ')}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                    <CardDescription>Start a new application</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full justify-start" variant="outline">
                      <CreditCard className="w-4 h-4 mr-2" />
                      Apply for Business Loan
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Globe className="w-4 h-4 mr-2" />
                      Letter of Credit
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Shield className="w-4 h-4 mr-2" />
                      Bank Guarantee
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Building className="w-4 h-4 mr-2" />
                      Business IBAN
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your account activity timeline</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { action: 'Application Approved', detail: 'Business Loan application APP001 has been approved', time: '2 hours ago', status: 'success' },
                      { action: 'Document Uploaded', detail: 'Financial statements uploaded for application APP002', time: '1 day ago', status: 'info' },
                      { action: 'Payment Received', detail: 'Monthly payment received', time: '3 days ago', status: 'success' },
                      { action: 'Review Required', detail: 'Additional documentation needed for APP003', time: '5 days ago', status: 'warning' }
                    ].map((activity, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className={`w-2 h-2 rounded-full mt-2 ${
                          activity.status === 'success' ? 'bg-green-500' : 
                          activity.status === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                        }`} />
                        <div className="flex-1">
                          <p className="font-medium">{activity.action}</p>
                          <p className="text-sm text-muted-foreground">{activity.detail}</p>
                          <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="applications" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>All Applications</CardTitle>
                  <CardDescription>View and manage your application submissions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { id: 'APP001', type: 'Business Loan', amount: '$100,000', status: 'approved', date: '2024-01-15', officer: 'Sarah Johnson' },
                      { id: 'APP002', type: 'Letter of Credit', amount: '$50,000', status: 'pending', date: '2024-01-10', officer: 'Mike Chen' },
                      { id: 'APP003', type: 'Bank Guarantee', amount: '$75,000', status: 'under_review', date: '2024-01-08', officer: 'Lisa Wang' },
                      { id: 'APP004', type: 'Business IBAN', amount: 'N/A', status: 'active', date: '2024-01-01', officer: 'David Brown' }
                    ].map((app) => (
                      <div key={app.id} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                              <FileText className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <p className="font-semibold">{app.type}</p>
                              <p className="text-sm text-muted-foreground">ID: {app.id}</p>
                              <p className="text-xs text-muted-foreground">Officer: {app.officer}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold">Amount on file</p>
                            <Badge variant={app.status === 'approved' || app.status === 'active' ? 'default' : app.status === 'pending' ? 'secondary' : 'outline'}>
                              {app.status.replace('_', ' ')}
                            </Badge>
                            <p className="text-xs text-muted-foreground mt-1">{app.date}</p>
                          </div>
                        </div>
                        <div className="mt-4 flex space-x-2">
                          <Button size="sm" variant="outline">View Details</Button>
                          <Button size="sm" variant="outline">Download</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="transactions" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Transaction History</CardTitle>
                  <CardDescription>Your recent financial transactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { id: 'TXN001', type: 'Credit', description: 'Loan disbursement - APP001', amount: '+$100,000', date: '2024-01-15' },
                      { id: 'TXN002', type: 'Debit', description: 'Monthly payment', amount: '-$2,500', date: '2024-01-10' },
                      { id: 'TXN003', type: 'Credit', description: 'Interest payment', amount: '+$1,200', date: '2024-01-08' },
                      { id: 'TXN004', type: 'Debit', description: 'Service update', amount: '-$150', date: '2024-01-05' }
                    ].map((txn) => (
                      <div key={txn.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            txn.type === 'Credit' ? 'bg-green-100' : 'bg-red-100'
                          }`}>
                            <DollarSign className={`w-5 h-5 ${
                              txn.type === 'Credit' ? 'text-green-600' : 'text-red-600'
                            }`} />
                          </div>
                          <div>
                            <p className="font-medium">{txn.description}</p>
                            <p className="text-sm text-muted-foreground">Transaction ID: {txn.id}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className={`font-semibold ${
                            txn.type === 'Credit' ? 'text-green-600' : 'text-red-600'
                          }`}>Confidential</p>
                          <p className="text-xs text-muted-foreground">{txn.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="documents" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Document Center</CardTitle>
                  <CardDescription>Upload and manage your documents</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">Drag and drop files here or click to upload</p>
                      <Button variant="outline">Choose Files</Button>
                    </div>
                    
                    <div className="space-y-3">
                      {[
                        { name: 'Financial Statements 2023.pdf', size: '2.4 MB', uploaded: '2024-01-15' },
                        { name: 'Bank Statements Q4.pdf', size: '1.8 MB', uploaded: '2024-01-10' },
                        { name: 'Business Registration.pdf', size: '0.9 MB', uploaded: '2024-01-08' }
                      ].map((doc, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center space-x-3">
                            <FileText className="w-5 h-5 text-primary" />
                            <div>
                              <p className="font-medium">{doc.name}</p>
                              <p className="text-sm text-muted-foreground">{doc.size} • Uploaded {doc.uploaded}</p>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">View</Button>
                            <Button size="sm" variant="outline">Download</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>Manage your account preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-4">Profile Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium">First Name</label>
                        <input type="text" className="w-full p-2 border rounded-lg mt-1" defaultValue="John" />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Last Name</label>
                        <input type="text" className="w-full p-2 border rounded-lg mt-1" defaultValue="Doe" />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Email</label>
                        <input type="email" className="w-full p-2 border rounded-lg mt-1" defaultValue="john@example.com" />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Phone</label>
                        <input type="tel" className="w-full p-2 border rounded-lg mt-1" defaultValue="+1 (555) 123-4567" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-4">Notifications</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span>Email notifications</span>
                        <input type="checkbox" className="toggle" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <span>SMS notifications</span>
                        <input type="checkbox" className="toggle" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Application updates</span>
                        <input type="checkbox" className="toggle" defaultChecked />
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <Button className="bg-primary hover:bg-primary/90">Save Changes</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
      <LiveChatComponent />
    </div>
  );
}