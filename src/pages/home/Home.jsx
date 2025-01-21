import React from 'react'
import Hero from './Hero'
import Products from '../products/Products'
import Filter from './Filter'


const Home = () => {
  return (
    <div>
      <Hero />
      <Filter />
      <Products />
    </div>
  )
}

export default Home
