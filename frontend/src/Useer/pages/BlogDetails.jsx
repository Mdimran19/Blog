
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const BlogDetails = () => {
//   const { id } = useParams();
//   const [blog, setBlog] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [comment, setComment] = useState('');
//   const [comments, setComments] = useState([]);

//   useEffect(() => {
//     const fetchBlog = async () => {
//       try {
//         const response = await axios.get(`http://localhost:7000/blog/blog/${id}`);
//         if (response.data) {
//           setBlog(response.data);
//           const commentResponse = await axios.get(`http://localhost:7000/blog/${id}/comments`);
//           setComments(commentResponse.data);
//         } else {
//           console.error('No data found in response');
//         }
//       } catch (error) {
//         console.error('Error fetching blog:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlog();
//   }, [id]);

//   const handleCommentSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(`http://localhost:7000/blog/${id}/comments`, {
//         text: comment,
//       });
//       setComments([...comments, response.data]);
//       setComment('');
//     } catch (error) {
//       console.error('Error submitting comment:', error);
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!blog) {
//     return <div>Blog not found!</div>;
//   }

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">{blog.title}</h1>
//       {blog.fileAvatar && blog.fileAvatar.url && (
//         <img
//           src={blog.fileAvatar.url}
//           alt={blog.title}
//           className="w-full h-64 object-cover rounded-md"
//         />
//       )}
//     {/* jjj
//        */}
      
//        {/* mm */}
//       <div className="mt-8">
//         <h2 className="text-xl font-bold mb-4">Comments</h2>
//         <form onSubmit={handleCommentSubmit} className="mb-4">
//           <textarea
//             value={comment}
//             onChange={(e) => setComment(e.target.value)}
//             placeholder="Write your comment..."
//             className="w-full p-2 border rounded-md"
//             rows="3"
//             required
//           />
//           <button
//             type="submit"
//             className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//           >
//             Submit Comment
//           </button>
//         </form>

//         {/* কমেন্ট লিস্ট */}
//         <div>
//           {comments.map((comment, index) => (
//             <div key={index} className="mb-4 p-2 border-b">
//               <p className="text-gray-700">{comment.text}</p>
//               <p className="text-sm text-gray-500">By: {comment.author || 'Anonymous'}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogDetails;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:7000/blog/blog/${id}`);
        if (response.data) {
          setBlog(response.data);
          const commentResponse = await axios.get(`http://localhost:7000/blog/${id}/comments`);
          setComments(commentResponse.data);
        } else {
          console.error('No data found in response');
        }
      } catch (error) {
        console.error('Error fetching blog:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:7000/blog/${id}/comments`, {
        text: comment,
      });
      setComments([...comments, response.data]);
      setComment('');
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (!blog) {
    return <div className="flex justify-center items-center h-screen">Blog not found!</div>;
  }

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 items-center">
      {/* ব্লগ টাইটেল এবং ইমেজ */}
      <h1 className="text-2xl text-center sm:text-3xl md:text-4xl font-bold pb-10 mb-4">{blog.title}</h1>
      {blog.fileAvatar && blog.fileAvatar.url && (
        <div  className="rounded-full w-[100%] h-[100%] pl-[37%] pr-[25%] items-center  sm:h-64 md:h-80 lg:h-96 object-cover">
        <img
          src={blog.fileAvatar.url}
          alt={blog.title}
         className='rounded-full shadow hover:shadow-2xl hover:shadow-lime-500'
        />
        </div>
        
      )}
      <div>
      <h3 className='font-medium'>Writter: <span>{blog.writter}</span></h3>
      </div>
      
      <p className='font-medium text-2xl pt-24'>{blog.author}</p>
       <div className='p-5 px-5'>
             <button className="bg-black text-white py-1 px-4 rounded-full text-3xl uppercase tracking-wide self-start hover:bg-gray-800 transition-colors">
               {blog.category}
              
             </button>
             </div>
     
<p className='font-medium text-2xl pt-24'>{blog.description}</p>
<p className='text-3xl p-5'>{blog.date}</p>
      {/* কমেন্ট সেকশন */}
      <div className="mt-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Comments</h2>
        <form onSubmit={handleCommentSubmit} className="mb-4">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your comment..."
            className="w-full p-2 border rounded-md sm:text-lg md:text-xl"
            rows="3"
            required
          />
          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 sm:text-lg md:text-xl"
          >
            Submit Comment
          </button>
        </form>

        {/* কমেন্ট লিস্ট */}
        <div>
          {comments.map((comment, index) => (
            <div key={index} className="mb-4 p-2 border-b">
              <p className="text-gray-700 sm:text-lg md:text-xl">{comment.text}</p>
              <p className="text-sm sm:text-base md:text-lg text-gray-500">
                By: {comment.author || 'Anonymous'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;