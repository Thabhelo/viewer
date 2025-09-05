'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { AgentProps, CallStatus, SavedMessage } from '@/types';

export default function Agent({ username, userId, type, interviewId, questions }: AgentProps) {
  const router = useRouter();
  
  // State management
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE);
  const [messages, setMessages] = useState<SavedMessage[]>([]);
  
  // Mock conversation messages for demo
  const mockMessages = [
    "Hello! Let's prepare your interview.",
    "What role are you looking to train for?",
    "What type of interview would you like - technical, behavioral, or mixed?"
  ];

  // Get the latest message
  const latestMessage = messages.length > 0 
    ? messages[messages.length - 1].content 
    : mockMessages[Math.floor(Math.random() * mockMessages.length)];

  // Check if call is inactive or finished
  const isCallInactiveOrFinished = callStatus === CallStatus.INACTIVE || callStatus === CallStatus.FINISHED;

  // Handle call start
  const handleCall = async () => {
    setCallStatus(CallStatus.CONNECTING);
    
    // TODO: Implement Vapi integration
    console.log('Starting call with type:', type);
    
    // Simulate call connection
    setTimeout(() => {
      setCallStatus(CallStatus.ACTIVE);
      setIsSpeaking(true);
      
      // Add mock message
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Hello! Ready to start your interview preparation?'
      }]);
    }, 1000);
  };

  // Handle call disconnect
  const handleDisconnect = () => {
    setCallStatus(CallStatus.FINISHED);
    setIsSpeaking(false);
    
    // TODO: Process call completion
    if (type === 'generate') {
      // Redirect to homepage after interview generation
      router.push('/');
    } else {
      // Handle interview completion and feedback generation
      console.log('Interview completed, generating feedback...');
      // TODO: Generate feedback and redirect to feedback page
    }
  };

  useEffect(() => {
    // Cleanup on component unmount
    return () => {
      if (callStatus === CallStatus.ACTIVE) {
        setCallStatus(CallStatus.FINISHED);
      }
    };
  }, [callStatus]);

  return (
    <>
      <div className="call-view">
        {/* AI Interviewer Card */}
        <div className="card-interviewer">
          <div className="avatar">
            <Image
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=65&h=65&fit=crop&crop=center"
              alt="AI Interviewer"
              width={65}
              height={54}
              className="object-cover rounded-full"
            />
            {isSpeaking && (
              <span className="absolute animate-ping rounded-full opacity-75 bg-blue-400 size-16" />
            )}
          </div>
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mt-4">
            AI Interviewer
          </h3>
        </div>

        {/* User Card */}
        <div className="card-border">
          <div className="card-content">
            <Image
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=center"
              alt="User Avatar"
              width={120}
              height={120}
              className="rounded-full object-cover size-[120px]"
            />
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {username}
            </h3>
          </div>
        </div>

        {/* Transcript */}
        {messages.length > 0 && (
          <div className="transcript-border w-full">
            <div className="transcript">
              <p className="transition-opacity duration-500 animate-fade-in opacity-100 text-sm">
                {latestMessage}
              </p>
            </div>
          </div>
        )}

        {/* Call Controls */}
        <div className="w-full flex justify-center">
          {callStatus !== CallStatus.ACTIVE ? (
            <Button
              onClick={handleCall}
              className="btn-call"
              disabled={callStatus === CallStatus.CONNECTING}
            >
              <span className={`absolute animate-ping rounded-full opacity-75 ${
                callStatus === CallStatus.CONNECTING ? 'block' : 'hidden'
              }`} />
              <span>
                {isCallInactiveOrFinished ? 'Call' : '...'}
              </span>
            </Button>
          ) : (
            <Button
              onClick={handleDisconnect}
              className="btn-disconnect"
            >
              End
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
