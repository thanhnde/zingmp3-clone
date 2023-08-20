import styles from './NewReleaseMusicCard.module.css';
import { Image, Space, Tag } from "antd";
import { NavLink } from 'react-router-dom';

import { MoreOutlined } from '@ant-design/icons';
import { useContext, useState } from 'react';
import PlayingMusic from '../../../../components/PlayingMusic/PlayingMusic';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { AudioContext } from '../../../../utils/AudioContext';

type MusicCardProps = {
    imageMusic: string,
    nameMusic: string,
    audio: string,
    artist: string,
    releaseTime: string,
    premium?: boolean,
    type: string,
}

type AudioContextType = {
    name: string,
    image: string,
    artist: string,
    audio: string,
    playing: boolean,
    handlePlay: () => void,
    handlePlayPause: () => void
}

const Music = ({ imageMusic, nameMusic, artist, releaseTime, premium, audio, type }: MusicCardProps) => {
    const [playing, setPlaying] = useState(false);
    const [showPlaying, setShowplaying] = useState(false);

    const [currentAudio, setCurrentAudio] = useState({
        name: "",
        artist: "",
        image: "",
        audio: "",
    })

    // const [currentAudio, setCurrentAudio] = useState<AudioContextType>();

    const handleClick = () => {
        setPlaying(true);
        setCurrentAudio({
            name: nameMusic,
            artist: artist,
            image: imageMusic,
            audio: audio,
        })

        // setCurrentAudio({
        //     name: nameMusic,
        //     artist: artist,
        //     image: imageMusic,
        //     audio: audio,
        //     playing: playing,
        //     handlePlay: handlePlay,
        //     handlePlayPause: handlePlayPause
        // })
        setShowplaying(true);
    }

    const handlePlay = () => {
        setPlaying(true)
    }

    const handlePlayPause = () => {
        setPlaying(!playing)
    }

    if (showPlaying) console.log(currentAudio.name + " is playing")
    if (playing === false) console.log(currentAudio.name + " is pause")

    return (
        <div className={styles.borderCard}>
            <div style={{ width: '60px', height: "60px", margin: "10px", position: 'relative' }}>
                <Image
                    src={imageMusic}
                    alt=""
                    preview={false}
                    height={60}
                    width={60}
                    className={styles.imageMusic}
                />

                <div className={styles.opacityButton}>
                    {playing
                        ? <FontAwesomeIcon onClick={handlePlayPause} icon={icon({ name: "pause", style: 'solid' })} style={{ fontSize: "20px", cursor: "pointer" }} />
                        : <FontAwesomeIcon onClick={() => {
                            handleClick();
                            handlePlay();
                        }} icon={icon({ name: "play", style: 'solid' })} style={{ fontSize: "20px", cursor: "pointer" }} />
                    }
                </div>
            </div>

            <div className={styles.textCard}>
                <Space size={4} direction="vertical">
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <p style={{ color: 'white', fontSize: '14px', marginRight: "10px" }}>{nameMusic}</p>
                        {premium && <Tag color="#E5AC1A"
                            bordered={false}
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: "56px",
                                height: "14px",
                                fontSize: "9px",
                                fontWeight: "bold",
                            }}
                        >PREMIUM</Tag>}
                    </div>
                    <NavLink
                        style={{ color: 'hsla(0,0%,100%,0.5)', fontSize: '12px', textDecoration: 'none' }}
                        to={`#`}
                    >{artist}</NavLink>
                    <p style={{ color: 'hsla(0,0%,100%,0.5)', fontSize: '12px' }}>{releaseTime}</p>
                </Space>
            </div>

            <div style={{ position: "relative", width: "100%" }}>
                {/* More button */}
                <div className={styles.opacityMoreButton}>
                    <div className={styles.moreButton}>
                        <MoreOutlined style={{ fontSize: "25px", transform: 'rotate(90deg)', cursor: "pointer" }} />
                    </div>
                </div>
            </div>

            {showPlaying &&
                <PlayingMusic
                    name={currentAudio?.name}
                    artist={currentAudio?.artist}
                    image={currentAudio?.image}
                    audio={currentAudio?.audio}
                    playing={playing}
                    handlePlay={handlePlay}
                    handlePlayPause={handlePlayPause}
                />}
        </div>
    )
}

export default Music;