import React from 'react'
import Rightcardcontent from './Rightcardcontent'

const Rightcard = (props) => {
  return (
    <div className='bg-red-900 relative shrink-0  overflow-hidden h-full w-80 rounded-4xl'>
        <img className='h-full w-full object-cover' src={props.img}></img>
        <Rightcardcontent tag={props.tag} color={props.color} id={props.id}/>
    </div>
  )
}

export default Rightcard
