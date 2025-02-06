
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Header = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Email is required");
      return;
    }
   
    try {
      const response = await axios.post(
        "blog-psi-one-78.vercel.app/email/emailadd",
        { email },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert(response.data.message || "Email added successfully");
      setEmail(""); 
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.message || "An error occurred");
      } else {
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div>
      <div className="py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <img
            src="/headlogo.png"
            alt=""
            className="h-[130px] w-[130px] sm:w-auto"
          /><Link to='/login'>
           <button className="flex items-center gap-2 font-medium py-1 px-3  sm:py-3 sm:px-6 border border-solid border-black rounded-md bg-amber-100 shadow-[-7px_7px_0px_#000000]">
            Get Start <img src="/rightarrow.png" width={20} height={20} alt="" />
          </button>
          </Link>
         
        </div>
        <div className="text-center my-8">
          <h1 className="text-3xl sm:text-5xl font-medium">
            Latest Blogs there...
          </h1>
          <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">
          Positivity is key to overcoming challenges. It helps us stay resilient, focused, and motivated,
           turning obstacles into opportunities and improving both mental and physical he
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex justify-between max-w-[500px] bg-amber-100 scale-75 sm:scale-100 mx-auto mt-10 border border-solid border-black shadow-[-7px_7px_0px_#000000] rounded-md "
            action=""
          >
            <input
              type="email"
              placeholder="Enter Your Email"
              className="pl-4 outline-none bg-amber-50"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
