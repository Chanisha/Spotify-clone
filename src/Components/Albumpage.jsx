import React, { useContext } from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import assets, { Albums, songs } from '../assets/assets';
import { Webplayerdata } from '../Index/Webplayerdata';

const Albumpage = () => {
  const { id } = useParams();
  const Albums1 = Albums[id];
  const { playonclick } = useContext(Webplayerdata);

  return (
    <>
      <Navbar />
      <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end px-4">
        <img
          className="rounded w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-cover"
          src={Albums1.image}
          alt={Albums1.name}
        />
        <div className="flex flex-col">
          <p className="text-gray-400 text-sm md:text-base">Playlist</p>
          <h2 className="text-3xl font-bold mb-2 md:text-5xl lg:text-7xl">{Albums1.name}</h2>
          <p className="text-sm md:text-base mt-1 flex items-center gap-2">
            <img className="inline-block w-5" src={assets.Spotify_logo} alt="Spotify logo" />
            <span className="font-bold">Spotify</span>
            <span className="text-gray-400">• 1,23,154 likes • 50 songs</span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 px-4 text-gray-300 text-sm md:text-base">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <div className="hidden sm:block"></div>
        <div className="hidden sm:block"></div>
        <img className="m-auto w-4" src={assets.clock_icon} alt="Clock icon" />
      </div>
      <hr className="border-gray-600 mx-4" />
      <div className="px-4">
        {songs.map((item, index) => (
          <div
            onClick={() => playonclick(item.id)}
            key={index}
            className="grid grid-cols-3 p-2 gap-2 sm:grid-cols-4 text-gray-400 items-center hover:bg-gray-700 rounded-lg cursor-pointer"
          >
            <p className="text-white flex items-center gap-4">
              <b className="text-gray-300">{index + 1}</b>
              <img
                className="w-10 h-10 object-cover rounded"
                src={item.image}
                alt={item.name}
              />
              <span className="truncate">{item.name}</span>
            </p>
            <div className="hidden sm:block"></div>
            <div className="hidden sm:block"></div>
            <p className="text-center text-[13px] sm:text-[15px]">{item.duration}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Albumpage;
