import React, { useContext } from 'react';
import { Webplayerdata } from '../Index/Webplayerdata';

const Songsarea = ({ name, image, id }) => {
  const { playonclick } = useContext(Webplayerdata);

  return (
    <div
      onClick={() => playonclick(id)}
      className="px-4 py-3 cursor-pointer rounded hover:bg-gray-800 flex flex-col items-center md:items-start min-w-[150px] max-w-[200px] md:min-w-[180px] md:max-w-[220px] transition-all duration-300"
    >
      <img
        className="rounded w-36 h-36 md:w-40 md:h-40 object-cover"
        src={image}
        alt={name}
      />
      
      <p
        className="mb-1 mt-2 font-semibold text-sm md:text-base text-center md:text-left truncate max-w-full"
      >
        {name}
      </p>
    </div>
  );
};

export default Songsarea;
