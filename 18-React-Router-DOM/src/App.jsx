import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div >
      <Navbar/>
      <div className='bg-black h-screen'>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/product' element={<Product/>} />
      </Routes>
      </div>
      <Footer/>
      
    </div>
  )
}

export default App
