import React from 'react'
import Navbar from './Navbar'
import { Albums } from '../assets/assets'
import Albumsongs from './Albumsongs'
import { songs } from '../assets/assets'
import Songsarea from './Songsarea'

const Homepage = () => {
  return (
    <>
    <Navbar />
    <div className='mb-4'>
      <h1 className='font-bold text-[20px] '>Albums</h1>
      <div className='flex overflow-auto '>
      {Albums.map((item,index)=>(<Albumsongs key={index} name={item.name} id={item.id} image={item.image}/>))}
      </div>
    </div>
    <div className='mb-4'>
      <h1 className='font-bold text-[20px] '>Top Songs</h1>
      <div className='flex overflow-auto '>
      {songs.map((item,index)=>(<Songsarea key={index} name={item.name} id={item.id} image={item.image}/>))}
      </div>
    </div>
    </>
  )
}

export default Homepage