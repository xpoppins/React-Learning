import React from 'react'
import Rightcard from './Rightcard'

const Rightcontent = (props) => {

    

  return (
    <div id="right" className='h-full w-2/3 p-6 overflow-x-auto flex flex-nowrap gap-10 rounded-4xl'>
        {props.users.map((elem,idx) => (
             <Rightcard key={idx} id={idx} color={elem.color} img={elem.img} tag={elem.tag}/>
        ))}

        
      
    </div>
  )
}

export default Rightcontent
