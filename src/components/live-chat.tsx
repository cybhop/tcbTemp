"use client";

import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { 
  MessageCircle, 
  X, 
  Send, 
  Paperclip, 
  Smile, 
  User, 
  Bot, 
  Circle, 
  Clock,
  Phone,
  Mail,
  MapPin,
  FileText,
  Image,
  Minimize2,
  Maximize2
} from 'lucide-react';

interface Message {
  id: string;
  content: string;
  timestamp: Date;
  sender: 'user' | 'agent';
  type: 'text' | 'file' | 'image';
  fileUrl?: string;
  fileName?: string;
}

interface ChatState {
  isOpen: boolean;
  isMinimized: boolean;
  unreadCount: number;
  isTyping: boolean;
  agentStatus: 'online' | 'offline' | 'away';
  messages: Message[];
}

const quickResponses = [
  { id: 1, text: "How can I apply for a loan?", response: "I'd be happy to help you with loan applications. We offer various loan products including business loans, equipment financing, and lines of credit. What type of financing are you looking for?" },
  { id: 2, text: "What are your interest rates?", response: "Our interest rates vary based on loan type, amount, and your business profile. Rates typically range from 6.5% to 24% APR. Would you like me to connect you with a loan specialist for a personalized quote?" },
  { id: 3, text: "Check application status", response: "I can help you check your application status. Please provide your application reference number or the email address used for your application." },
  { id: 4, text: "Need help with payments", response: "I'm here to help with payment-related questions. Are you looking to make a payment, update payment information, or discuss payment options?" }
];

