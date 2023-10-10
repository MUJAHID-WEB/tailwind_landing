import React from 'react'
import Development from '../Assets/img/development.png'

export default function Experts() {
  return (
    <div className='max-w-[1240px] p-2 mx-auto my-10 md:grid grid-cols-2'>
        <div className=' col-span-1 md:w-[80%] text-center'>
            <img src={Development} alt='' className='inline'/>
        </div>
        <div className='col-span-1 flex flex-col justify-center'>
            <h1 className='text-[#00df9a] text-justify font-bold mt-2'>
              LEARN FROM EXPERTS
            </h1>
            <p className='my-3 text-justify'>
              Lorem ispaum dolor sit amot consectetur ispaum dolor sit amot consectetur ispaum dolor sit amot consectetur ispaum dolor sit amot consectetur ispaum dolor sit amot consectetur
            </p>
            <button className=' w-[25%] bg-black text-white p-3 rounded'>
              Get Started
            </button>
        </div>
    </div>
  )
}
