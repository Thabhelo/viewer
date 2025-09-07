import React from 'react';
import Link from 'next/link';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="root-layout">
      {/* Navigation */}
      <nav className="border-b bg-white/70 dark:bg-slate-950/60 glass sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2 ring-focus">
              <svg width={38} height={32} viewBox="0 0 38 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0L35.6218 8V24L19 32L2.37818 24V8L19 0Z" fill="#3B82F6"/>
                <path d="M19 8L27.8564 12V20L19 24L10.1436 20V12L19 8Z" fill="#FFFFFF"/>
              </svg>
              <h2 className="text-xl font-bold text-slate-900"><span className="text-gradient">PrepWise</span></h2>
            </Link>
            
            {/* User menu and navigation items (Issue #1) */}
            <div className="flex items-center gap-3">
              <Link href="/interview" className="hidden sm:inline-block text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md">
                Generate Interview
              </Link>
              <Link href="/interview" className="btn btn-primary">Start now</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
