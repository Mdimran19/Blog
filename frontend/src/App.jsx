
// import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
// import axios from 'axios'
// import './index.css';
// import './App.css';
// import { useContext, useEffect } from 'react';
// import { Context } from './main';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import BlogList from './components/BlogList';
// import BlogDetails from './pages/BlogDetails';


// function App() {
//   const { blogs, setBlogs} = useContext(Context);
//   useEffect(()=> {
// const fetchBlogs = async () =>{
//   try {
//     const response = await axios.get("http://localhost:7000/blog/blog-get", {withCredentials: true});
   
//     setBlogs(response.data.blogs);
//   } catch (error) {
  
//     setBlogs({});
//   }
// };
// fetchBlogs();
//   },
// []
//   )
 

//   return (
//     <>
//     <Router>
//       <Header/>
  
      
//       <Routes>
//       <Route path="/" element={<BlogList />} /> 
//       <Route path='/details/:id' element={<BlogDetails/>} />
      
//        </Routes>

//       <Footer/>
//       </Router>
//    </>
//   )
// }

// export default App
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserApp from './Useer/userApp';
import AdminApp from './admin/adminApp';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<UserApp/>} />
        <Route path='/admin/*' element={<AdminApp/>}/>
      </Routes>
    </Router>
  );
}

export default App;