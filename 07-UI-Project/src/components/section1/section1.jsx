import React from 'react'
import Navbar from './Navbar'
import Page1content from './Page1content'


const section1 = (props) => {
  return (
    <div className='h-screen w-full'>
        <Navbar/>
        <Page1content users={props.users}/>
      
    </div>
  )
}

export default section1
