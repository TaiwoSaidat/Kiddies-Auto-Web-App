import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import React from 'react'
import Header from './pages/home/Header'
import Footer from './pages/home/Footer'
import Home from './pages/home/Home'
import TopContactHeader from './pages/home/TopContactHeader'
import Products from './pages/products/Products'
import Cart from './pages/checkout/Cart'
import ProductsDescription from './pages/products/ProductsDescription'
import Checkout from './pages/checkout/Checkout'


function App() {
  

  return (
    <>
     <TopContactHeader />
     <Header />


     <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Products' element={<Products/>} />
          <Route path='/Cart' element={<Cart/>} />
          <Route path='/ProductsDescription' element={<ProductsDescription/>} />
          <Route path='/Checkout' element={<Checkout/>} />
        </Routes>
      </Router>
   
     <Footer/>
    
     
    </>
  )
}

export default App
