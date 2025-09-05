'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { FormType } from '@/types';

interface AuthFormProps {
  type: FormType;
}

export default function AuthForm({ type }: AuthFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const isSignIn = type === 'sign-in';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: Implement authentication logic
    console.log('Form submitted:', formData);
    
    if (isSignIn) {
      // TODO: Sign in logic
      console.log('Signing in...');
    } else {
      // TODO: Sign up logic
      console.log('Creating account...');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="card-border w-full max-w-md">
      <div className="card-padding">
        <div className="flex flex-col gap-6">
          {/* Logo and Title */}
          <div className="flex flex-row gap-2 justify-center">
            <svg width={38} height={32} viewBox="0 0 38 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 0L35.6218 8V24L19 32L2.37818 24V8L19 0Z" fill="#3B82F6"/>
              <path d="M19 8L27.8564 12V20L19 24L10.1436 20V12L19 8Z" fill="#FFFFFF"/>
            </svg>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              PrepWise
            </h2>
          </div>

          <h3 className="text-center text-slate-600 dark:text-slate-400">
            Practice job interviews with AI
          </h3>

          {/* Form */}
          <form onSubmit={handleSubmit} className="form">
            {!isSignIn && (
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <Button type="submit" className="w-full btn-primary">
              {isSignIn ? 'Sign In' : 'Create Account'}
            </Button>
          </form>

          {/* Switch between sign in and sign up */}
          <p className="text-center text-sm text-slate-600 dark:text-slate-400">
            {isSignIn ? "Don't have an account yet?" : 'Already have an account?'}
            <Link 
              href={isSignIn ? '/sign-up' : '/sign-in'}
              className="ml-1 font-medium text-blue-600 hover:text-blue-500"
            >
              {isSignIn ? 'Sign up' : 'Sign in'}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
