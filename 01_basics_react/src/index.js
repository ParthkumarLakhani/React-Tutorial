import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



/* what is create-react-app ?? and why we used it ??

create-react-app is a command-line interface tool provided by Facebook for setting up a React project with a preconfigured build system. It simplifies the process of creating a new React application by handling all the necessary configuration files and dependencies automatically.

Why we use it:
1. Quick Setup: It provides a quick way to start a new React project without manually configuring Webpack, Babel, and other build tools.
2. Standardized Configuration: It ensures that all projects follow the same configuration standards, making it easier for developers to collaborate.
3. Development Tools: It includes development tools like hot reloading, which helps in faster development cycles.
4. Production Ready: It sets up the project with production-ready configurations out of the box.



create-react-app is a command-line tool that sets up a React project automatically with all the required configuration.

When you run:
  npx create-react-app my-app


  It creates a ready-to-use React app with:

    React + ReactDOM
    Webpack (bundler)
    Babel (JS/JSX transpiler)
    Development server
    Production build setup
    ESLint
    Sensible defaults

You don’t see or configure Webpack/Babel directly (it’s hidden).



2️⃣ Why was create-react-app used?
  Before CRA (old days 😵‍💫)

  To start React, developers had to:

    Configure Webpack manually
    Configure Babel
    Set loaders, plugins, dev server
    Manage env configs

  This took hours or days for beginners.

  CRA(create-react-app) solved this by:

    Zero configuration
    One command setup
    Best practices by default
    Easy for beginners
    Standardized React projects

  It made React popular and accessible.



3️⃣ What does CRA give you internally?
Even though it hides config, internally it uses:
| Tool              | Purpose                 |
| ----------------- | ----------------------- |
| **Webpack**       | Bundling                |
| **Babel**         | Convert JSX & modern JS |
| **ESLint**        | Linting                 |
| **Jest**          | Testing                 |
| **React Scripts** | Glue code               |






4️⃣ Why people say CRA is deprecated ?
  🔴 Important clarification
  CRA is NOT officially deprecated But it is no longer recommended for new projects.

  React team itself says: “We recommend using a modern framework or bundler instead of CRA.”





5️⃣ Problems with create-react-app

  ⚠️ 1. Slow development
    Slow startup
    Slow hot reload for large apps

  ⚠️ 2. Heavy bundle size
    Not optimized for modern builds
    Less tree-shaking

  ⚠️ 3. Hidden configuration
    Webpack config is locked
    Customization is painful

  You need:
    npm run eject

    which is irreversible

  ⚠️ 4. No SSR / SSG support
    No Server-Side Rendering
    No Static Site Generation

  This is a big issue for:
    SEO (Search Engine Optimization)
    Performance
    Production apps 


  ⚠️ 5. Not aligned with modern React direction
  Modern React prefers:
    Server Components
    Streaming
    SSR
    File-based routing
    CRA supports none of these.





6️⃣ What replaced create-react-app?

1. Vite (Most Popular Replacement)
  npm create vite@latest

  Why Vite is better:
    Instant dev server
    Uses ES Modules
    Faster builds
    Lightweight
    Easy config

  Best choice for SPA(Single-Page Application) apps



2. Next.js (React Framework)
  npx create-next-app

  Provides:
    SSR (Server-Side Rendering)
    SSG (Static Site Generation)
    API routes
    File-based routing
    Production-ready setup

  Best for real-world apps  



3. Remix
  Focus on web standards
  Server-first approach
  Used by Shopify


*/