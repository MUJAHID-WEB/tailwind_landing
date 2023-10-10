import React from 'react'
import Typed from 'react-typed'

export default function Banner() {
  return (
    <div className='bg-[#2699fb] p-4'>
        <div className='max-w-[1240px] py-[100px] mx-auto font-bold md:text-[50px] text-3xl'>
            <div className=''>
                Learn with us
            </div>
            <h2 className='text-white md:text-[70px] md:p-[30px] p-[15px]'>
                Grow with Us
            </h2>
            <div className='text-white md:text-[35px]'>
                Learn 
                <Typed 
                    className='pl-2'
                    strings={['Web Development', 'Digital Marketing', 'Ethical Hacking']}
                    typeSpeed={100}
                    loop={true}
                    backSpeed={100 }
                />
            </div>
            <button className=' w-[15%] bg-black text-[25px] m-10 text-white p-3 rounded'>
              Get Started
            </button>
        </div>

        
    </div>
  )
}
