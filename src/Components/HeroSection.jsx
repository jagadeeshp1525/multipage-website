import React, {useContext} from 'react'
import { AppContext } from '../Context'

const HeroSection = (props) => {

    // const firstName = useContext(AppContext);

  return (
    <div className='w-full mx-auto relative'>
        <div className='container mx-auto w-full md:px-24 px-6 py-10 relative'>
            <div className='grid md:grid-cols-2 grid-flow-row justify-center items-center'>
                <div className='md:px-10 px-4'>
                    <h2 className='text-black md:text-5xl text-3xl font-bold leading-10 mb-3 '>{props.title}</h2>
                    <p className='text-md text-gray-500 font-medium mb-5'>{props.descriptions}</p>
                    {/* <p className='text-md text-gray-500 font-medium mb-5'>Hello, {firstName}</p> */}
                    <a href='/contact' className='font-medium bg-[#4E92F0] border text-white rounded-xl px-5 py-3 hover:border hover:text-[#4E92F0] hover:bg-transparent hover:border-[#4E92F0]'>{props.herobtn}</a>
                </div>
                <div className=''>
                    <img src={props.image} alt='' className='' title=''/>
                </div>
            </div>
            <img src='../images/bg-element.svg' className='absolute left-0 top-20' alt='' title=''/>
        </div>
    </div>
  )
}

export default HeroSection