import React from 'react'
import assets from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const Navigate = useNavigate()
  return (
    <>
    <div className='justify-center items-center w-full font-semibold flex'>
      <div className='top-5 left-5 flex items-center gap-2'>
          <img onClick={()=>Navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow1} alt=''/>
          <img onClick={()=>Navigate(1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer mr-10' src={assets.arrow2} alt=''/>
      </div>
        <div className="items-center flex">
        <img 
        src={assets.search_icon}
        alt='Search icon'
        className='absolute pl-2 w-8'/>
        <input
          type="text"
          placeholder="What do you want to play?"
          className="p-3 pl-10 w-[50vw] max-w-[500px] text-white rounded-full bg-[#242424] "
        />
      </div>
      <div className='absolute top-5 right-5 flex items-center gap-2'>
        <p className='bg-white text-black text-[16px] font-bold px-5 py-2 rounded-full hidden cursor-pointer md:block'>Log in</p>
        <p className='bg-[#121212] py-1 px-3 text-[15px] cursor-pointer'>Sign up</p>
      </div>
    </div>
    </>
  )
}

export default Navbar