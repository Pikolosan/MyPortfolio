# Overview

This is a minimal portfolio website for Parth Chaudhary, a Full Stack Developer and AI/ML Engineer. Built with React, TypeScript, and Express, the project showcases 10 projects across various categories including full-stack development, AI/ML, frontend development, and CSS animations. The design follows a clean, minimal aesthetic inspired by Parse.bot with black and white color schemes, featuring project filtering, theme switching, and comprehensive contact sections.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript in strict mode
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack React Query for server state management
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Theme System**: Custom theme provider supporting light/dark modes with system preference detection
- **Build Tool**: Vite for development and production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API Structure**: RESTful API with `/api` prefix routing
- **Request Handling**: JSON and URL-encoded request parsing with comprehensive request logging
- **Error Handling**: Global error handler with standardized error responses
- **Development**: Hot module replacement and middleware mode integration with Vite

## Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Development Storage**: In-memory storage implementation for development/testing
- **Database Connection**: Neon Database serverless PostgreSQL connection

## Authentication and Authorization
- **Session Management**: PostgreSQL-backed sessions using connect-pg-simple
- **User Schema**: Basic user model with username/password authentication
- **Validation**: Zod schema validation for user input

## Project Structure
- **Monorepo Layout**: Shared types and schemas between client and server
- **Client Directory**: Contains React frontend application
- **Server Directory**: Contains Express backend application  
- **Shared Directory**: Common types, schemas, and utilities
- **Component Organization**: Modular UI components with atomic design principles

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL hosting
- **Drizzle ORM**: Type-safe database ORM and query builder
- **connect-pg-simple**: PostgreSQL session store for Express

## UI and Styling
- **Radix UI**: Accessible component primitives for complex UI components
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Pre-built component library built on Radix UI
- **Lucide React**: Icon library for consistent iconography
- **class-variance-authority**: Component variant management
- **Embla Carousel**: Carousel/slider component functionality

## Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type checking and compilation
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind and Autoprefixer

## Runtime Libraries
- **TanStack React Query**: Server state management and caching
- **React Hook Form**: Form state management and validation
- **date-fns**: Date manipulation utilities
- **Wouter**: Lightweight client-side routing
- **cmdk**: Command palette/search interface components