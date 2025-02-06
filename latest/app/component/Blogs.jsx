'use client'
//import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import Link from 'next/link';
//import Link from 'next/link';

const Blogs = ({ id }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [menu, setMenu] = useState("All")
  // GET request to fetch blogs from the server
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:7000/blog/blog-get');
        const data = await response.json();

        if (response.ok) {
          setBlogs(data);
        } else {
          setError(data.message || 'Failed to load blogs');
        }
      } catch (err) {
        setError('An error occurred while fetching blogs');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);



  if (loading) {
    return <div>Loading...</div>;
  }

  return (




    <div>
      <div className='flex justify-center gap-6 my-10'>
        <button onClick={() => setMenu('All')} className={menu === "All" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}>All</button>
        <button onClick={() => setMenu('Travel')} className={menu === "Travel" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}>Travel</button>
        <button onClick={() => setMenu('Health')} className={menu === "Health" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""} >Health</button>
        <button onClick={() => setMenu('Story')} className={menu === "Story" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}>Story</button>
      </div>
      <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
      {blogs.filter((blog) => menu === "All" ? true : blog.category === menu).map((blog, index) => {
          return <Card key={index} className='p-2'>
            {/* <Link href={`http://localhost:7000/blog/blog/${encodeURIComponent(blog.id)}`}><img className='rounded-md' src={blog.fileAvatar.url} alt={blog.title} width={150} height={150} /></Link> */}

            <Link href={`http://localhost:7000/blog/blog/${blog._id}`}>
              <img className='rounded-md' src={blog.fileAvatar.url} alt={blog.title} width={150} height={150} />
            </Link>


            <button className='bg-black text-white py-0.5 px-3 rounded-sm mt-2'>{blog.category}</button>
            <h2>{blog.title}</h2>
            <p>{blog.auther}</p>

          </Card>
        })} 




  



      </div>
    </div>
  )
}
export default Blogs
