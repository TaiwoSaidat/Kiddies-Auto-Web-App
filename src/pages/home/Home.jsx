import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Footer from './Footer'
import Card from '../../components/Card'
import Products from '../products/Products'
import Filter from './Filter'


const Home = () => {
  return (
    <div>
      {/* <BrowserRouter><Header /><Pages /><Footer /></BrowserRouter> */}
      {/* <Header /> */}
      {/* <Card /> */}
      <Hero />
      <Filter />
      <Products />
      {/* <Footer /> */}
      
    </div>
  )
}

export default Home
