import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

export default function Header() {
    const [toggle, setToggle] = useState(false)
    return (
        <div className='bg-[#2699fb] p-4'>
            <div className='max-w-[1240px] py-[12px] items-center flex justify-between mx-auto'>
                <div className='text-3xl font-bold'>DevFirm</div>
                {
                    toggle ?
                        <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block' />
                        :
                        <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block' />

                }

                <ul className='hidden md:flex gap-10 text-white'>
                    <li>Home</li>
                    <li>Company</li>
                    <li>Resources</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                {/* Responsive */}
                <ul className={`duration-500 md:hidden text-white fixed bg-black top-[92px] w-full h-screen 
                    ${
                        toggle? 
                            'left-[0]' 
                        :
                            'left-[-100%]' 
                    }
                `}>
                    <li>Home</li>
                    <li>Company</li>
                    <li>Resources</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>

        </div>
    )
}
