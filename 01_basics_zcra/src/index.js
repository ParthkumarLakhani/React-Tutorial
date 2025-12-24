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

