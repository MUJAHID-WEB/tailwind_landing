
import React from 'react'
import {FaUserAstronaut} from 'react-icons/fa'

export default function Plan() {
  return (
    <div className='py-[100px] px-2 '>
        <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-6'>
            <div className='shadow-xl h-[500px] my-2 hover:scale-105 duration-500'>
                <FaUserAstronaut className='text-[50px]'/>
                <h2 className=''>Web Development</h2>
                <span className=''>$149</span>
                <p className=''>Lorem Ispam is Symply</p>
                
            </div>
            <div className='shadow-xl h-[500px] bg-gray-100 my-2 hover:scale-105 duration-500'>

            </div>
            <div className='shadow-xl h-[500px] my-2 hover:scale-105 duration-500'>

            </div>
        </div>
    </div>
  )
}
