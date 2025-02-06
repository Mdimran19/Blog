import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className='py-5 px-5 md:px-12 lg:px-28'>
            <div className='flex justify-between items-center'>
                <Image src='/headlogo.png' width={130} height={100} alt='' className='w-[130px] sm:w-auto' />
                <button className='flex items-center gap-2 font-medium py-1 px-3  sm:py-3 sm:px-6 border border-solid border-black rounded-md bg-amber-100 shadow-[-7px_7px_0px_#000000]'>
                    Get Start <Image src='/rightarrow.png' width={20} height={20} alt='' />
                </button>
            </div>
            <div className='text-center my-8'>
                <h1 className='text-3xl sm:text-5xl font-medium'>Latset Blogs there...</h1>
                <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore rerum sed modi. Modi dolorem, dicta ad magni ab nemo atque?</p>
                <form className='flex justify-between max-w-[500px] bg-amber-100 scale-75 sm:scale-100 mx-auto mt-10 border border-solid border-black shadow-[-7px_7px_0px_#000000] rounded-md ' action="">
                   <input type="email" placeholder='Enter Your Email' className='pl-4 outline-none bg-amber-50' />
                   <button type='submit' className='border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'>Subscribe</button>
                </form>
            </div>

        </div>
    )
}

export default Header