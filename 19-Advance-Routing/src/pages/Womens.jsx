import React from 'react'
import {useNavigate} from 'react-router-dom'

const Womens = () => {

  let navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => navigate(-1)} 
        className=" hover:bg-teal-700 active:scale-95 mb-4 inline-block  font-semibold text-xl px-5 py-3 text-white rounded-md bg-teal-900">
          back
          </button>
      <div>
      <h1 className="text-3xl flex text-white font-bold justify-center items-center mb-16">Womens Collection</h1>
    </div>
    </div>
  )
}

export default Womens
