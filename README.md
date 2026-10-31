# Personal Portfolio Website

A personal portfolio website built with JavaScript, Next.js App Router,
and Tailwind CSS.

## Project Goals

- Present personal information and professional skills.
- Showcase selected projects and work.
- Describe services.
- Provide an About page.
- Provide a Resume page.
- Provide a Contact page.
- Maintain a clear, responsive and accessible user experience.
- Support repository-first development using multiple LLMs.

## Technology Stack

- Language: JavaScript
- Framework: Next.js App Router
- Styling: Tailwind CSS
- Package manager: npm
- Version control: Git and GitHub
- Backend: Next.js capabilities only when required and approved

Do not introduce another framework, styling system, database, or backend
without first documenting the reason and obtaining approval.

## Pages and Routes

| Page | Route |
|---|---|
| Home | / |
| Services | /services |
| Skills | /skills |
| Works | /works |
| About | /about |
| Resume | /resume |
| Contact | /contact |

Page content, visual designs and animations will be decided incrementally.
Temporary placeholder pages must not be treated as finished pages.

## Prerequisites

- Node.js version compatible with the installed Next.js version
- npm
- Git
- A code editor
- A GitHub account for remote repository hosting

## Installation

Clone the repository:

git clone YOUR_GITHUB_REPOSITORY_URL

Enter the project directory:

cd personal-portfolio

Install dependencies:

npm install

## Development

Start the development server:

npm run dev

Open:

http://localhost:3000

Stop the server using Ctrl+C in the terminal.

## Verification

Run linting:

npm run lint

Run a production build:

npm run build

Run the production server locally, after building:

npm run start

Check package.json before using a script. If a script does not exist,
document the actual available alternative rather than assuming it exists.

## Project Documentation

- MASTER_PROMPT.md: Permanent instructions for every LLM.
- AI_CONTEXT.md: Short context to provide at the start of an LLM session.
- PROJECT_SPEC.md: Approved requirements and scope.
- ARCHITECTURE.md: Technical structure and implementation boundaries.
- DESIGN_SYSTEM.md: Approved design decisions and design rules.
- API_CONTRACT.md: API requirements, if any are approved.
- SECURITY_RULES.md: Security requirements and prohibited practices.
- TASKS.md: Task backlog and completion criteria.
- STATUS.md: Current project state and verification results.
- HANDOFF.md: Instructions for the next LLM or developer.

## Contribution Workflow

1. Read MASTER_PROMPT.md and AI_CONTEXT.md.
2. Read the relevant project documentation.
3. Inspect the existing code before making changes.
4. Work only on the approved task.
5. Verify the implementation.
6. Review the Git diff.
7. Update documentation when decisions or implementation change.
8. Record the handoff.

## Deployment

The deployment platform has not been selected in this initial specification.

Document the actual platform, build settings, environment variable names,
and deployed URL in this README after deployment has been verified.

Do not publish secrets or private environment variable values.

## Current Status

Refer to STATUS.md for the verified project status.

Do not assume that any route, feature, test or deployment is complete
without checking the current implementation and recorded results.

## License

No license has been selected. Do not assume that the project is open-source
or that third parties may reuse its contents.