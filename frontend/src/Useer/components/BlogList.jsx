
// import React, { useContext, useEffect, useState } from 'react'
// import { toast } from 'react-toastify';
// import { Context } from "../../main";
// import axios from 'axios';
// import Card from '@mui/material/Card';
// import { Link } from 'react-router-dom';


// const BlogList = () => {

//   const [blogs, setBlogs] = useState([]);
//   const [menu, setMenu] = useState("All")
//   const {  } = useContext(Context);
//    useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const response = await axios.get('blog-psi-one-78.vercel.app/blog/blog-get/blog/blog-get');
//         if (response && response.data) {
//           setBlogs(response.data); // ডেটা সেট করুন
//         } else {
//           console.error('No data found in response');
//         }
//       } catch (error) {
//         console.error('Error fetching blogs:', error);
//       }
//     };
//      fetchBlogs()
//    }, [])
 

//   return (
   
//     <div>
//       <div className='flex justify-center gap-6 my-10'>
//         <button onClick={() => setMenu('All')} className={menu === "All" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}>All</button>
//         <button onClick={() => setMenu('Travel')} className={menu === "Travel" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}>Travel</button>
//         <button onClick={() => setMenu('Health')} className={menu === "Health" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""} >Health</button>
//         <button onClick={() => setMenu('Story')} className={menu === "Story" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}>Story</button>
//       </div>
//       <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
//       {blogs.filter((blog) => menu === "All" ? true : blog.category === menu).map((blog, index) => {
//            return <Card 
//            key={index} 
//            className="p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
         
//            <Link to={`/details/${blog._id}`} className="block overflow-hidden rounded-md">
//              <img 
//                className="w-full h-28 object-cover hover:scale-105 transition-transform duration-300"
//                src={blog.fileAvatar.url} 
//                alt={blog.title} 
//              />
//            </Link>
         
//            <div className="mt-4 flex flex-col flex-1">
//              <button className="bg-black text-white py-3 px-8  rounded-md text-sm uppercase tracking-wide self-start hover:bg-gray-800 transition-colors">
//                {blog.category}
              
//              </button>
             
//              <h2 className="mt-3 text-xl font-bold text-gray-800 truncate-two-lines">
//                {blog.title}
//              </h2>
//              <h3 className="mt-3 text-xl font-bold text-gray-800 truncate-two-lines">
//                {blog.writter}
//              </h3>
//              <p className="mt-2 text-gray-600 text-sm">{blog.brief}</p>
             
             
//              <p className="mt-2 text-gray-600 text-sm">{blog.auther}</p>
             
//              <Link 
//                to={`/details/${blog._id}`}
//                className="mt-2 text-blue-600 hover:text-blue-800 font-small inline-flex items-center gap-1"
//              >
//                learn more...
               
//              </Link>
//            </div>
//          </Card>
 
//       ))}
//        </div>
//      </div>
//    )
// }


// export default BlogList
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [menu, setMenu] = useState('All');  // State for filtering categories

  // Fetch blog data from the server
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:7000/blog/blog-get');
        if (response && response.data) {
          setBlogs(response.data); // Set blogs data
        } else {
          console.error('No data found in response');
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
        toast.error("Error fetching blogs, please try again.");
      }
    };

    fetchBlogs();
  }, []); // Empty dependency array means it runs only once when component mounts

  return (
    <div>
      {/* Category Filter Buttons */}
      <div className="flex justify-center gap-6 my-10">
        <button
          onClick={() => setMenu('All')}
          className={menu === 'All' ? 'bg-black text-white py-1 px-4 rounded-sm' : 'py-1 px-4 rounded-sm'}
        >
          All
        </button>
        <button
          onClick={() => setMenu('Travel')}
          className={menu === 'Travel' ? 'bg-black text-white py-1 px-4 rounded-sm' : 'py-1 px-4 rounded-sm'}
        >
          Travel
        </button>
        <button
          onClick={() => setMenu('Health')}
          className={menu === 'Health' ? 'bg-black text-white py-1 px-4 rounded-sm' : 'py-1 px-4 rounded-sm'}
        >
          Health
        </button>
        <button
          onClick={() => setMenu('Story')}
          className={menu === 'Story' ? 'bg-black text-white py-1 px-4 rounded-sm' : 'py-1 px-4 rounded-sm'}
        >
          Story
        </button>
      </div>

      {/* Blog Cards Display */}
      <div className="flex flex-wrap justify-around gap-8 mb-16 xl:mx-24">
        {blogs
          .filter((blog) => menu === 'All' || blog.category === menu) // Filter blogs based on selected category
          .map((blog, index) => (
            <Card
              key={index}
              className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Link to={`/details/${blog._id}`} className="block overflow-hidden rounded-md">
                <img
                  className="w-full h-48 object-cover rounded-md hover:scale-105 transition-transform duration-300"
                  src={blog.fileAvatar.url} // Avatar image
                  alt={blog.title}
                />
              </Link>

              <div className="mt-4 flex flex-col">
                {/* Category Button */}
                <button className="bg-black text-white py-2 px-4 rounded-md text-sm uppercase tracking-wide self-start hover:bg-gray-800 transition-colors">
                  {blog.category}
                </button>

                {/* Blog Title */}
                <h2 className="mt-3 text-xl font-bold text-gray-800 truncate-2-lines">
                  {blog.title}
                </h2>

                {/* Writer Name */}
                <h3 className="mt-2 text-md font-semibold text-gray-700">{blog.writter}</h3>

                {/* Brief Description */}
                <p className="mt-2 text-gray-600 text-sm line-clamp-3">{blog.brief}</p>

                {/* Author Name */}
                <p className="mt-2 text-gray-600 text-sm">{blog.author}</p>

                {/* Learn More Link */}
                <Link
                  to={`/details/${blog._id}`}
                  className="mt-2 text-blue-600 hover:text-blue-800 font-small inline-flex items-center gap-1"
                >
                  Learn more...
                </Link>
              </div>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default BlogList;
