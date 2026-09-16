# 🚀 Turborepo Monorepo Template: Angular + Hono

A modern, production-oriented monorepo starter featuring **Angular 22**
(zoneless) for the frontend and **Hono** for the backend API, orchestrated
with **Turborepo**.

## ✨ Features

- ⚡ **Angular 22** - Modern Angular with zoneless change detection by default
- 🔥 **Hono 4.13** - Ultra-fast web framework for the Edge, Node.js, and more
- 🏗️ **Turborepo 2.10** - High-performance build system for JavaScript and TypeScript monorepos
- 🚫 **Zoneless by Default** - Modern Angular without Zone.js for better performance
- 🔒 **Security First** - Built-in CORS and secure headers (Helmet-like) configuration
- 📦 **pnpm Workspaces** - Efficient package management with shared dependencies
- 🎨 **Shared Tooling** - ESLint, Prettier, and TypeScript configurations shared across projects
- 🚀 **TypeScript** - Full type safety across the entire monorepo
- ⚙️ **Zero Config** - Pre-configured and ready to use out of the box
- 🎯 **Standalone Components** - Modern Angular architecture
- 🧪 **Vitest** - Fast, DOM-enabled frontend unit tests
- ✅ **GitHub Actions** - Automated lint, test, and build checks

## 🛠️ Tech Stack

### Frontend

- **Angular** 22 - Modern web application framework
- **RxJS** 7.8 - Reactive programming library
- **TypeScript** 6.0 - Type-safe development
- **Zoneless** - No Zone.js dependency for improved performance

### Backend

- **Hono** 4.13 - Fast web framework
- **@hono/node-server** - Node.js adapter for Hono
- **TypeScript** 6.0 - Full type safety

### Tooling

- **Turborepo** 2.10 - Monorepo build system
- **pnpm** 12.4 - Fast, disk space efficient package manager
- **ESLint** 10 - Code linting
- **Prettier** 3.9 - Code formatting
- **TypeScript** 6.0 - Type checking
- **Angular CLI** 22 - Angular development tools
- **Vitest** 4.1 with Happy DOM - Unit testing

## 📋 Prerequisites

- **Node.js** >= 22.22.3
- **Corepack** (included with supported Node.js installations)

If you use `nvm`, you can run:

```bash
nvm use
```

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/juanmigonzalez/turbo-angular-hono.git
cd turbo-angular-hono
```

### 2. Install dependencies

```bash
corepack enable
pnpm install
```

### 3. Start development servers

```bash
pnpm dev
```

This will start:

- **Frontend** (Angular): http://localhost:4200
- **Backend** (Hono): http://localhost:3001

## 📁 Project Structure

```
turbo-angular-hono/
├── apps/
│   ├── frontend/          # Angular application
│   │   ├── src/
│   │   │   ├── app/
│   │   │   │   ├── app.component.ts
│   │   │   │   └── app.config.ts
│   │   │   ├── main.ts
│   │   │   ├── index.html
│   │   │   └── styles.css
│   │   ├── angular.json
│   │   ├── tsconfig.json
│   │   └── package.json
│   └── backend/           # Hono API
│       ├── src/
│       │   └── index.ts
│       └── package.json
├── package.json           # Root package.json with shared dependencies
├── turbo.json            # Turborepo configuration
├── pnpm-workspace.yaml   # pnpm workspace configuration
├── eslint.config.js      # Shared ESLint configuration
├── .prettierrc           # Shared Prettier configuration
└── tsconfig.json         # Base TypeScript configuration
```

## 📜 Available Scripts

### Root Level

- `pnpm dev` - Start all applications in development mode
- `pnpm build` - Build all applications for production
- `pnpm lint` - Run ESLint on all projects
- `pnpm test` - Run all unit tests once
- `pnpm format` - Format code with Prettier

### Frontend (Angular)

```bash
cd apps/frontend
pnpm dev      # Start Angular development server
pnpm build    # Build for production
pnpm test     # Run unit tests
```

### Backend (Hono)

```bash
cd apps/backend
pnpm dev      # Start development server with hot reload
pnpm build    # Compile TypeScript
pnpm start    # Start production server
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in `apps/backend/`:

```env
PORT=3001
CORS_ORIGIN=http://localhost:4200
```

### CORS Configuration

The backend is pre-configured with CORS enabled. Update the `CORS_ORIGIN` environment variable to match your frontend URL in production.

### Secure Headers

The backend includes secure headers middleware (similar to Helmet) configured by default for enhanced security.

### Zoneless Configuration

This template uses Angular's zoneless change detection by default. The configuration is set in `apps/frontend/src/app/app.config.ts`:

```typescript
import { provideZonelessChangeDetection } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [provideZonelessChangeDetection()],
};
```

## 🏗️ Building for Production

```bash
# Build all applications
pnpm build

# The frontend will be built to apps/frontend/dist/frontend/
# The backend will be compiled to apps/backend/dist/
```

## 🧪 Development

### Adding a New Package

1. Create a new directory in `apps/`
2. Add a `package.json` with your dependencies
3. Turborepo will automatically detect it

### Shared Dependencies

Common dependencies like TypeScript, ESLint, and Prettier are shared at the root level. Add project-specific dependencies in their respective `package.json` files.

### Angular Standalone Components

This template uses Angular's standalone component architecture. All components are standalone by default, providing a more modern and flexible structure.

## 📦 Package Management

This template uses **pnpm** workspaces with a committed lockfile for fast,
reproducible installations across local development and CI.

## 🎯 Angular Features

- **Zoneless Change Detection** - Improved performance without Zone.js
- **Standalone Components** - Modern component architecture
- **TypeScript Strict Mode** - Full type safety
- **Modern Build System** - Angular's latest build tools

## 🔍 SEO & Discoverability

This template is optimized for:

- **Monorepo starters** - Turborepo + Angular + Hono
- **Full-stack TypeScript** - Type-safe frontend and backend
- **Angular zoneless** - Modern Angular without Zone.js
- **Production-ready** - Pre-configured security and best practices
- **Standalone components** - Modern Angular architecture

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this template for your projects.

## 🙏 Acknowledgments

- [Turborepo](https://turbo.build/) - Build system
- [Angular](https://angular.dev/) - Web framework
- [Hono](https://hono.dev/) - Web framework
- [pnpm](https://pnpm.io/) - Package manager

## 🔗 Related Templates

Looking for other starter templates?

- [turbo-astro-hono](https://github.com/juanmigonzalez/turbo-astro-hono) - Astro + Hono monorepo template

---

**Made with ❤️ using Turborepo, Angular, and Hono**
