import styles from './PlayingMusic.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faWindowRestore, faVolumeHigh, faListUl } from '@fortawesome/free-solid-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

import { Progress, Slider, Drawer } from 'antd';
import ReactPlayer from 'react-player';
import { useState } from 'react';
import MoreOutlinedButton from '../MoreOutlinedButton/MoreOutlinedButton';
import HeartOutlinedButton from '../HeartOutlinedButton/HeartOutlinedButton';

type PlayingProps = {
    name: string,
    image: string,
    artist: string
    audio: string,
    isPlaying: boolean
}

const iconRightControl = [
    <div style={{
        height: "13px",
        width: "16px",
        border: "2px grey solid",
        borderRadius: "5px",
        borderColor: "rgb(131,128,136)",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <p style={{ fontSize: "8px", color: "rgb(131,128,136)", fontWeight: '900' }}>MV</p>
    </div>,

    <div style={{ height: "16px", width: "16px" }}>
        <FontAwesomeIcon icon={faMicrophone} />
    </div>,

    <div style={{ height: "16px", width: "16px" }}>
        <FontAwesomeIcon icon={faWindowRestore} style={{ color: "#ffffff", }} />
    </div>,

    <div style={{ height: "16px", width: "16px" }}>
        <FontAwesomeIcon icon={faVolumeHigh} style={{ color: "#ffffff", }} />
    </div>
]

const PlayingMusic = ({ name, image, artist, audio, isPlaying }: PlayingProps) => {
    const [playing, setPlaying] = useState(false);

    console.log(name)

    const handlePlay = () => {
        setPlaying(isPlaying);
    }

    const handlePlayPause = () => {
        setPlaying(!playing);
    }

    //////////// Drawer /////////////
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const closeDrawer = () => {
        setOpen(false);
    };

    return (
        <div className={styles.container}>
            {/* ///////////////// LEFT ///////////// */}
            <div style={{ width: "25%", paddingLeft: "20px" }}>
                <div className={styles.leftControl}>
                    <div style={{ height: '64px', width: '64px', borderRadius: '4px', overflow: 'hidden' }}>
                        <img style={{ height: '100%', width: "100%" }} src={image} alt="" />
                    </div>

                    <div className={styles.audioWrap}>
                        <div className={styles.audioName}>
                            <div>{name}</div>
                        </div>
                        <div className={styles.audioArtist}>{artist}</div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <HeartOutlinedButton height={36} width={36} />
                        <MoreOutlinedButton height={36} width={36} />
                    </div>
                </div>
            </div>

            {/* ///////////////// MID ///////////// */}
            <div style={{ width: "50%", maxWidth: "40vw" }}>
                <div className={styles.midControl}>
                    <div className={styles.midUp}>
                        <div style={{
                            width: "50px",
                            height: "50px",
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <div style={{ height: "16px", width: "16px" }}>
                                <FontAwesomeIcon icon={icon({ name: "shuffle", style: 'solid' })} style={{ width: "100%", height: "100%" }} />
                            </div>
                        </div>

                        <div style={{
                            width: "50px",
                            height: "50px",
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <div style={{ height: "16px", width: "16px" }}>
                                <FontAwesomeIcon icon={icon({ name: "backward-step", style: 'solid' })} style={{ width: "100%", height: "100%" }} />
                            </div>
                        </div>

                        <div style={{
                            width: "50px",
                            height: "50px",
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <div style={{ height: "40px", width: "40px" }} onClick={handlePlayPause}>
                                <FontAwesomeIcon icon={icon({ name: "circle-play", style: 'regular' })} style={{ width: "100%", height: "100%" }} />
                            </div>
                        </div>

                        <div style={{
                            width: "50px",
                            height: "50px",
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <div style={{ height: "16px", width: "16px" }}>
                                <FontAwesomeIcon icon={icon({ name: "forward-step", style: 'solid' })} style={{ width: "100%", height: "100%" }} />
                            </div>
                        </div>

                        <div style={{
                            width: "50px",
                            height: "50px",
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <div style={{ height: "16px", width: "16px" }}>
                                <FontAwesomeIcon icon={icon({ name: "repeat", style: 'solid' })} style={{ width: "100%", height: "100%" }} />
                            </div>
                        </div>
                    </div>

                    <div className={styles.midDown}>
                        <div style={{ fontSize: '12px', height: '100%', display: 'flex', alignItems: 'center', paddingRight: "10px" }}>
                            <div style={{ height: "20px", display: 'flex', alignItems: 'center', opacity: "0.5" }}>00:00</div>
                        </div>

                        <div style={{ width: "100%", height: "100%", display: 'flex', alignItems: 'center' }}>
                            <div style={{
                                height: "20px",
                                width: "100%"
                            }}>
                                <Progress
                                    strokeColor='white'
                                    trailColor='hsla(0,0%,100%,0.3'
                                    percent={50}
                                    size="small"
                                    showInfo={false}
                                />
                            </div>
                        </div>

                        <div style={{ fontSize: '12px', height: '100%', display: 'flex', alignItems: 'center', paddingLeft: "10px" }}>
                            <div style={{ height: "20px", display: 'flex', alignItems: 'center' }}>01:00</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ///////////////// RIGHT ///////////// */}
            <div style={{ width: "25%", paddingRight: "20px" }}>
                <div className={styles.rightControl}>
                    {iconRightControl.map((icon) => (
                        <div style={{
                            width: "36px",
                            height: "36px",
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            {icon}
                        </div>
                    ))}

                    <div>
                        <Slider defaultValue={100} style={{ width: "75px" }} tooltip={{ formatter: null }} />
                    </div>

                    <div style={{
                        width: "30px",
                        height: "1px",
                        backgroundColor: "hsla(0,0%,100%,0.1)",
                        transform: "rotate(90deg)"
                    }}></div>

                    <div className={styles.pendingList} onClick={showDrawer}>
                        <FontAwesomeIcon icon={faListUl} />
                    </div>
                </div>
            </div>

            <ReactPlayer
                width={0} height={0}
                url={audio}
                playing={playing}
                onPlay={handlePlay}
            />

            <Drawer className={styles.drawer} title="Basic Drawer" placement="right" onClose={closeDrawer} open={open}>
                <div className={styles.headerDrawer}>
                    <div className={styles.leftOuter}>
                        <div className={styles.leftInner}>
                            <div className={styles.leftLabel}>
                                <h6 className={styles.leftText}>Danh sách phát</h6>
                            </div>
                            <div className={styles.leftLabel}>
                                <h6 className={styles.leftText}>Nghe gần đây</h6>
                            </div>
                        </div>
                    </div>

                    <div style={{
                        width: "32px",
                        height: '32px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: "hsla(0,0%,100%,0.1)",
                        borderRadius: "999px",
                    }}>
                        <FontAwesomeIcon style={{ fontSize: 16 }} icon={icon({ name: "clock", style: "regular" })} />
                    </div>

                    <MoreOutlinedButton height={32} width={32} margin='0 8px 0 0' />
                </div>

                <div className={styles.currentAudio}>
                    <div style={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        alignItems: 'center',
                        borderRadius: "4px",
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            width: "40px", height: "40px",
                            position: 'relative'
                        }}>
                            <img className={styles.currentImage} style={{ height: "100%", width: "100%", borderRadius: '4px' }} src="https://firebasestorage.googleapis.com/v0/b/zmp3-clone.appspot.com/o/discover%2Fnew-release%2FifioAa4Ksz%2Fimage%2Fbdbfd3b2c6b28137a759b77b02e2fae8.webp?alt=media&token=163285c4-041b-4e1e-8953-e54f93359329" alt="" />

                            <div className={styles.opacityButton}>
                                <MoreOutlinedButton height={26} width={26}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    next
                </div>

                <div>
                    list
                </div>
            </Drawer>
        </div >
    )
}

export default PlayingMusic;