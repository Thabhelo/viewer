# Contributing to PrepWise

Thank you for your interest in contributing to PrepWise! This document provides guidelines for contributing to the project.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** to your local machine
3. **Install dependencies**: `npm install`
4. **Start the development server**: `npm run dev`
5. **Create a new branch** for your feature: `git checkout -b feature/your-feature-name`

## Project Structure

Understanding the project structure will help you navigate and contribute effectively:

```
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication routes (sign-in, sign-up)
│   ├── (root)/            # Main application routes
│   └── api/               # API routes (to be implemented)
├── components/            # Reusable React components
│   ├── ui/               # Base UI components (shadcn/ui)
│   └── *.tsx             # Feature-specific components
├── lib/                  # Utility functions and configurations
├── types/                # TypeScript type definitions
├── constants/            # Application constants and mock data
└── public/              # Static assets
```

## Development Guidelines

### Code Style

- **TypeScript**: Use TypeScript for all new files
- **Naming**: Use camelCase for variables/functions, PascalCase for components
- **Components**: Create functional components with proper TypeScript interfaces
- **Imports**: Use absolute imports with the `@/` alias

### Component Guidelines

```typescript
// Good component structure
interface ComponentProps {
  title: string;
  isVisible?: boolean;
}

export default function Component({ title, isVisible = true }: ComponentProps) {
  // Component logic here
  
  return (
    <div className="component-class">
      {/* JSX here */}
    </div>
  );
}
```

### Styling Guidelines

- Use **Tailwind CSS** for styling
- Follow the existing custom CSS classes in `globals.css`
- Use the design system colors and spacing
- Ensure responsive design (mobile-first approach)

### File Naming

- Components: `PascalCase.tsx` (e.g., `InterviewCard.tsx`)
- Pages: `page.tsx` (Next.js App Router convention)
- Utilities: `camelCase.ts` (e.g., `formatDate.ts`)
- Types: `camelCase.ts` or `index.ts`

## Issue Workflow

### Before Starting

1. **Check existing issues** to avoid duplicating work
2. **Comment on the issue** you want to work on
3. **Wait for assignment** or approval from maintainers
4. **Understand the requirements** fully before starting

### While Working

1. **Follow the task list** provided in the issue
2. **Ask questions** if requirements are unclear
3. **Test your changes** thoroughly
4. **Keep your branch updated** with the main branch

### Submitting Changes

1. **Create a pull request** with a clear title and description
2. **Reference the issue number** in your PR description
3. **Include screenshots** for UI changes
4. **Ensure all tests pass** (when tests are implemented)
5. **Respond to feedback** promptly

## Pull Request Guidelines

### PR Title Format
```
[Issue #123] Brief description of changes
```

### PR Description Template
```markdown
## Description
Brief description of what this PR does.

## Related Issue
Fixes #123

## Changes Made
- [ ] Implemented feature X
- [ ] Updated component Y
- [ ] Added tests for Z

## Screenshots (if applicable)
Add screenshots for UI changes

## Testing
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Tested edge cases

## Checklist
- [ ] Code follows project guidelines
- [ ] Self-review completed
- [ ] Documentation updated if needed
```

## Specific Contribution Areas

### Frontend Development
- React components with TypeScript
- Responsive design with Tailwind CSS
- User interface improvements
- Accessibility enhancements

### Backend Development
- Next.js API routes
- Database integration (Firebase/Firestore)
- Authentication implementation
- Server actions and middleware

### AI Integration
- Vapi voice agent setup
- Google Gemini AI integration
- Prompt engineering
- Voice processing features

### DevOps & Tooling
- Build optimization
- Deployment configuration
- Testing setup
- CI/CD improvements

## Testing Guidelines

Currently, the project doesn't have formal tests, but when contributing:

1. **Manual testing** is required for all changes
2. **Test on multiple screen sizes** for responsive design
3. **Test error scenarios** and edge cases
4. **Verify accessibility** with keyboard navigation

Future contributors may add:
- Unit tests with Jest
- Integration tests
- E2E tests with Playwright

## Common Issues and Solutions

### Development Server Issues
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Restart development server
npm run dev
```

### TypeScript Errors
- Check import paths are correct
- Ensure all required props are provided
- Use proper type definitions from `types/index.ts`

### Styling Issues
- Check Tailwind classes are spelled correctly
- Verify custom CSS classes exist in `globals.css`
- Use browser dev tools to debug styles

## Environment Setup

### Required Tools
- Node.js 18+
- npm or yarn
- Git
- Code editor (VS Code recommended)

### Recommended VS Code Extensions
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- TypeScript Importer
- Prettier - Code formatter
- ESLint

### Environment Variables
For advanced features, you'll need:
```env
# Firebase (Issue #1, #2)
NEXT_PUBLIC_FIREBASE_API_KEY=
FIREBASE_PRIVATE_KEY=
FIREBASE_CLIENT_EMAIL=

# Vapi AI (Issue #3)
NEXT_PUBLIC_VAPI_WEB_TOKEN=
VAPI_WORKFLOW_ID=

# Google Gemini (Issue #4)
GOOGLE_GENERATIVE_AI_API_KEY=
```

## Getting Help

### Where to Ask Questions
1. **GitHub Issues**: For bugs and feature requests
2. **Issue Comments**: For specific implementation questions
3. **Discussions**: For general questions about the project

### What to Include When Asking for Help
- Clear description of the problem
- Steps to reproduce the issue
- Your environment details (OS, Node version, etc.)
- Relevant code snippets or error messages
- Screenshots if applicable

## Recognition

Contributors will be recognized in:
- GitHub contributors list
- Project README
- Release notes for significant contributions

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow
- Follow project guidelines and standards

## License

By contributing to PrepWise, you agree that your contributions will be licensed under the same license as the project.

---

Thank you for contributing to PrepWise! Your efforts help make this project better for everyone. 🚀
