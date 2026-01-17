import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

    <App />
);



/* Please understood flow, structring and inner working .

Goal is to understand how react is inject into Html file ??   why bcz end of the day react is nothing but the javascript , means js library means mojority of work is done by react itself but there are some work which is done by javascript, and for javascript ko kuch bhi kaam karne ke liye hume usko html file me inject karna padta hai.

what is build folder ??
what is node modules ??
what is readme file ??
what is paackege.json ??
what is paackege-lock.json ??
what is gitignore ??
what is src ??
what is public ??
what is manifest.json ??
what is robots.txt ??

what is index.html ??
  it is the main page which has to load. and there is only one page because of this is SPA(Single Page Application).


React and ReactDOM are library which is help to inject the react code into html file. and manipulate the DOM.
React is core foundation library. which take all reference related works
ReactDom is implemation of react for web.

  browser ka ek apna dom he and react is create own his dom we know as virual dom. then it will compare both dom and find what is change and update only that perticular part in browser dom. isse performance better hoti hai.

    
<App /> if you look at this tag we don't see like this. so it is power of react - jsx means javascript ke through html element ko render kar sakte ho.
so, we know as component.

what is benefit of this ??
  we have programming capability inside the html.



*/


// React → frontend bundling
// Node / Nest → server compilation & execution


/* What is difference between npm run start and npm run build in react??
1️⃣ npm run start (Development Mode)

🔹 What it does
  Starts a development server
  Runs your app locally (usually at http://localhost:3000)
  Optimized for developer experience, not performance


🔹 What happens internally
  Code is not minified
  Source maps are enabled (easy debugging)
  Hot Reload / Fast Refresh is ON
  Errors show detailed stack traces
  Uses an in-memory bundle (not real files)


🔹 Use case
  While developing, testing, debugging


Pros of npm run start
  Hot reload → instant UI updates
  Easy debugging with readable code
  Fast feedback loop
  Shows warnings & helpful errors

Cons of npm run start
  Not optimized
  Larger bundle size
  Slower performance
  Not secure (exposes dev tools)
  Should never be used in production



2️⃣ npm run build (Production Mode)

🔹 What it does
  Creates a production-ready build
  Outputs static files (HTML + CSS + JS)
  Ready to deploy on any server

🔹 What happens internally
  Code is minified
  Dead code eliminated (tree-shaking)
  Files are hashed for caching
  No hot reload
  No dev warnings
  Optimized for performance


Pros of npm run build
  Fast performance
  Smaller bundle size
  More secure
  Browser caching enabled
  Ready for production

Cons of npm run build
  Harder to debug
  No hot reload
  Build time required
  Not editable directly

 
  
3️⃣ Key Differences (Side-by-Side)
| Feature          | `npm run start` | `npm run build`     |
| ---------------- | --------------- | ------------------- |
| Mode             | Development     | Production          |
| Server           | Dev server      | Static files        |
| Hot Reload       | ✅ Yes          | ❌ No                |
| Debugging        | Easy            | Hard                |
| Performance      | Slow            | Fast                |
| Minification     | ❌ No           | ✅ Yes               |
| File Output      | In-memory       | `/build` or `/dist` |
| Production Ready | ❌ No           | ✅ Yes               |



npm start is used for development with hot reload and debugging features, while npm run build creates an optimized, minified production-ready bundle that is deployed to a server.




6️⃣ Bonus (Backend Perspective – useful for you 😉)
Since you're a backend engineer:
  React build = static assets
  Backend (NestJS / Node) just serves the files
  No Node server required for React after build
Example:
  app.use(express.static('build'));


*/




/* What is difference between npm run start and npm run build in node/nest??

1️⃣ Node.js (Plain Node App)

Typical scripts in package.json
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "build": "echo \"No build step\""
  }
}


🔹 npm run start
  Runs your Node server
  Executes JavaScript directly
  No compilation
  Used in production



🔹 npm run dev (common)
  Uses nodemon
  Auto-restarts on file change
  Used in development


🔹 npm run build (usually ❌)

  Plain Node does not need a build
  JS runs directly on V8
  Only exists if:
    You use TypeScript
    You bundle code (esbuild / webpack)  


🔹 Why no build in Node?
Node runs JavaScript directly
No compilation required
No bundling like React    


✅ Pros (Node without build)

  Simple
  Fast startup
  Easy debugging


❌ Cons

  No type safety
  No optimization
  No transpilation
  Harder to scale large codebases


Summary (Node.js)
| Command | Purpose                  |
| ------- | ------------------------ |
| `start` | Run server (prod)        |
| `dev`   | Development (watch mode) |
| `build` | Usually not required     |




2️⃣ NestJS (Very Important 🚨)
NestJS does have both start and build, but they mean something else than React.

🔹 npm run start (NestJS)
Default script:
{
  "scripts": {
    "start": "nest start",
    "start:dev": "nest start --watch",
    "start:prod": "node dist/main.js",
    "build": "nest build"
  }
}



What npm run start does
  Starts NestJS app
  Uses ts-node
  Compiles TypeScript on the fly
  ❌ Not optimized
  ❌ Slower startup

👉 Used for development



🔹 npm run start:dev
  Same as start
  With file watching
  Hot reload-like behavior
✅ Best for development



🔹 npm run build (NestJS)
Compiles TypeScript → JavaScript
Example:
/dist


🔹 npm run start:prod

Runs compiled JS
No TypeScript at runtime
Fast startup
Production-safe





3️⃣ React vs NestJS (Important Difference)
| Aspect          | React         | NestJS             |
| --------------- | ------------- | ------------------ |
| `start`         | Dev server    | TS runtime         |
| `build`         | Static assets | JS compilation     |
| Output          | HTML/CSS/JS   | Node JS files      |
| Runtime         | Browser       | Node.js            |
| Production uses | build         | build + start:prod |





4️⃣ Production-Ready NestJS Flow 🏭

Local Development :   npm run start:dev
CI/CD or Server   :   npm run build  ->  npm run start:prod
OR with PM2       :   pm2 start dist/main.js --name api



5️⃣ Why NestJS needs build but Node doesn’t?
| Reason             | Node   | NestJS      |
| ------------------ | ------ | ----------- |
| Uses TypeScript    | ❌      | ✅           |
| Needs compilation  | ❌      | ✅           |
| Runtime TS support | ❌      | ❌           |
| JS execution       | Direct | After build |



Even though NestJS may create a dist folder when running start or start:dev, that output is generated for development convenience and caching. Only nest build creates a clean, production-ready compiled output. Therefore, production should always rely on build followed by start:prod.




In Node.js, start simply runs JavaScript, while in NestJS, build compiles TypeScript to JavaScript and start:prod runs the compiled output for production. React’s build creates static assets, but NestJS build creates server-side JavaScript files.



*/



