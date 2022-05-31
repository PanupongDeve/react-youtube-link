import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

interface Props {
    url: string
}

const PlayButton = ({ url }: Props) => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);
  
    const toggle = () => setPlaying(!playing);
  
    useEffect(() => {
      playing ? audio.play() : audio.pause();
    }, [audio, playing]);
  
    useEffect(() => {
      audio.addEventListener("ended", () => setPlaying(false));
      return () => {
        audio.removeEventListener("ended", () => setPlaying(false));
      };
    });
  
    return (
      <FontAwesomeIcon
        className="icon-controller"
        icon={playing ? faPause : faPlay}
        onClick={toggle}
      />
    );
  };
  
  export default PlayButton;