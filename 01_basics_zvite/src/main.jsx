import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
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



*/

