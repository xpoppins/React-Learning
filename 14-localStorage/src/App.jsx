import React from 'react'


const clear = localStorage.clear();
const user = localStorage.setItem('user', 'Sumit');
const age = localStorage.setItem('age', '18');
const getUser = localStorage.getItem("user");
const remove = localStorage.removeItem('age');




const App = () => {
  return (
    <>
    <h1 className='text-4xl bg-black h-screen items-center text-white  justify-center font-bold'>Local Storage </h1>
    </>
  )
}

export default App
