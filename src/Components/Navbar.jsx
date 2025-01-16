import React from 'react';
import assets from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const Navigate = useNavigate();

  return (
    <>
      <div className="flex justify-between items-center w-full font-semibold px-4 py-3 bg-black text-white">

        <div className="flex items-center gap-2">
          <img
            onClick={() => Navigate(-1)}
            className="w-8 bg-gray-800 p-2 rounded-2xl cursor-pointer"
            src={assets.arrow1}
            alt="Back"
          />
          <img
            onClick={() => Navigate(1)}
            className="w-8 bg-gray-800 p-2 rounded-2xl cursor-pointer"
            src={assets.arrow2}
            alt="Forward"
          />
        </div>

        <div className="flex items-center relative w-full max-w-[600px] mx-4">
          <img
            src={assets.search_icon}
            alt="Search"
            className="absolute left-4 w-6 text-gray-400"
          />
          <input
            type="text"
            placeholder="What do you want to play?"
            className="w-full pl-12 py-2 rounded-full bg-[#242424] text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-gray-600"
          />
        </div>

        <div className="flex items-center gap-2">
          <p className="bg-white text-black text-sm font-bold px-4 py-2 rounded-full hidden md:block cursor-pointer hover:bg-gray-200">
            Log in
          </p>
          <p className="bg-[#121212] py-1 px-3 text-sm cursor-pointer rounded hover:bg-gray-800">
            Sign up
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
