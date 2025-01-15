import React from 'react'
import { assets } from '../assets/assets'

const Leftcolumn = () => {
  return (
    <div className='w-[27%] h-full p-2 flex-col text-white flex'>
        <div className='bg-black h-[15%] flex-col rounded flex justify-around'>
            <div className='flex items-center pl-7 cursor-pointer gap-3 '>
                <img className='w-9'src={assets.Spotify_logo} alt=""/>
            </div>
        </div>
      <div className='bg-[#121212] h-[95%] rounded'>
        <div className='p-4 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <img className='w-6' src={assets.library_icon} alt=''/>
            <p className='font-medium text-gray-400'>Your Library</p>
          </div>
          <div className='flex items-center gap-3'>
            <img className='w-4'src={assets.plus_sign} alt=''/>
          </div>
        </div>
        <div className='m-2 rounded font-semibold flex p-3 bg-[#242424] flex-col items-start justify-start pl-4 gap-1'>
          <h1>Create your first playlist</h1>
          <p className='font-light'>It's easy, we'll help you</p>
          <button className='py-1 px-3 text-black bg-white rounded-full mt-3'>Create Playlist</button>
        </div>
        <div className=" text-xs cursor-pointer m-2 rounded font-semibold flex pt-5 text-gray-400 bg-[#121212] flex-row items-center justify-start pl-4 gap-8">
          <h1>Legal</h1>
          <h2>Safety & Privacy Center</h2>
        </div>
        <div className=" text-xs ml-2 cursor-pointer rounded pt-2 font-semibold flex text-gray-400 bg-[#121212] flex-row items-center justify-start pl-4 gap-5">
          <h1>Privacy Policy</h1>
          <h2>Cookies</h2>
          <h3>About Ads</h3>
        </div>
        <div className=" text-xs cursor-pointer ml-2 pt-4 rounded font-semibold flex text-gray-400 bg-[#121212] flex-row items-center justify-start pl-4 gap-5">
          <h1>Accesibility</h1>
        </div>
        <div className=" text-xs ml-2 mb-4 cursor-pointer pt-4 rounded font-semibold flex text-white bg-[#121212] flex-row items-center justify-start pl-4 gap-5">
          <h1>Cookies</h1>
        </div>
        <button className='py-1 ml-5 px-3 text-white bg-black border font-semibold border-white rounded-full mt-3'>English</button>
      </div>  
    </div> 
  )
  
}

export default Leftcolumn