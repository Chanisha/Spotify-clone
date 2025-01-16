import React from 'react';
import Navbar from './Navbar';
import { Albums } from '../assets/assets';
import Albumsongs from './Albumsongs';
import { songs } from '../assets/assets';
import Songsarea from './Songsarea';

const Homepage = () => {
  return (
    <>
      <Navbar />
      {/* Albums Section */}
      <div className="mb-8">
        <h1 className="font-bold text-[20px] mb-4">Albums</h1>
        <div className="flex overflow-auto gap-4">
          {Albums.map((item, index) => (
            <Albumsongs key={index} name={item.name} id={item.id} image={item.image} />
          ))}
        </div>
      </div>

      {/* Top Songs Section */}
      <div className="mb-8">
        <h1 className="font-bold text-[20px] mb-4">Top Songs</h1>
        <div className="flex overflow-auto gap-4">
          {songs.map((item, index) => (
            <Songsarea key={index} name={item.name} id={item.id} image={item.image} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Homepage;
