
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let counter = 15

  let [counter, setCounter] = useState(15)

  const addValue = () => {
    if(counter < 20){
      counter = counter + 1
      setCounter(counter)
      console.log(`counter`, counter);
    }
  }

  const removeValue = () => {
    if(counter > 0){
      counter = counter - 1
      setCounter(counter)
      console.log(`counter`, counter);
    }
  }

  //here please note that state will not changed the value were all variable is used, it's just propogate to all where it is used.

  return (
    <>
    <h1>Counter: {counter} </h1>

    <button onClick={addValue}>Add Value: {counter}</button>
    <br />
    <br />
    <button onClick={removeValue}>remove Value: {counter}</button>
    </>
  )
}

export default App


/* 
Why this way is not work ??
  The counter is not updating because it is a normal JavaScript variable. React does not track changes to local variables, so changing it does not trigger a re-render. To update the UI, we must use React state via useState, which notifies React to re-render the component.


What is a Hook in React ??
  A Hook is a special function in React that lets you use state and other React features in functional components, effectively "hooking into" features like state management and lifecycle methods [1, 2]. 

  Before Hooks were introduced in React 16.8, these features were only available in class components. Hooks bridge that gap, allowing developers to write most of their components as simpler, more concise functional components [1]. They always start with the word use (e.g., useState, useEffect) and must only be called at the top level of a component [1, 2]. 


Why We Use Hooks ??
  Hooks were introduced to solve several challenges faced with class components and offer numerous benefits: 

  Reusing State Logic: Hooks make it easier to share stateful logic between components without complex patterns like Higher-Order Components (HOCs) or Render Props [1].

  Simpler Code: Functional components with Hooks are generally easier to read and test compared to the often verbose class components, which involve this binding and multiple lifecycle methods [1, 2].

  Organized Side Effects: Hooks like useEffect allow developers to group related logic (e.g., data fetching and subscriptions) into a single place, rather than scattering it across different lifecycle methods like componentDidMount and componentDidUpdate [2].

  Improved Performance (Potentially): While the performance difference is often minimal, functional components can sometimes benefit from certain optimizations that are harder to apply to classes [1].

  Better Readability: By separating concerns into individual Hooks, components become more modular and easier to understand [1]



Most common React Hooks (you should know)
| Hook          | Purpose                         |
| ------------- | ------------------------------- |
| `useState`    | Manage state                    |
| `useEffect`   | Side effects (API, timers, DOM) |
| `useContext`  | Consume context                 |
| `useRef`      | Access DOM / persist value      |
| `useMemo`     | Optimize expensive calculations |
| `useCallback` | Memoize functions               |
| `useReducer`  | Complex state logic             |



*/

