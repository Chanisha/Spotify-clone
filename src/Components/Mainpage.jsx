import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import Albumpage from './Albumpage';

const Mainpage = () => {
  return (
    <div className="bg-[#121212] text-white px-4 py-5 rounded w-full overflow-auto lg:w-[85%] lg:ml-0">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/album/:id" element={<Albumpage />} />
      </Routes>
    </div>
  );
};

export default Mainpage;
