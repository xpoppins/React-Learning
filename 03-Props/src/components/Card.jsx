import React from 'react'

const Card = (props) => {
  return (
   <div className='card'>
           <img src={props.img} ></img>
           <h1>{props.user}</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, voluptatibus.</p>
           <button>View Profile</button>
         </div>
  )
}

export default Card
