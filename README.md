# PrepWise - AI Mock Interview Platform

A modern web application that helps users practice job interviews with AI-powered mock interviews and receive instant feedback to improve their skills and land their dream job.

## Features

### ✅ Implemented (Basic UI)
- **Authentication Pages**: Sign up and sign in forms with clean UI
- **Homepage**: Hero section with call-to-action and interview cards display
- **Interview Generation**: AI agent interface for creating personalized interviews
- **Interview Session**: Mock interview interface with AI interviewer
- **Feedback Page**: Detailed feedback display with scoring and recommendations
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Modern UI Components**: Built with shadcn/ui components
- **Online Image Resources**: Uses Unsplash and DevIcons CDN for all images

### 🚀 To Be Implemented (GitHub Issues)
- Firebase Authentication & Database integration
- Vapi AI voice agent integration
- Google Gemini AI for interview generation and feedback
- Real-time voice conversation capabilities
- User dashboard with interview history
- Advanced feedback analytics
- Interview scheduling and reminders

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Font**: Inter

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd viewer
```

2. Install dependencies:
```bash
npm install
```

3. Run the setup script (optional):
```bash
npm run setup
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### ✅ All Styling Issues Fixed!
- Professional online images from Unsplash and DevIcons CDN
- Complete Tailwind CSS configuration with dark mode support
- Responsive design system with custom components
- No local image dependencies - everything loads from CDN

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication routes
│   │   ├── sign-in/       # Sign in page
│   │   └── sign-up/       # Sign up page
│   ├── (root)/            # Main app routes
│   │   ├── interview/     # Interview pages
│   │   │   ├── [id]/      # Dynamic interview routes
│   │   │   └── page.tsx   # Interview generation
│   │   └── page.tsx       # Homepage
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── agent.tsx         # AI agent component
│   ├── auth-form.tsx     # Authentication form
│   ├── interview-card.tsx # Interview card component
│   └── display-tech-icons.tsx # Tech stack icons
├── lib/                  # Utility functions
├── types/                # TypeScript type definitions
├── constants/            # App constants and mock data
└── public/              # Static assets
```

## Available Routes

- `/` - Homepage with interview cards
- `/sign-in` - User sign in
- `/sign-up` - User registration  
- `/interview` - Generate new interview
- `/interview/[id]` - Take specific interview
- `/interview/[id]/feedback` - View interview feedback

## Contributing

This project is set up for educational purposes. Students can pick up GitHub issues to implement advanced features. See the Issues tab for available tasks.

### Development Guidelines

1. Follow the existing code structure and naming conventions
2. Use TypeScript for type safety
3. Follow the component-based architecture
4. Write clean, readable code with proper comments
5. Test your changes before submitting PRs

## Environment Variables

The following environment variables will be needed for full functionality (see GitHub issues):

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
FIREBASE_PRIVATE_KEY=
FIREBASE_CLIENT_EMAIL=

# Vapi Configuration  
NEXT_PUBLIC_VAPI_WEB_TOKEN=
VAPI_WORKFLOW_ID=

# Google Gemini AI
GOOGLE_GENERATIVE_AI_API_KEY=
```

## License

This project is for educational purposes. See individual issues for specific implementation tasks.

## Support

For questions about implementation or getting started, please check the GitHub issues or create a new discussion.