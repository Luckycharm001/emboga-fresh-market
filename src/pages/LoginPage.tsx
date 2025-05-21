
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ChevronRight } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const LoginPage = () => {
  const [userRole, setUserRole] = useState('consumer');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for login functionality
    console.log("Login submitted");
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for register functionality with role
    console.log("Register submitted with role:", userRole);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center mb-8">
          <Link to="/" className="text-emboga-primary hover:underline">Home</Link>
          <ChevronRight className="h-4 w-4 mx-2 text-gray-500" />
          <span className="font-medium">Account</span>
        </div>

        <div className="max-w-md mx-auto">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            <TabsContent value="login" className="space-y-4 pt-4">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" required />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link to="/forgot-password" className="text-sm text-emboga-primary hover:underline">
                      Forgot Password?
                    </Link>
                  </div>
                  <Input id="password" type="password" required />
                </div>
                <Button type="submit" className="w-full bg-emboga-primary hover:bg-emboga-secondary">
                  Login
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="register" className="space-y-4 pt-4">
              <form onSubmit={handleRegister} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="register-name">Full Name</Label>
                  <Input id="register-name" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-email">Email</Label>
                  <Input id="register-email" type="email" placeholder="your@email.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-phone">Phone Number</Label>
                  <Input id="register-phone" type="tel" placeholder="0700000000" required />
                </div>
                
                <div className="space-y-2">
                  <Label>I am a:</Label>
                  <RadioGroup defaultValue="consumer" onValueChange={setUserRole} className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="consumer" id="consumer" />
                      <Label htmlFor="consumer">Consumer</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="farmer" id="farmer" />
                      <Label htmlFor="farmer">Farmer</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                {userRole === 'farmer' && (
                  <div className="space-y-4 pt-2 border-t">
                    <Alert>
                      <AlertDescription>
                        As a farmer, you will be able to list your produce on the E-Mboga platform for consumers to purchase.
                      </AlertDescription>
                    </Alert>
                    <div className="space-y-2">
                      <Label htmlFor="farm-name">Farm Name</Label>
                      <Input id="farm-name" placeholder="Green Acres Farm" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="farm-location">Farm Location</Label>
                      <Input id="farm-location" placeholder="e.g., Kiambu County" />
                    </div>
                  </div>
                )}
                
                {userRole === 'consumer' && (
                  <div className="space-y-4 pt-2 border-t">
                    <Alert>
                      <AlertDescription>
                        As a consumer, you will be able to browse and purchase fresh produce directly from farmers.
                      </AlertDescription>
                    </Alert>
                    <div className="space-y-2">
                      <Label htmlFor="delivery-address">Delivery Address</Label>
                      <Input id="delivery-address" placeholder="e.g., Westlands, Nairobi" />
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="register-password">Password</Label>
                  <Input id="register-password" type="password" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-confirm-password">Confirm Password</Label>
                  <Input id="register-confirm-password" type="password" required />
                </div>
                <Button type="submit" className="w-full bg-emboga-primary hover:bg-emboga-secondary">
                  Register as {userRole === 'farmer' ? 'Farmer' : 'Consumer'}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
