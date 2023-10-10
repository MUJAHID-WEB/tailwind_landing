import React from 'react'

export default function Header() {
    return (
        <div className='bg-[#2699fb] p-4'>
            <div className='max-w-[1240px] py-[17px] items-center flex justify-between mx-auto'>
                <div className='text-3xl font-bold'>DevFirm</div>
                <ul className='flex gap-10 text-white'>
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
