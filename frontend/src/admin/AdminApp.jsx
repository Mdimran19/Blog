import React from 'react';
import { Router, Routes, Route } from 'react-router-dom';

import SideBar from './components/SideBar';

import AddBlog from './pages/AddBlog';
import BlogList from './pages/blogList';
import SubsCribe from './pages/subscribe';
import UpdateBlog from './pages/UpdateBlog';

function AdminApp() {
  return (
    <div>
      <div className='flex'>
        <SideBar />
        <div className='flex flex-col w-full'>
          <div className='flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black '>
            <h3 className='font-medium'>Admin panel</h3> <img src="/Images/imran.jpg" width={40} height={40} className='rounded-full' alt="" />
          </div>
          <Routes>
            <Route path='/' element={<BlogList />} />
            <Route path='/addblog' element={<AddBlog />} />
          <Route path='/subs' element={<SubsCribe/>} />
          <Route path='/edit/:id' element={<UpdateBlog/>} />
          </Routes>
        </div>


      </div>




    </div>
  );
}

export default AdminApp;