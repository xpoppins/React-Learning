import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <>
    <div className='parent'>
      <Card user="Sumit Kumar" img="https://images.unsplash.com/photo-1635805737707-575885ab0820?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFydmVsfGVufDB8fDB8fHww"/>
      <Card user="Iron Man" img="https://images.unsplash.com/photo-1501432377862-3d0432b87a14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hcnZlbHxlbnwwfHwwfHx8MA%3D%3D"/>
      <Card user="Deadpool" img="https://images.unsplash.com/photo-1674448417387-345997fcd888?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fG1hcnZlbHxlbnwwfHwwfHx8MA%3D%3D" />
      </div>
    </>
  )
}

export default App
