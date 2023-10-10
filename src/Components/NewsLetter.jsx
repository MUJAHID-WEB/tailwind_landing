import React from 'react'

export default function NewsLetter() {
    return (
        <div className='bg-[#2699fb] p-4'>
            <div className='max-w-[1240px] mx-auto md:flex justify-between py-[50px]'>
                <div className='m-2 text-justify'>
                    <h1 className='text-[20px] md:text-[40px] font-bold text-white'>

                        Want to learn latest I.T skills?
                    </h1>
                    <span className='text-white'>
                        Sign up to our newletter and stay up to date.
                    </span>

                </div>
                <div className='text-justify'>
                    <input type='text' className='mb-2 p-3 mr-2 text-slate-600' placeholder='Enter Email' />
                    <button className=' bg-black text-white p-3 rounded'>
                        Get Started
                    </button>
                    <br />
                    <p className='text-white '>
                        We care about the protection of your data. Read our
                        <br /><a className='text-black'>
                            Privacy Policy
                        </a>
                    </p>

                </div>
            </div>

        </div>
    )
}
