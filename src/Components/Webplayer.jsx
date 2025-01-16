import React, { useContext } from 'react';
import assets from '../assets/assets';
import { Webplayerdata } from '../Index/Webplayerdata';

const Webplayer = () => {
  const { hrtag, barline, audiostatus, play, pause, song, time, previous, next, linesong } = useContext(Webplayerdata);
  console.log('audiostatus', audiostatus);

  return (
    <div className="bg-black flex flex-col md:flex-row justify-center md:justify-between items-center text-white px-4 py-2 md:h-[10%] gap-4 md:gap-6">
      <div className="flex items-center gap-4">
        <img
          className="w-12 h-12 md:w-14 md:h-14 rounded-md object-cover"
          src={song.image}
          alt=""
        />
        <h1 className="text-sm md:text-base font-semibold truncate max-w-[150px] md:max-w-[250px]">{song.name}</h1>
      </div>


      <div className="flex flex-col items-center gap-2 w-full md:w-auto">
        <div className="flex gap-6 justify-center">
          <img className="w-4 md:w-5 cursor-pointer" src={assets.shuffle_icon} alt="Shuffle" />
          <img
            onClick={previous}
            className="w-4 md:w-5 cursor-pointer"
            src={assets.back_button}
            alt="Previous"
          />
          {audiostatus ? (
            <img
              onClick={play}
              className="w-4 md:w-5 cursor-pointer"
              src={assets.play_button}
              alt="Play"
            />
          ) : (
            <img
              onClick={pause}
              className="w-4 md:w-5 cursor-pointer"
              src={assets.pause_button}
              alt="Pause"
            />
          )}
          <img
            onClick={next}
            className="w-4 md:w-5 cursor-pointer"
            src={assets.next_button}
            alt="Next"
          />
          <img className="w-4 md:w-5 cursor-pointer" src={assets.loop_icon} alt="Loop" />
        </div>
        <div className="flex items-center gap-3 w-full">
          <p className="text-xs md:text-sm">
            {time.currentTime.minute}:{time.currentTime.second}
          </p>
          <div
            onClick={linesong}
            ref={hrtag}
            className="bg-gray-300 cursor-pointer rounded-full w-full md:w-[40vw] max-w-[500px]"
          >
            <hr
              ref={barline}
              className="bg-green-600 border-none w-0 h-1 rounded-full"
            />
          </div>
          <p className="text-xs md:text-sm">
            {time.totalTime.minute}:{time.totalTime.second}
          </p>
        </div>
      </div>


      <div className="hidden lg:flex gap-2 items-center opacity-75">
        <img className="w-4 md:w-5" src={assets.plays} alt="Plays" />
        <img className="w-4 md:w-5" src={assets.mic} alt="Mic" />
        <img className="w-4 md:w-5" src={assets.queue} alt="Queue" />
        <img className="w-4 md:w-5" src={assets.speakers} alt="Speakers" />
        <img className="w-4 md:w-5" src={assets.volume} alt="Volume" />
        <div className="bg-slate-300 h-1 w-[50px] rounded"></div>
        <img className="w-4 md:w-5" src={assets.minimize} alt="Minimize" />
      </div>
    </div>
  );
};

export default Webplayer;
