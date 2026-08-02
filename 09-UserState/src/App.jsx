import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
        </div>
        <div>
          <h1>Xperience your Clicks</h1>
          
          <button
          type="button"
          className="counter"
        >
          Count is {count}
        </button>
          <p>
            you can update the counter by following clicks
          </p>

          <button type="button" className='opbutton' onClick={() => setCount((count) => count + 1)}>
            Increase
          </button>

          <button type="button" className='opbutton' onClick={() => setCount((count) => count - 1)}>
            Decrease
          </button>

          <button type="button" className='opbutton' onClick={() => setCount((count) => count + 5)}>
            Jump by 5
          </button>
        </div>
        
      </section>

      <div className="ticks"></div>

      
      
    </>
  )
}

export default App
