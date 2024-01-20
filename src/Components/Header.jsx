import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className=''>
        <div className='container xl:container mx-auto md:px-16 px-6 w-full py-5'>
            <div className='flex flex-row justify-between items-center'>
                <NavLink to="/">
                    <img src="../images/telco-logo1.svg" alt='' className='' title='' />
                </NavLink>
                <Navbar/>
            </div>

        </div>
        
    </header>
    
    // <div>avasasdsdas</div>
  )
}

export default Header