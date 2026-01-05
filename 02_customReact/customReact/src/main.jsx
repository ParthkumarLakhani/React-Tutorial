import { StrictMode, createElement } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// const ReactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_black'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://amazon.in" target='_blank'>Click to visit amazon</a>
)

const reactElement = createElement(
  'a',
  {href:"https://amazon.in", target:'_blank'},
  'Click to Amazon'
)


createRoot(document.getElementById('root')).render(
  <App />,
  reactElement
)
