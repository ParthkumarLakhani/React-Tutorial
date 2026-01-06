import { useState } from 'react'
import './App.css'

function App() {
  let [ counter, setCounter ] = useState(15)

  const addVal = () => {
    if(counter < 20){
      counter = counter + 1
      // setCounter(counter)
      // setCounter(counter)
      // setCounter(counter)
      // setCounter(counter)
      // setCounter(counter)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
    }
  }

  const removeVal = () => {
    if(counter > 0){
      counter = counter - 1
      setCounter(counter)
    }
  }

  return (
    <>
    <h1>Counter: {counter}</h1>

    <button onClick={addVal}> Add count: {counter}</button>
    <br />
    <br />
    <button onClick={removeVal}> remove count: {counter}</button>
    </>
  )
}

export default App



/* My Question is what happened here if i write like this(11-14) ??

here, useState will send all updates/changes realted UI or variable through batches.   
since, BTS the react use fibre algo so it will take batch and send it, so this all are go in same batch since all are doing same then it will update only last.


but what happend i have that kind of situation ??
  setCounter is function which accept callback, they also have previous val.
what is prevCounter here ?
 it is the last updated state

*/

