import React from 'react';
import { useNavigate } from 'react-router-dom';

const Albumsongs = ({ id, name, image }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/album/${id}`)}
      className="flex flex-col items-center px-4 p-3 cursor-pointer rounded hover:bg-gray-800 min-w-[120px] md:min-w-[160px] lg:min-w-[180px] max-w-[200px]"
    >
      <img
        className="rounded w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 object-cover"
        src={image}
        alt={name}
      />
      <p className="mb-1 mt-2 text-sm md:text-base lg:text-lg font-semibold text-center truncate">
        {name}
      </p>
    </div>
  );
};

export default Albumsongs;
