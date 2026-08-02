import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(10)

  //usestate is asynchronus and by creating like this it will eecute 3 times while executing function
  // if we use directly it will run only on time
  // we use genrally use  REACT to make change or updation
  // we should not update the value of our data set directly..we must do it from REACT
  // like here ..in this code ->
  //              prev is created rarther than directly making changes in num..

  const btnClicked = () => {
    setNum(prev => (prev + 1))
    setNum(prev => (prev + 1))
    setNum(prev => (prev + 1))
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App