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
     
     
     
      <Router>
        <TopContactHeader />
        <Header />
        <Routes>
          
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products/>} />
          <Route exact path='/cart' element={<Cart/>} />
          <Route path='/productsDescription' element={<ProductsDescription/>} />
          <Route exact path='/checkout' element={<Checkout/>} />
        </Routes>
        <Footer/>
      </Router>


    
     
    </>
  )
}

export default App