export const LiveChatComponent = () => {
  const [chatState, setChatState] = useState<ChatState>({
    isOpen: false,
    isMinimized: false,
    unreadCount: 0,
    isTyping: false,
    agentStatus: 'online',
    messages: [
      {
        id: '1',
        content: "Hello! I'm Sarah from Trade Credit Bancorp. How can I help you today?",
        timestamp: new Date(),
        sender: 'agent',
        type: 'text'
      }
    ]
  });

  const [currentMessage, setCurrentMessage] = useState('');
  const [showQuickResponses, setShowQuickResponses] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatState.messages]);

  // Simulate agent responses
  useEffect(() => {
    if (chatState.messages.length > 0) {
      const lastMessage = chatState.messages[chatState.messages.length - 1];
      if (lastMessage.sender === 'user') {
        setChatState(prev => ({ ...prev, isTyping: true }));
        
        setTimeout(() => {
          const responses = [
            "Thank you for your message. Let me help you with that.",
            "I understand your concern. Let me check our options for you.",
            "That's a great question! I'll provide you with detailed information.",
            "I'd be happy to assist you with that. Let me gather some information."
          ];
          
          const randomResponse = responses[Math.floor(Math.random() * responses.length)];
          
          setChatState(prev => ({
            ...prev,
            isTyping: false,
            messages: [...prev.messages, {
              id: Date.now().toString(),
              content: randomResponse,
              timestamp: new Date(),
              sender: 'agent',
              type: 'text'
            }]
          }));
        }, 1500);
      }
    }
  }, [chatState.messages]);

  const toggleChat = () => {
    setChatState(prev => ({
      ...prev,
      isOpen: !prev.isOpen,
      unreadCount: prev.isOpen ? prev.unreadCount : 0
    }));
  };

  const toggleMinimize = () => {
    setChatState(prev => ({
      ...prev,
      isMinimized: !prev.isMinimized
    }));
  };

  const sendMessage = () => {
    if (currentMessage.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        content: currentMessage,
        timestamp: new Date(),
        sender: 'user',
        type: 'text'
      };

      setChatState(prev => ({
        ...prev,
        messages: [...prev.messages, newMessage]
      }));
      
      setCurrentMessage('');
      setShowQuickResponses(false);
      
      // Auto-resize textarea
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }
  };

  const handleQuickResponse = (response: typeof quickResponses[0]) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content: response.text,
      timestamp: new Date(),
      sender: 'user',
      type: 'text'
    };

    const agentMessage: Message = {
      id: (Date.now() + 1).toString(),
      content: response.response,
      timestamp: new Date(),
      sender: 'agent',
      type: 'text'
    };

    setChatState(prev => ({
      ...prev,
      messages: [...prev.messages, userMessage, agentMessage]
    }));
    
    setShowQuickResponses(false);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileMessage: Message = {
        id: Date.now().toString(),
        content: `Uploaded file: ${file.name}`,
        timestamp: new Date(),
        sender: 'user',
        type: file.type.startsWith('image/') ? 'image' : 'file',
        fileName: file.name,
        fileUrl: URL.createObjectURL(file)
      };

      setChatState(prev => ({
        ...prev,
        messages: [...prev.messages, fileMessage]
      }));
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Button */}
      {!chatState.isOpen && (
        <Button
          onClick={toggleChat}
          className="relative h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg transition-all duration-300 hover:scale-105"
          aria-label="Open chat"
        >
          <MessageCircle className="h-6 w-6 text-primary-foreground" />
          {chatState.unreadCount > 0 && (
            <Badge className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-red-500 text-xs font-bold text-white">
              {chatState.unreadCount}
            </Badge>
          )}
        </Button>
      )}

      {/* Chat Window */}
      {chatState.isOpen && (
        <Card className="w-[320px] sm:w-[380px] h-[500px] sm:h-[600px] max-h-[80vh] shadow-2xl border-0 bg-background animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <CardHeader className="bg-primary text-primary-foreground p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                    <User className="h-4 w-4 text-primary" />
                  </div>
                  <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-primary ${
                    chatState.agentStatus === 'online' ? 'bg-green-500' : 
                    chatState.agentStatus === 'away' ? 'bg-yellow-500' : 'bg-gray-500'
                  }`} />
                </div>
                <div>
                  <CardTitle className="text-sm font-medium">Sarah</CardTitle>
                  <p className="text-xs opacity-90">
                    {chatState.agentStatus === 'online' ? 'Online' : 
                     chatState.agentStatus === 'away' ? 'Away' : 'Offline'}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleMinimize}
                  className="h-8 w-8 p-0 hover:bg-primary/20"
                >
                  {chatState.isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleChat}
                  className="h-8 w-8 p-0 hover:bg-primary/20"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>

          {!chatState.isMinimized && (
            <CardContent className="p-0 flex flex-col h-[calc(100%-80px)]">
              {/* Messages */}
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {chatState.messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[80%] ${message.sender === 'user' ? 'order-2' : 'order-1'}`}>
                        <div
                          className={`p-3 rounded-lg ${
                            message.sender === 'user'
                              ? 'bg-primary text-primary-foreground ml-auto'
                              : 'bg-accent text-accent-foreground'
                          }`}
                        >
                          {message.type === 'text' && (
                            <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                          )}
                          {message.type === 'file' && (
                            <div className="flex items-center space-x-2">
                              <FileText className="h-4 w-4" />
                              <span className="text-sm">{message.fileName}</span>
                            </div>
                          )}
                          {message.type === 'image' && message.fileUrl && (
                            <div className="space-y-2">
                              <img
                                src={message.fileUrl}
                                alt={message.fileName}
                                className="max-w-full rounded-lg"
                              />
                              <p className="text-xs opacity-80">{message.fileName}</p>
                            </div>
                          )}
                        </div>
                        <div className={`flex items-center space-x-1 mt-1 ${
                          message.sender === 'user' ? 'justify-end' : 'justify-start'
                        }`}>
                          <Clock className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">
                            {formatTime(message.timestamp)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Typing Indicator */}
                  {chatState.isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-accent p-3 rounded-lg">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Quick Responses */}
                  {showQuickResponses && (
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Quick responses:</p>
                      {quickResponses.map((response) => (
                        <Button
                          key={response.id}
                          variant="outline"
                          size="sm"
                          onClick={() => handleQuickResponse(response)}
                          className="w-full justify-start text-left h-auto py-2 px-3 whitespace-normal text-xs"
                        >
                          {response.text}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
                <div ref={messagesEndRef} />
              </ScrollArea>

              {/* Input Area */}
              <div className="border-t p-4 bg-background">
                <div className="flex items-end space-x-2">
                  <div className="flex-1">
                    <Textarea
                      ref={textareaRef}
                      value={currentMessage}
                      onChange={(e) => {
                        setCurrentMessage(e.target.value);
                        // Auto-resize
                        e.target.style.height = 'auto';
                        e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px';
                      }}
                      onKeyDown={handleKeyPress}
                      placeholder="Type your message..."
                      className="min-h-[44px] max-h-[120px] resize-none text-sm"
                      rows={1}
                    />
                  </div>
                  <div className="flex items-center space-x-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => fileInputRef.current?.click()}
                      className="h-11 w-11 p-0"
                    >
                      <Paperclip className="h-4 w-4" />
                    </Button>
                    <Button
                      onClick={sendMessage}
                      disabled={!currentMessage.trim()}
                      className="h-11 w-11 p-0 bg-primary hover:bg-primary/90"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="mt-3 pt-3 border-t">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Phone className="h-3 w-3" />
                        <span className="hidden sm:inline">+44-7453-747965</span>
                        <span className="sm:hidden">Call</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Mail className="h-3 w-3" />
                        <span className="hidden sm:inline">tradecreditbancorp@gmail.com</span>
                        <span className="sm:hidden">Email</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          )}
        </Card>
      )}

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png,.gif"
        onChange={handleFileUpload}
      />
    </div>
  );
};