import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogList from './components/BlogList';
import BlogDetails from './pages/BlogDetails';
import LoginPage from './pages/LoginPage';


function UserApp() {
  return (
    <div>
    <Header/>
    <Routes>
      <Route path='/' element={<BlogList/>}/>
      <Route path='/details/:id' element={<BlogDetails/>}/>
      <Route path='/login' element={<LoginPage/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default UserApp;