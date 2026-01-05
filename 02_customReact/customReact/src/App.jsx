
function App() {
  const fName = 'parth'
  const lName = 'kumar'

  return (
    <>
    <h1>My Name is {fName + lName} </h1>
    {/* <h1>My Name is {if(1) fName + lName } </h1> */}
    <h1>My Name is { (1 == 0) ? fName + lName : "Ok Bhaiji" } </h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eveniet consequuntur illo aliquam officiis. Laudantium, quam voluptatem debitis earum facilis vitae sequi velit recusandae qui maxime, reiciendis iure ad doloremque?</p>
    </>
  )
}

export default App


/* how can we written a variable ?? 

expression - evaluted expression

why we are not write js inside it ??
__end of the it will convert to object, so inside object that is not allowed.


*/