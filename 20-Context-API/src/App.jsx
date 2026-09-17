import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext.jsx'



const App = () => {

  const data = useContext(ThemeContext)

  return (
    <div class="canvas">
      <h1 class="heading">{data}</h1>
      
    </div>
  )
}

export default App
