import React from 'react'

const App = () => {

  const submithandler = (e)=>{
    e.preventDefault();
    console.log("form submitted");
    
    
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        submithandler(e)
      }}>
        <input type="text" placeholder='Enter your name' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
