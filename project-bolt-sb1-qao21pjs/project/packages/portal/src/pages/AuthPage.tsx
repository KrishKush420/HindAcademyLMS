import React, { useState } from 'react';
import { Button, Card, CardContent, CardHeader, CardTitle, Input, useToast } from '@hind-lms/design-system';
import { useAuth } from '@/features/auth/AuthProvider';
import { GraduationCap } from 'lucide-react';

const AuthPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      addToast({
        type: 'error',
        title: 'Validation Error',
        description: 'Please fill in all fields.',
      });
      return;
    }

    setLoading(true);
    try {
      await login(email, password);
      addToast({
        type: 'success',
        title: 'Welcome back!',
        description: 'You have been successfully logged in.',
      });
    } catch (error) {
      console.error('Login failed:', error);
      addToast({
        type: 'error',
        title: 'Login Failed',
        description: error instanceof Error ? error.message : 'An unexpected error occurred.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-indigo-100 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary-100 rounded-full">
              <GraduationCap className="h-8 w-8 text-primary-600" />
            </div>
          </div>
          <CardTitle className="text-2xl">Welcome to Hind LMS</CardTitle>
          <p className="text-gray-600">Sign in to access your learning portal</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            <Input
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
            <Button
              type="submit"
              className="w-full"
              loading={loading}
              disabled={loading}
            >
              Sign In
            </Button>
          </form>
          
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="text-center text-sm text-gray-600">
              <p className="mb-2">Demo Credentials:</p>
              <div className="space-y-1 text-xs bg-gray-50 p-3 rounded">
                <p><strong>Student:</strong> student@example.com / demo123</p>
                <p><strong>Faculty:</strong> faculty@example.com / demo123</p>
                <p><strong>Admin:</strong> admin@example.com / demo123</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthPage;