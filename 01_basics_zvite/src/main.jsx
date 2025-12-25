import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,

  App()
)


/* Please understood flow, structring and inner working. CRA and Vite you get better understanding.

Goal is to understand how react is inject into Html file ??   why bcz end of the day react is nothing but the javascript , means js library means mojority of work is done by react itself but there are some work which is done by javascript, and for javascript ko kuch bhi kaam karne ke liye hume usko html file me inject karna padta hai.

what is build folder ??
what is node modules ??
what is readme file ??
what is paackege.json ??
what is paackege-lock.json ??
what is gitignore ??
what is src ??
what is public ??

what is index.html ??
  it is the main page which has to load. and there is only one page because of this is SPA(Single Page Application).


it is lightweight beacuse it will remove react-script, testing library.





"since i know the App is function then why these syntax came <App /> ??
  Har react ek bundler use karatahe(like babel, vite bhi, ) what bundler do ??
    Behind the scene working karana. like syntax ko upgrade karana, aur change karana ., 
    
    see the custom-react, behind the scene that syntax also converted by bundler bcz we write in html but react don't understood it, that's why we call it as JSX - javascript ke andar html mix he.
      Actually me customReact (reactElement)- aesa syntax hona chahiye tha, jab aesa syntax he tabhi to tree banapayenge  so, hamare html(cfunction or component ) ki hoti he parsing isko convert kiya jata he tree me reqactElement jese syntax ke andar.
"


here I know that app is function then if i write App() can i t works ?? but why we are not write like this ??
  Yes, App() works, but it’s the wrong way to render a React component. And React has very important reasons for not wanting you to do that.


1. What App really is
  function App() {
    return <h1>Hello</h1>
  }

  App is:
    a function
    that returns a React element (JSX → object)

  So technically:   App() // returns { $$typeof: Symbol(react.element), type: 'h1', ... }

  That’s why this does not crash: 
    createRoot(...).render(App())
    Because render() expects a React element, and App() returns one.



2. Then why do we write <App /> instead of App()?
  Because <App /> is NOT a function call.
    <App />
  is converted by Babel into: React.createElement(App)
  
  This is the 🔑 key difference.



3. The BIG difference: who controls the call ??

  When you write App()
    YOU call the function
    React has no control
    React cannot:
      track renders
      manage hooks
      pause / resume / re-render
      optimize updates
  You’re bypassing React’s engine.


  When you write <App />
    React decides:
      when to call App
      how many times
      in what order
    React keeps the component in its Fiber tree

  This is how React becomes “React” instead of just function calls.



4. Hooks will BREAK with App()
  This is the most important practical reason.

  function App() {
    const [count, setCount] = React.useState(0)
    return <h1>{count}</h1>
  }
  Now try:  render(App())

  💥 Error: Invalid hook call
    Why?
      Because:
        Hooks must run inside React’s render cycle
        When you call App() directly, React doesn’t know it’s rendering a component

      Hooks rely on:
        call order
        component identity
        fiber tracking
    
    All of that comes from <App />, not App().



5.  React features you lose with App()
    If you use App():
      Hooks
      StrictMode checks
      Concurrent rendering
      Suspense
      Error boundaries
      DevTools component tree
      Reconciliation & diffing

    You reduce React to:
      “a function that returns JSX”
      
    Which defeats the purpose of React.




6. Why your code seems to work

  Your code:
    createRoot(document.getElementById('root')).render(
      App()
    )

  Works only because:
    App is simple
    no hooks
    no lifecycle behavior

  This is accidental correctness — not supported usage.




  ""



Think like this 🧠

React components are not functions you call.
They are descriptions React interprets.

App() → You execute

<App /> → React schedules & executes


*/

