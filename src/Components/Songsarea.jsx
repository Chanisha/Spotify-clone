import React, { useContext } from 'react'
import { Webplayerdata } from '../Index/Webplayerdata'

const Songsarea = ({name,image,id}) => {

    const {playonclick} = useContext(Webplayerdata)

  return (
       <div onClick={()=>playonclick(id)} className='px-4 p-3 cursor-pointer rounded hover:bg-gray-800 min-w-[180px]'>
        <img className='rounded w-40 h-40' src={image} alt=''/>
        <p className='mb-1 mt-2 font-semibold'>{name}</p>
    </div>
  )
}

export default Songsarea