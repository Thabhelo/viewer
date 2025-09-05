#!/usr/bin/env node

/**
 * Setup script for PrepWise AI Mock Interview Platform
 * This script helps new contributors get started quickly
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up PrepWise AI Mock Interview Platform...\n');

// Check if .env.local exists
const envPath = path.join(process.cwd(), '.env.local');
if (!fs.existsSync(envPath)) {
  console.log('📝 Creating .env.local template...');
  
  const envTemplate = `# Firebase Configuration (Required for Issues #1, #2)
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\\nYOUR_PRIVATE_KEY\\n-----END PRIVATE KEY-----\\n"
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@your_project.iam.gserviceaccount.com

# Vapi Configuration (Required for Issue #3)
NEXT_PUBLIC_VAPI_WEB_TOKEN=your_vapi_web_token
VAPI_WORKFLOW_ID=your_workflow_id

# Google Gemini AI (Required for Issue #4)
GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_api_key

# Base URL (for production deployment)
NEXT_PUBLIC_BASE_URL=http://localhost:3000
`;

  fs.writeFileSync(envPath, envTemplate);
  console.log('✅ Created .env.local template');
  console.log('   Please fill in your actual API keys before working on advanced features\n');
}

// Check if node_modules exists
const nodeModulesPath = path.join(process.cwd(), 'node_modules');
if (!fs.existsSync(nodeModulesPath)) {
  console.log('📦 Installing dependencies...');
  console.log('   Run: npm install\n');
} else {
  console.log('✅ Dependencies already installed\n');
}

console.log('🎯 Quick Start Guide:');
console.log('1. Run "npm run dev" to start the development server');
console.log('2. Open http://localhost:3000 in your browser');
console.log('3. Check out the GitHub issues to pick a task');
console.log('4. Read CONTRIBUTING.md for development guidelines\n');

console.log('📚 Available Routes:');
console.log('- / (Homepage with interview cards)');
console.log('- /sign-in (User authentication)');
console.log('- /sign-up (User registration)');
console.log('- /interview (Generate new interview)');
console.log('- /interview/[id] (Take specific interview)');
console.log('- /interview/[id]/feedback (View feedback)\n');

console.log('🔧 Current Implementation Status:');
console.log('✅ Basic UI and routing');
console.log('✅ Authentication forms (mock)');
console.log('✅ Interview cards and layouts');
console.log('✅ Agent component for voice interface');
console.log('✅ Feedback display system');
console.log('⏳ Firebase integration (Issue #1, #2)');
console.log('⏳ Vapi AI voice agent (Issue #3)');
console.log('⏳ Google Gemini AI (Issue #4)');
console.log('⏳ Advanced features (Issues #5-10)\n');

console.log('🤝 Ready to contribute? Check the GitHub issues!');
console.log('Happy coding! 🚀');
