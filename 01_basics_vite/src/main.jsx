import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


/* what is vite ?? why use vite ?? when used vite ??

1️⃣ What is Vite?
  Vite is a modern frontend build tool (like Webpack) created by Evan You (Vue.js creator).

  Vite provides:
    Instant dev server
    Fast builds
    Super-fast Hot Module Replacement (HMR)

  It is used to build apps with:
    React
    Vue
    Svelte
    Vanilla JS
    TypeScript



2️⃣ Why was Vite created? (Problem it solves)
  Problem with old bundlers (Webpack / CRA)

  Before Vite:
    Entire app was bundled before starting dev server
    Large apps → slow startup (10–30 sec)
    Every change → re-bundle

  Developer experience was slow and painful



3️⃣ How Vite works internally (MOST IMPORTANT)
  Key idea: ES Modules (ESM)
  Modern browsers support native ES modules.
  
  Vite uses this.

  🔹 Dev Mode (This is the magic)
    In development:
      No full bundling
      Files are served on-demand
      Browser requests modules directly

    Browser → App.js → Button.js → utils.js
    Only requested files are loaded.

    Result:
      Instant server start
      Instant reload


  🔹 Production Mode

    In production, Vite uses:
      Rollup
        Optimized bundling
        Tree-shaking
        Code splitting
        Minification

    Best of both worlds



4️⃣ Why use Vite? (Advantages)
1. Extremely fast
  Dev server starts in milliseconds
  HMR is instant

2. Lightweight
  No unnecessary polyfills
  Smaller bundle size

3. Simple configuration
  Minimal config
  Easy to customize

4. First-class TypeScript support
  No heavy setup

5. Framework agnostic
  Works with:
    React
    Vue
    Svelte
    Solid
    Vanilla JS




5️⃣ CRA vs Vite (Quick comparison)
| Feature         | CRA    | Vite      |
| --------------- | ------ | --------- |
| Dev startup     | Slow   | ⚡ Instant |
| HMR             | Slow   | ⚡ Instant |
| Config          | Hidden | Simple    |
| Bundle size     | Large  | Smaller   |
| Modern support  | ❌      | ✅       |
| Recommended now | ❌      | ✅       |



6️⃣ When should you use Vite?
  Use Vite when:
    Building Single Page Applications (SPA)
    Want fast dev experience
    Don’t need SSR
    Building dashboards, admin panels
    Learning React with modern tooling

  Best replacement for CRA


  ❌ When NOT to use Vite

    Don’t use Vite if you need:
    SSR
    SSG
    SEO-heavy app
    Full-stack React

  Use Next.js or Remix


8️⃣ Key Interview Question:
  When should you use Vite vs Next.js?
  Answer:
    Use Vite for client-side SPAs where speed and simplicity matter.
    Use Next.js when you need SSR, SEO, routing, or backend APIs.



9️⃣ Real-world example
| App type     | Best choice |
| ------------ | ----------- |
| Admin panel  | Vite        |
| Dashboard    | Vite        |
| Portfolio    | Vite        |
| E-commerce   | Next.js     |
| Blog         | Next.js     |
| SaaS product | Next.js     |


Vite is a modern frontend build tool that leverages native ES modules for instant development startup and uses Rollup for optimized production builds.
*/

