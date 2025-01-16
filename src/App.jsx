import React, { useContext } from 'react';
import Leftcolumn from './Components/Leftcolumn';
import Webplayer from './Components/Webplayer';
import Mainpage from './Components/Mainpage';
import { Webplayerdata } from './Index/Webplayerdata';

const App = () => {
  const { audioRef, song } = useContext(Webplayerdata);

  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex flex-col md:flex-row">
        {/* Left Column (Sidebar) */}
        <Leftcolumn className="w-full md:w-[27%]" />

        {/* Main Content Area */}
        <Mainpage className="w-full md:w-[73%]" />
      </div>
      
      {/* Webplayer */}
      <Webplayer className="w-full" />

      {/* Audio Player */}
      <audio ref={audioRef} src={song.song} preload="auto"></audio>
    </div>
  );
}

export default App;
