import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Mens from './pages/Mens'
import Kids from './pages/Kids'
import Womens from './pages/Womens'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import {  Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className='bg-black text-white h-screen'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />    // Dynamic Route for Course Detail

        
        // Nested Routes for Product
        <Route path="/product" element={<Product />}>  // This is the parent route for Product
          <Route path="mens" element={<Mens />} />      // This is the nested route Child for Mens Collection
          <Route path="womens" element={<Womens />} />
          <Route path="kids" element={<Kids />} />
        </Route>

        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      
      <Footer/>

      
    </div>
  )
}

export default App
