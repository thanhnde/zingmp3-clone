import styles from './NewReleaseMusicCard.module.css';
import { Image, Space, Tag } from "antd";
import { NavLink } from 'react-router-dom';

import { CaretRightOutlined, MoreOutlined } from '@ant-design/icons';

type MusicCardProps = {
    imageMusic: string,
    nameMusic: string,
    artist: string,
    releaseTime: string,
    premium?: boolean,
    type: string
}

const Music = ({ imageMusic, nameMusic, artist, releaseTime, premium, type }: MusicCardProps) => {
    return (
        <div>
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
                        <div className={styles.playButton}>
                            <CaretRightOutlined style={{ fontSize: "25px" }} />
                        </div>
                    </div>
                </div>

                {/* More button */}
                <div className={styles.opacityMoreButton}>
                    <div className={styles.moreButton}>
                        <MoreOutlined style={{ fontSize: "25px", transform: 'rotate(90deg)' }} />
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
            </div>
        </div>
    )
}

export default Music;