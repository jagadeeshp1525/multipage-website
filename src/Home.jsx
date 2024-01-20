import React from 'react'
import HeroSection from './Components/HeroSection'

const Home = () => {

  const data = {
    title: 'Virtual healthcare for you',
    descriptions: 'Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone',
    image: '../images/banner-img1.png',
    herobtn: 'Know More',
  }

  const data1 ={
    title: 'About Us',
    descriptions: 'Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone, Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone',
    herobtn: 'Learn More',
    image: './images/about-img-1.png'
  }
  return (
    <div className=''>
    <HeroSection {...data}/>
    <HeroSection {...data1}/>

    </div>
  )
}

export default Home