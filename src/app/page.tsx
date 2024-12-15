import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Brand from './components/Brand'
import Ceremics from './components/Ceremics'
import Products from './components/Products'
import ClubBenefits from './components/ClubBenefits'
import Touch from './components/Touch'

const page = () => {
  return (
    <div>
       <Hero />
       <Brand />
       <Ceremics />
       <Products />
       <ClubBenefits />
       <Touch />
    </div>
  )
}

export default page