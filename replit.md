# Living Branding AI - Revolutionary Brand Creation Platform

## Overview

Living Branding AI is a cutting-edge brand creation platform that transforms simple company names and sector information into comprehensive, hypnotic branding universes. The application leverages artificial intelligence to generate revolutionary visual identities, creative DNA profiles, and predictive CEO impact assessments. Built as a full-stack web application, it features an immersive 3D interface with particle systems and real-time creation progress tracking, delivering what the platform calls "impossibility-level" branding solutions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The client-side application is built using React 18 with TypeScript, leveraging modern component patterns and hooks for state management. The UI framework is based on shadcn/ui components with Radix UI primitives, providing a comprehensive design system with dark mode support and CSS variables for theming. The frontend implements a single-page application (SPA) pattern using Wouter for lightweight routing.

**3D Visualization Engine**: The application incorporates Three.js for immersive 3D brand visualization, including particle systems, orbital controls, and revolutionary logo generation. The 3D scenes support real-time rendering with WebGL optimization and responsive design considerations.

**State Management**: Uses TanStack Query (React Query) for server state management with optimistic updates and real-time polling during brand creation processes. Local state is managed through React hooks with custom abstractions for brand creation workflows.

**Styling System**: Implements Tailwind CSS with custom design tokens, featuring glassmorphism effects, holographic borders, and animated gradient backgrounds. The system supports responsive design with mobile-first breakpoints and accessibility considerations.

### Backend Architecture
The server-side implementation uses Express.js with TypeScript in ESM module format, providing a RESTful API architecture. The backend employs a layered architecture pattern with clear separation between routing, business logic, and data access layers.

**API Design**: RESTful endpoints handle brand creation workflows, sector management, and feedback collection. The API implements proper HTTP status codes, error handling, and request validation using Zod schemas.

**Storage Layer**: Features an abstraction layer (IStorage interface) with in-memory implementation for development and extensibility for database integration. The storage layer supports CRUD operations for brand creations and feedback management with UUID-based identifiers.

**Real-time Processing**: Implements asynchronous brand creation workflows with status tracking and phase-based progress reporting. The system supports polling-based updates for real-time user feedback during creation processes.

### Data Storage Solutions
The application uses a dual-storage approach with PostgreSQL as the primary database and in-memory storage for development. Database schema is managed through Drizzle ORM with type-safe queries and migrations.

**Schema Design**: Features normalized tables for brand creations and feedback with JSONB columns for flexible creative DNA and visual universe data storage. The schema supports decimal precision for scoring systems and timestamp tracking for audit trails.

**Database Configuration**: Configured for Neon Database (serverless PostgreSQL) with connection pooling and migration support. The system implements proper database credential management through environment variables.

### Authentication and Authorization
Currently implements a simplified approach without explicit user authentication, focusing on anonymous usage patterns with optional feedback attribution. The system includes session management capabilities through connect-pg-simple for future authentication implementation.

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Query for state management
- **Build Tools**: Vite for development and production builds with TypeScript support
- **Routing**: Wouter for lightweight client-side routing

### UI and Styling
- **Component Library**: Radix UI primitives with shadcn/ui component system
- **Styling**: Tailwind CSS with PostCSS processing and Autoprefixer
- **Icons**: Lucide React for consistent iconography
- **Animations**: Framer Motion for advanced animations and transitions

### 3D Graphics and Visualization
- **Three.js**: Core 3D rendering engine with examples and addons
- **Controls**: OrbitControls for camera manipulation
- **Loaders**: GLTF loader for 3D model importing

### Backend Infrastructure
- **Server Framework**: Express.js with TypeScript support
- **Development**: tsx for TypeScript execution and hot reloading
- **Build**: esbuild for production bundling with Node.js platform targeting

### Database and ORM
- **Database**: Neon Database (serverless PostgreSQL)
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Connection**: @neondatabase/serverless for optimized database connections
- **Session Storage**: connect-pg-simple for PostgreSQL session management

### Development and Tooling
- **TypeScript**: Full type safety across frontend and backend
- **Validation**: Zod for runtime type checking and schema validation
- **Development Tools**: Replit-specific plugins for development environment integration

### Utility Libraries
- **Class Management**: clsx and tailwind-merge for conditional styling
- **Date Handling**: date-fns for date manipulation and formatting
- **Form Management**: React Hook Form with Hookform resolvers for form validation
- **Utilities**: nanoid for unique ID generation, class-variance-authority for variant-based styling