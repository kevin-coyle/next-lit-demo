# Project Overview

This repository contains two projects: `demodesign` and `nextdemo`. These projects demonstrate the use of a design system component library within a Next.js application using the app router and server-side rendering (SSR).

## Project Structure

### 1. `demodesign`

The `demodesign` directory is a design system component library built using TypeScript and Vite.

- **Primary Dependencies**:
  - `lit`: Library for building fast, light web components using a simple declarative syntax.
- **Scripts**:
  - `dev`: Starts a development server using Vite.
  - `build`: Compiles TypeScript files and bundles the library using Vite.
  - `preview`: Serves the built project for preview using Vite.
- **Source Files**: Located in `demodesign/src` and include components like `counter-element.ts`, `toggle-element.ts`, and `card-element.ts`.

### 2. `nextdemo`

The `nextdemo` directory is a Next.js application configured to use components from the `demodesign` library.

- **Primary Dependencies**:
  - `next`: The Next.js framework for server-side rendering and static web applications.
  - `react` & `react-dom`: For building responsive UI components.
  - `demodesign`: An import of the local `demodesign` library for use in components.
  - `lit` and `@lit-labs/nextjs` for SSR with Lit components.
- **Scripts**:
  - `dev`: Runs the Next.js development server.
  - `build`: Compiles the application for production.
  - `start`: Starts the production server.
  - `lint`: Runs ESLint to check for code quality.
- **Source Files**:
  - Located in `nextdemo/src/app`. Key files include `page.tsx` which integrates the `demodesign` components using SSR.

## Key Concepts

- **Lit and Web Components**: `demodesign` components are built using the Lit library, enabling efficient, reusable web components.
- **SSR with Lit in Next.js**: The `nextdemo` app demonstrates server-side rendering of Lit components within Next.js. This is facilitated by `@lit-labs/nextjs` allowing Lit components to be rendered on the server.
- **App Router**: Next.js's app router is utilized for handling routing and navigation within the `nextdemo` application.

## Getting Started

To run these projects, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd demodesign
   npm install
   npm run build

   cd ../nextdemo
   npm install
   npm run dev
   ```
2. **Access the Application**:
   - Launch the Next.js development server for `nextdemo` by executing `npm run dev` in the `nextdemo` directory.
   - Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the app.

This setup will provide a live environment showcasing how the design system (`demodesign`) can be effectively integrated into a Next.js application (`nextdemo`) with SSR capabilities.
