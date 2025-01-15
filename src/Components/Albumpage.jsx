import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import assets, { Albums, songs } from '../assets/assets'
import { Webplayerdata } from '../Index/Webplayerdata'

const Albumpage = () => {
    const { id } = useParams(); 
    const Albums1 = Albums[id];
    const {playonclick} = useContext(Webplayerdata);

  return (
        <>
          <Navbar/>  
          <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
            <img className='rounded w-20' src={Albums1.image}/>
            <div className='flex flex-col'>
                <p>Playlist</p>
                <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{Albums1.name}</h2>
                <p className='mt-1 gap-3'>
                    <img className='inline-block w-5' src={assets.Spotify_logo} alt=''/>
                    <b>Spotify</b>
                    1,23,154 likes
                    <b>50 songs</b>
                </p>
            </div>
          </div>
          <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-gray-300 '>
            <p><b className='mr-4'>#</b>Title</p>
            <img className='m-auto w-4' src={assets.clock_icon} alt=''/>
          </div>
          <hr/>
          {
            songs.map((item,index)=>(
              <div onClick={()=>playonclick(item.id)} key={index} className='grid grid-cols-3 p-2 gap-2 sm:grid-cols-4 text-gray-400 items-center hover:bg-slate-500'>
                 <p className='text-white'>
                    <b className='mr-4 text-gray-300'>{index+1}</b>
                    <img className='inline w-10 mr-5' src={item.image} alt=''/>
                    {item.name}
                 </p>
                 <p className='text-[15px] text-center'>{item.duration}</p>
              </div>
            ))
          }
        </>
  )
}

export default Albumpage