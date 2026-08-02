import React, { useState } from 'react'

const App = () => {
  

  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")
  const [task, setTask] = useState([])


  const submitHandler=(e)=>{
    e.preventDefault();1
    
    const copytask = [...task];

    copytask.push({title,details})

    setTask(copytask)

    setTitle("")
    setDetails("")
    
  }

    const deleteNote = (idx)=>{
      const copytask = [...task];
      copytask.splice(idx,1)
      setTask(copytask)
    }
    
    
  return (
    <div className='bg-black lg:flex text-white h-screen '>
      <form onSubmit={(e)=>{submitHandler(e)}} 
      className='flex p-10 gap-10 flex-col items-start lg:w-1/2'>

        <h1 className='font-bold text-center text-yellow-400 text-4xl mb-2 align-center justify-center flex'>
          Add Notes
        </h1>

        
        <input type="text"
        placeholder='Enter Heading...' 
        className='px-5 py-2 w-full font-medium border-2 outline-none rounded '
        value={title}
        onChange={(e)=>{setTitle(e.target.value)}}
        />

        <textarea type='text'
        placeholder='wrtie from here...'
        className='px-5 py-2 w-full font-medium border-2 outline-none rounded '
        value={details}
        onChange={(e)=>{setDetails(e.target.value)}}
        />

       <button className='bg-yellow-400 text-black px-5 py-2 text-2xl font-bold  rounded active:scale-95  w-full outline-none '>Add note</button>

      </form>



      <div className='lg:w-1/2 border-l-2 p-10'>
      <h1 className='text-3xl font-bold'>Recent Notes</h1>
      <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto'>
        {task.map(function(elem,idx){
          return <div key={idx} className=" flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
            <div className='p-2'>
            <h3 className='text-black font-bold text-lg leading-tight '>{elem.title}</h3>
            <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{elem.details}</p>
          </div>
          <button onClick={() => {
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
          </div>
        })}
      
    
  </div>
</div>



    </div>
  )
}

export default App
