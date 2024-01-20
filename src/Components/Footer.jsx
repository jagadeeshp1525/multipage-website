import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-[#5A98F2]'>
    <div className='container xl:container w-full mx-auto md:px-16 px-6 py-14 '>
      <div className='grid md:grid-cols-4 gap-5 grid-flow-row justify-between items-start'>
        <div className='w-full col-span-2'>
          <h2 className='text-white font-bold text-2xl mb-5'>Telco</h2>
          <p className='text-md text-gray-100 font-medium mb-5'>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
          <p className='text-sm text-gray-100 font-medium'>©Telco Pvt Ltd 2023. All rights reserved</p>
        </div>

        <div className=''>
          <h2 className='text-xl text-white font-medium mb-5'>Company</h2>
          <ul>
            <li>
              <a href='/' className='text-white text-sm font-normal'>Home</a>
            </li>
            <li>
              <a href='/' className='text-white text-sm font-normal'>About</a>
            </li>
            <li>
              <a href='/' className='text-white text-sm font-normal'>Services</a>
            </li>
            <li>
              <a href='/' className='text-white text-sm font-normal'>Contact</a>
            </li>
          </ul>
          
        </div>

        <div className=''>
          <h2 className='text-xl text-white font-medium mb-5'>Help</h2>
          <ul>
            <li>
              <a href='/' className='text-white text-sm font-normal'>Privacy Policy</a>
            </li>
            <li>
              <a href='/' className='text-white text-sm font-normal'>Terms & Conditions</a>
            </li>
            <li>
              <a href='/' className='text-white text-sm font-normal'>Customer Support</a>
            </li>
            <li>
              <a href='/' className='text-white text-sm font-normal'>Help</a>
            </li>
          </ul>
          
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer