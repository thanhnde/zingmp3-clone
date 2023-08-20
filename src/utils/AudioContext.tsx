import { createContext } from "react";

type AudioContextType = {
    name: "",
    image: "",
    artist: "",
    audio: "",
    playing: false,
    handlePlay: () => (void),
    handlePlayPause: () => void
}

export const AudioContext = createContext<AudioContextType | undefined>(undefined);