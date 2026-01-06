
# Virtual Dom, Fiber, reconciliation

# What is virtual dom ??
# should we study virtual dom ??
# react is still use virtual dom ??

# What is Fiber??
# What is reconciliation??
# What are the algo use behind the scene ??

# What is hydration ??





React Fiber is an ongoing reimplementation of React's core algorithm. It is the culmination of over two years of research by the React team.
now days, bts react usage fiber algo  wohi virtual dom ko update karane ke liye.
so, yes virtual dom exist but usko update karne ke liye fiber algo use hota he.

The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

Other key features include the ability to pause, abort, or reuse work as new updates come in; the ability to assign priority to different types of updates; and new concurrency primitives.


# What is hydration ??
  Hydration is the process of attaching React’s JavaScript logic and event listeners to server-rendered HTML to make it interactive.

  means when page is painting(making tree) first will see UI button, image ,.. but there is no js injected. means weblayout bangaya he jab js inject hoti he uss process ko hydration kehte he.

so, using this algo(fiber) hydration process are better.   



What is reconciliation ??
  reconciliation - The algorithm React uses to diff one tree with another to determine which parts need to be changed.

  update - A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render.


Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM."

The key points are:
  Different component types are assumed to generate substantially different trees. React will not attempt to diff them, but rather replace the old tree completely.
  Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique."

# above line ius very important, you have one array, you have to loop that array and get value in like list/button,.. where they concept came why keys are intoduce ?? without keys are also that works
why use keys ??
  because fiber jo algo he usme agar list ki performance improve karana he to har ek iteration pe keys ka use karana hi padega.



The key points are:
  In a UI,...



What is a fiber?
We're about to discuss the heart of React Fiber's architecture. Fibers are a much lower-level abstraction than application developers typically think about. 

We've established that a primary goal of Fiber is to enable React to take advantage of scheduling. Specifically, we need to be able to

  pause work and come back to it later.
  assign priority to different types of work.
  reuse previously completed work.
  abort work if it's no longer needed.

In order to do any of this, we first need a way to break work down into units. In one sense, that's what a fiber is. A fiber represents a unit of work.


Please Read This
# https://github.com/acdlite/react-fiber-architecture

