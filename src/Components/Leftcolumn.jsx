import React from 'react';
import { assets } from '../assets/assets';

const Leftcolumn = () => {
  return (
    <div className="w-full lg:w-[27%] h-full p-2 flex-col text-white flex">
      {/* Spotify Logo */}
      <div className="bg-black h-[10%] lg:h-[15%] flex-col rounded flex justify-center items-center lg:justify-around">
        <div className="flex items-center pl-7 cursor-pointer gap-3">
          <img className="w-9" src={assets.Spotify_logo} alt="Spotify Logo" />
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-[#121212] flex-grow rounded mt-4">
        {/* Your Library Section */}
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-6" src={assets.library_icon} alt="Library Icon" />
            <p className="font-medium text-gray-400">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-4" src={assets.plus_sign} alt="Add Icon" />
          </div>
        </div>

        {/* Create Playlist Section */}
        <div className="m-2 rounded font-semibold flex p-3 bg-[#242424] flex-col items-start justify-start pl-4 gap-1">
          <h1>Create your first playlist</h1>
          <p className="font-light text-sm">It's easy, we'll help you</p>
          <button className="py-1 px-3 text-black bg-white rounded-full mt-3 hover:bg-gray-200">
            Create Playlist
          </button>
        </div>

        {/* Footer Links Section */}
        <div className="mt-4 space-y-4">
          <div className="text-xs cursor-pointer m-2 rounded font-semibold flex text-gray-400 bg-[#121212] items-center pl-4 gap-8">
            <h1>Legal</h1>
            <h2>Safety & Privacy Center</h2>
          </div>
          <div className="text-xs ml-2 cursor-pointer rounded font-semibold flex text-gray-400 bg-[#121212] items-center pl-4 gap-5">
            <h1>Privacy Policy</h1>
            <h2>Cookies</h2>
            <h3>About Ads</h3>
          </div>
          <div className="text-xs ml-2 cursor-pointer pt-2 rounded font-semibold flex text-gray-400 bg-[#121212] items-center pl-4 gap-5">
            <h1>Accessibility</h1>
          </div>
          <div className="text-xs ml-2 cursor-pointer pt-4 mb-4 rounded font-semibold flex text-white bg-[#121212] items-center pl-4 gap-5">
            <h1>Cookies</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftcolumn;
