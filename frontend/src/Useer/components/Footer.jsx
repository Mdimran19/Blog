import React from 'react'

const Footer = () => {
  return (
    <div>
         <div className='bg-black text-white'>
        <a href="#top"><span className='flex justify-center text-white text-2xl font-bold  cursor-pointer mt-5 '>IMRAN</span></a>
        <div className='w-max flex items-center gap-2 mx-auto'>
            <img src='/headlogo.png' width={30} height={30} alt='' className='bg-white rounded-md shadow-lime-300 shadow-[2px_2px_0_0]' /> 
            <span>Email:</span>
            imran32472@gmail.com
        </div>
        <div className='text-center sm:flex items-center justify-between border-t border-gray-400  mx-[10%] mt-12 py-6'>
            <p>@<span className='px-3'>2025.</span> <span>IMRAN</span> All rights reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a href="https://github.com/Mdimran19">GitHub</a></li>
                <li><a href="https://www.facebook.com/profile.php?id=100083191555301">Facebook</a></li>
                <li><a href="https://www.linkedin.com/in/imranmia/">Linkedin</a></li>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Footer