import React from 'react'
import {useNavigate} from 'react-router-dom'
const Kids = () => {

  let navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => navigate(-1)} 
        className=" hover:bg-teal-700 active:scale-95 mb-4 inline-block  font-semibold text-xl px-5 py-3 text-white rounded-md bg-teal-900">
          back
          </button>
      <h1 className="text-3xl flex text-white font-bold justify-center items-center mb-16">Kids Collection</h1>
    </div>
  )
}

export default Kids
