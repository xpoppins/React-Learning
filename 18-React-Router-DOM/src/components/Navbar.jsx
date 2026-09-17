import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between bg-green-700 w-full px-8 py-8 text-white'>
      <h1 className='text-4xl font-bold'>React Router DOM</h1>
      <div className='flex items-center gap-8'>
        <Link className='transition-colors hover:text-red-100 text-xl' to='/'>Home</Link>
        <Link className='transition-colors hover:text-red-100 text-xl' to='/product'>Product</Link>
        <Link className='transition-colors hover:text-red-100 text-xl' to='/about'>About</Link>
        <Link className='transition-colors hover:text-red-100 text-xl' to='/contact'>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar
