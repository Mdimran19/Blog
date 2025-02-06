
// export default function BlogDetails({ blog }) {
//   if (!blog) {
//     return <div>Invalid blog ID or blog not found.</div>;
//   }

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">{blog.title}</h1>
//       <img src={blog.fileAvatar.url} alt={blog.title} className="w-full h-64 object-cover rounded-md" />
//       <p className="text-gray-600 mt-2">{blog.author}</p>
//       <p className="text-sm text-blue-500">{blog.category}</p>
//       <p className="mt-4">{blog.description}</p>
//     </div>
//   );
// }


// export async function getServerSideProps(context) {
//   const { id } = context.params;

//   try {
//     const res = await fetch(`http://localhost:7000/blog/blog/${id}`);
//     if (!res.ok) {
//       throw new Error("Failed to fetch blog");
//     }
//     const blog = await res.json();
//     return { props: { blog } };
//   } catch (error) {
//     console.error(error);
//     return { props: { blog: null } };
//   }
// }

// import React from 'react';

// export default function BlogDetails({ blog }) {
//   console.log(blog); // Check the console to see if the blog data is received

//   if (!blog) {
//     return <div>Invalid blog ID or blog not found.</div>;
//   }

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">{blog.title}</h1>
//       <img src={blog.fileAvatar.url} alt={blog.title} className="w-full h-64 object-cover rounded-md" />
//       <p className="text-gray-600 mt-2">{blog.author}</p>
//       <p className="text-sm text-blue-500">{blog.category}</p>
//       <p className="mt-4">{blog.description}</p>
//     </div>
//   );
// }

// export async function getServerSideProps(context) {
//   const { id } = context.params;

//   try {
//     const res = await fetch(`http://localhost:7000/blog/blog/${id}`);
//     if (!res.ok) {
//       throw new Error("Failed to fetch blog");
//     }
//     const blog = await res.json();
//     return { props: { blog } };
//   } catch (error) {
//     console.error(error);
//     return { props: { blog: null } };
//   }
// }
import { useRouter } from 'next/router';

const BlogDetails = ({ post }) => {
  const router = useRouter();

  
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.description}</p>
      <p><strong>Author:</strong> {blog.author}</p>
      <p><strong>Date:</strong> {blog.date}</p>
    </div>
  );
};

export async function getStaticPaths() {
  // Fetch the list of posts to generate paths
  const res = await fetch(`http://localhost:7000/blog/blog/${id}`);
  const blogs = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = blogs.map((blog) => ({
    params: { id: blog.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Fetch the post data based on the id
  const res = await fetch(`http://localhost:7000/blog/blog/${id}`);
  const blog = await res.json();

  return {
    props: {
      blog,
    },
  };
}

export default BlogDetails;