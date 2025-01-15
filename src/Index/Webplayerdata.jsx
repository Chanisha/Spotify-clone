import { createContext, useEffect, useRef, useState } from "react";
import { songs } from "../assets/assets";

export const Webplayerdata = createContext();

const WebplayerdataProvider = (props) => {

    const audioRef = useRef();
    const hrtag = useRef();
    const barline = useRef();

    const [song, setsong] = useState(songs[1]);
    const [audiostatus, setaudiostatus] = useState(true);
    const [time, settime] = useState({
        currentTime: {
            second: 0,
            minute: 0
        },
        totalTime: {
            second: 0,
            minute: 0
        }
    })

    const play = () => {
        console.log('In play', audioRef.current);
        audioRef.current.play();
        setaudiostatus(false)
    }

    const pause = () => {
        console.log('In pause', audioRef.current);
        audioRef.current.pause();
        setaudiostatus(true)
    }

    const playonclick = async (id) => {
        await setsong(songs[id]);
        await audioRef.current.play();
        setaudiostatus(true);
    }

    const previous = async () => {
        if (song.id>0) {
            await setsong(songs[song.id-1]);
            await audioRef.current.play();
            setaudiostatus(true);
        }
    }

    const next = async () => {
        if (song.id<songs.length-1) {
            await setsong(songs[song.id+1]);
            await audioRef.current.play();
            setaudiostatus(true);
        }
    }

    const linesong = async (e) => {
        audioRef.current.currentTime = ((e.nativeEvent.offsetX / hrtag.current.offsetWidth)*audioRef.current.duration)
    }

    useEffect(() =>{ 
     setTimeout(() => {

        audioRef.current.ontimeupdate = () =>{
            barline.current.style.width = (Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))+"%"
            settime({
                currentTime: {
                    second: Math.floor(audioRef.current.currentTime % 60),
                    minute: Math.floor(audioRef.current.currentTime / 60)
                },
                totalTime: {
                    second: Math.floor(audioRef.current.duration % 60),
                    minute: Math.floor(audioRef.current.duration / 60)
                }
            })
        }

     }, 1000);
    }, [audioRef])

    const contextValue = {
        audioRef,
        hrtag,
        barline,
        song,setsong,
        audiostatus,setaudiostatus,
        time,settime,
        play,pause,
        playonclick,
        previous, next,
        linesong
    }

    return (
        <Webplayerdata.Provider value={contextValue}>
            {props.children}
        </Webplayerdata.Provider>
    )

}

export default WebplayerdataProvider;