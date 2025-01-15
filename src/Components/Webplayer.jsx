import React, { useContext } from 'react'
import assets from '../assets/assets'
import { Webplayerdata } from '../Index/Webplayerdata'

const Webplayer = () => {

    const {hrtag,barline,audiostatus,play,pause,song, time, previous, next, linesong} = useContext(Webplayerdata)
    console.log('audiostatus', audiostatus);

  return (
    <div className='bg-black justify-center flex items-center text-white px-4 h-[10%] gap-2'>
        <div className='flex items-center gap-4'>
            <img className='w-12 text-lg font-semibold ' src={song.image} alt=''/>
        </div>
        <h1>{song.name}</h1>
        <div className=' flex flex-col items-center gap-1 m-auto '>
            <div className='flex gap-6'>
                <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt=''/>
                <img onClick={previous} className='w-4 cursor-pointer' src={assets.back_button} alt=''/>
                {audiostatus
                ?<img onClick={play} className='w-4 cursor-pointer' src={assets.play_button} alt=''/>
                :<img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_button} alt=''/>
                }
                <img onClick={next} className='w-4 cursor-pointer' src={assets.next_button} alt=''/>
                <img className='w-4 cursor-pointer' src={assets.loop_icon} alt=''/>
            </div>
            <div className='flex items-center gap-3'>
              <p>{time.currentTime.minute}:{time.currentTime.second}</p>
              <div onClick={linesong} ref={hrtag} className='bg-gray-300 cursor-pointer rounded-full w-[40vw] max-w-[500px]'>
                <hr ref={barline} className='bg-green-600 border-none w-0 h-1 rounded-full'/>
              </div>
              <p>{time.totalTime.minute}:{time.totalTime.second}</p>
            </div>
        </div>
        <div className=' hidden lg:flex gap-2 items-center opacity-75'>
          <img className='w-4' src={assets.plays} alt=''/>
          <img className='w-4' src={assets.mic} alt=''/>
          <img className='w-4' src={assets.queue} alt=''/>
          <img className='w-4' src={assets.speakers} alt=''/>
          <img className='w-4' src={assets.volume} alt=''/>
            <div className='bg-slate-300 h-1 w-15 rounded'>
            </div>
          <img className='w-4' src={assets.minimize} alt=''/>
        </div>
    </div>
  )
}

export default Webplayer