import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import Cards from './components/Cards'

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)
  const [heading, setHeading] = useState("no data available")

  let getdata = async ()=>{
    
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserData(response.data)
    
  }

  useEffect(()=>{
  getdata()
  },[index])

  let printuserdata = <h3 className='text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h3>

  if (userData.length>0){
    printuserdata = userData.map(function(elem,idx){
      return <div className="">
        <Cards key={idx} elem={elem}/>
      </div>
    })
  }


  return (
    <div className='bg-black h-screen text-white'>
      <button
      onClick={() => {
        getdata();
        setIndex(1);
      }}
      className='bg-green-600 px-5 py-2 m-5 active:scale-96 font-bold rounded'
      >Home</button>

      <div className='flex flex-wrap gap-4'>
        {printuserdata}
      </div>

      <div className="flex justify-center gap-6 items-center p-4">
        <button className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'
        style={{ opacity: index == 1 ? 0.6 : 1 }}
        onClick={()=>{
          if (index>1){
            setIndex(index-1)
          }
        }}
        >
          Prev
          </button>

        <h4>page {index}</h4>  


        <button className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'
        onClick={()=>{
          setIndex(index+1)
        }}
        >
          Next
          </button>
      </div>


    </div>
  )
}

export default App
