import React, { useState } from 'react'
import axios from 'axios'
const App = () => {

  // we have two methods. i) FETCH  ii) AXIOS
const [data, setData] = useState([])
  const response = async ()=>{
    
    

    // FETCH METHOD
    // const collectedData =  await fetch('https://picsum.photos/v2/list')


    const collectedData = await axios.get('https://picsum.photos/v2/list')
    
    setData(collectedData.data)
    
  }

  return (
  <div className="bg-black min-h-screen text-white flex flex-col items-center">
    <h1 className="text-3xl font-bold pt-8">TO fetch data from API.</h1>
    <p>sample testing</p>
    
    <div className="mt-8 ">
      <button className='bg-amber-400 px-5 py-2 font-bold  text-black rounded'
      onClick={response}
      >click here</button>
    </div>
    <div className="leading-loose mt-10 font-bold text-4xl">

      {data.map((function (elem,idx){
        return <h3 key={idx}> hello...{elem.author}, {idx} </h3>
      }))}

    </div>
  </div>
)

}

export default App
