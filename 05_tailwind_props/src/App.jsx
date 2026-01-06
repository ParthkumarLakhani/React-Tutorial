import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  let person = {
    name: "Gosh",
    age: 22
  }

  let newAry = [1,2,3] 

  return (
    <>
    <h1 className='flex flex-col bg-sky-950 rounded-2xl p-5'>Hello Parth, with tailwind</h1>
    
    
    {/* <div class="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
    <div>
      <img class="size-48 shadow-xl rounded-md" alt="" src="https://content.pexels.com/images/canva/ai-generated-ad/off-theme/sunset_city_skyline_glow-full.jpg" />
    </div>
    <div class="flex items-center md:items-start">
      <span class="text-2xl font-medium">Class Warfare</span>
      <span class="font-medium text-sky-500">The Anti-Patterns</span>
      <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
        <span>No. 4</span>
        <span>·</span>
        <span>2025</span>
      </span>
      </div>
    </div> */}


    {/* <Card beach="miami" age="21" person={person} newAry={newAry} /> */}
    <Card beach="Miami" btnText="Explore Miami" />
    <Card beach="Cuba" />

    </>
  )
}

export default App


/* props - properties

props are make component reusable. means you have one card that usage multiple place so instead of writing a code multiple place we write only once and used anywhere.

*/