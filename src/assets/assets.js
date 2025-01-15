import Spotify_logo from './Spotify.png'
import library_icon from './library.jpeg'
import plus_sign from './plus.png'
import img1 from './img1.jpg'
import ziddidil from './ziddidil.mp3'
import shuffle_icon from './shuffle.png'
import back_button from './back.png'
import play_button from './play.png'
import next_button from './next.png'
import loop_icon from './loop.png'
import plays from './plays.png'
import mic from './mic.png'
import queue from './queue.png'
import speakers from './speakers.png'
import volume from './volume.png'
import miniplayer from './miniplayer.png'
import minimize from './minimize.png'
import search_icon from './search.png'
import img2 from './img2.jpeg'
import img3 from './img3.jpeg'
import img4 from './img4.jpeg'
import img5 from './img5.jpeg'
import img6 from './img6.jpg'
import img7 from './img7.jpeg'
import kamli from './kamli.mp3'
import APT from './APT.mp3'
import img8 from './img8.jpeg'
import img9 from './img9.jpeg'
import img10 from './img10.jpeg'
import heer from './heer.mp3'
import jogi from './jogi.mp3'
import clock_icon from './clock.png'
import arrow1 from './arrow1.png'
import arrow2 from './arrow2.png'
import pause_button from './pause.png'
export const assets =  {
  plays,
  clock_icon,
  arrow1,
  arrow2,
  mic,
  queue,
  speakers,
  volume,
  search_icon,
  miniplayer,
  minimize,
  Spotify_logo,
  library_icon,
  plus_sign,
  shuffle_icon,
  back_button,
  play_button,
  pause_button,
  next_button,
  loop_icon
}

export const songs = [
  {
    id:0,
    name: "Ziddi dil",
    image: img1,
    duration: "4:46",
    song: ziddidil
  },
  {
    id:1,
    name: "Kamli",
    image: img7,
    duration: "3:55",
    song: kamli
  },
  {
    id:2,
    name: "APT",
    image: img8,
    duration: "2:49",
    song: APT
  },
  {
    id:3,
    name: "Heer Aasmani",
    image: img9,
    duration: "3:24",
    song: heer
  },
  {
    id:4,
    name: "Jogi",
    image: img10,
    duration: "3:44",
    song: jogi
  }
]

export const Albums = [
  {
    id:0,
    name: "Trending songs",
    image: img2,
  },
 {
    id:1,
    name: "Top Songs of 2024",
    image: img3,
  },
  {
    id:2,
    name: "Guru Randhawa hits",
    image: img4,
  },
  {
    id:3,
    name: "Top English Songs",
    image: img5
  },
  {
    id:4,
    name: "Lana del rey coded",
    image: img6
  }
]

export default assets;

