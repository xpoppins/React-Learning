import React from 'react'

const Cards = (props) => {
  return (
    <div>
      <div key={props.elem.id} className="h-40 w-44 overflow-hidden bg-white rounded-xl">
        <img className='h-full w-full object-cover' src={props.elem.download_url} alt="" />
      </div>
      <h2 className='font-bold text-lg'>{props.elem.author}</h2>
    </div>
  )
}

export default Cards
