import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")


  const passwordGenerator = useCallback( () => {
    let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let password = ''

    if(numberAllowed) chars += '0123456789'
    if(characterAllowed) chars += '!@#$%^&*()_+'

    for(let pass=0; pass<length; pass++){
      password += chars[Math.floor(Math.random() * chars.length)]
    }

    setPassword(password)

  }, [length, numberAllowed, characterAllowed, setPassword])


  //without taking password reference
  // const copyPasswordToClipBoard = useCallback( ()=>{
  //   window.navigator.clipboard.writeText(password)
  // }, [password])
  // here please note that since we are working on core react so i've the acces of window obj, but if you are working on next then ,...

  const copyPasswordToClipBoard = useCallback( ()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,10)
    window.navigator.clipboard.writeText(password)
  }, [password])
  // above is helpful for user interaction



  // passwordGenerator()    
  //why here not call like this ??
  useEffect( () => {
    passwordGenerator()
  }, [ length, numberAllowed, characterAllowed, passwordGenerator])



  const passwordRef = useRef(null)

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center m-4'> Password Generator </h1>
      <div className='flex shadow rounded-lg bg-gray-300 overflow-hidden mb-4'>
        <input type="text" value={password} className='outline-none w-full py-1 px-3 text-black ' placeholder='password' readOnly ref={passwordRef}/>
        <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copyPasswordToClipBoard}>copy</button>
      </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={8} max={100} value={length} className='cursor-pointer' onChange={ (e) => {setLength(e.target.value)}}/>
            <label >Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => { setNumberAllowed((prev) => !prev)}}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
                type="checkbox"
                defaultChecked={characterAllowed}
                id="characterInput"
                onChange={() => { setCharacterAllowed((prev) => !prev )}}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
    </div> 
    </>
  )
}

export default App



/* 
instead of normal function why use callback here ??  if i write a normal function can it's work ??
 if you look at the use cases[range, number, characters] this function are used many time so is there any method i can do optimize ??
 
yes, useCallback  - useCallback is a React Hook that lets you cache a function definition between re-renders. 


  Note  ---- important please read it
  React Compiler automatically memoizes values and functions, reducing the need for manual useCallback calls. You can use the compiler to handle memoization automatically.



what is useCallback ??

The useCallback Hook is a built-in React Hook that memoizes a callback function, preventing it from being recreated on every render unless its dependencies change. This is useful for optimizing performance, especially when passing functions as props to child components.


Syntax

    const memoizedCallback = useCallback(() => {
        // Function logic
    }, [dependencies]);

The function to be memoized is passed as a parameter to useCallback.
An array of dependencies determines when the function should be recreated.


When to Use useCallback?
  You should use useCallback when

    Passing functions as props to child components to prevent unnecessary re-renders.
    Avoiding unnecessary function re-creations inside useEffect or event handlers.
    Ensuring function references remain stable across renders.
  
  However, avoid overusing useCallback, as it adds an extra layer of complexity and can sometimes lead to premature optimizations.


useCallback vs useMemo
  The useCallback and useMemo Hooks are similar, but they serve different purposes:

    useCallback returns a memoized function, ensuring its reference remains stable across renders.
    useMemo returns a memoized value, optimizing expensive calculations by caching the result.
    Use useCallback for passing stable function references, and useMemo for optimizing computations.


Performance Considerations
  Using useCallback correctly can enhance performance, but excessive use may introduce unnecessary complexity. Here are some best practices:

    Use it for expensive function recreations: Especially for passing stable function references.
    Avoid unnecessary usage: If a function is recreated but doesn't cause performance issues, useCallback may not be needed.
    Optimize interactions between parent and child components: Helps prevent unnecessary re-renders.
    Measure before optimizing: Use React DevTools to analyze performance before applying useCallback.







why here not call like this passwordGenerator() ??

is this problem because of i've written the callback ?? 
  no, bcz in react when and which thing should render it decided by hooks, like setLenth,..
  
now how can i solve this ??
1. using button
2. other method like hooks




what is useEffect ??
  useEffect is a React Hook that lets you synchronize a component with an external system.

  The useEffect hook is one of the most commonly used hooks in ReactJS, used to handle side effects in functional components. Before hooks, these kinds of tasks were only possible in class components through lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount.

  Fetching data from an API.
  Setting up event listeners or subscriptions.
  Manipulating the DOM directly (although React generally handles DOM manipulation for you).
  Cleaning up resources when a component unmounts.


  Syntax:
          useEffect(() => {
              // Code to run on each render
              return () => {
                  // Cleanup function (optional)
              };
          }, [dependencies]);

  Effect function: This is where your side effect code runs.
  Cleanup function: This optional return function cleans up side effects like subscriptions or timers when the component unmounts.
  Dependencies array: React re-runs the effect if any of the values in this array change


  How does it work?

  Initial Render Happens: React renders the component and updates the DOM.
  useEffect Executes After Render: It runs after the paint, not during render.
  Dependencies Are Checked: If there is no dependency array, the effect runs after every render; if the array is empty ([]), it runs once on mount; if dependencies are provided, it runs only when those values change.
  Cleanup Function Runs: Before the effect re-runs or the component unmounts, the cleanup function (returned from useEffect) is executed.
  Effect Re-runs: If dependencies changed, the effect runs again—after cleanup.



please don't compare your array of useCallBack and useEffect.

usecallback - here we talking about the optimization 
useeffect - here we talking about the if any change (in dependecies) run again 



what is useRef ??
useRef is a React Hook that lets you reference a value that’s not needed for rendering.

The useRef Hook is a built-in React Hook that returns a mutable reference object (ref) that persists across renders. Unlike state variables, updating a ref does not trigger a component re-render.

Syntax
  const refContainer = useRef(initialValue);

In the above syntax:
useRef returns an object { current: initialValue }.
The current property can be updated without re-rendering the component.


Why Use useRef?

Direct DOM Manipulation: You can directly access and manipulate DOM elements without triggering a re-render.
Persisting Values Across Renders: Use useRef to store values (such as previous state values) that should persist across renders without triggering unnecessary updates.
Optimizing Performance: Avoiding re-renders useRef can help optimize performance, especially when managing timers, DOM references, or other non-UI values.


Performance Considerations

Using useRef correctly can enhance performance, but excessive use may introduce unnecessary complexity.
Use it for non-rendered values: Ideal for persisting values like timers, previous states, or DOM elements.
Avoid using it as state replacement: If UI updates are needed, use useState instead.
Measure before optimizing: Use React DevTools to analyze performance.



*/


