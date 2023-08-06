import styles from './MusicCard.module.css'

import { Image } from "antd";
import { HeartOutlined, PlayCircleOutlined, MoreOutlined } from '@ant-design/icons'

type ChillProps = {
    title: string,
    imageAlbum: string,
}

const MusicCard = ({ title, imageAlbum }: ChillProps) => {
    return (
        <>
            {/* display: flex */}

            {/* {index === 0
                ?
                <div style={{ height: '180px', width: '180px', padding: "10px 10px 10px 0" }}>
                    <Image
                        src={imageAlbum}
                        preview={false}
                        style={{ borderRadius: '4px' }}
                    />
                    <p style={{ color: 'white' }}>{title}</p>
                </div>
                : index === 4
                    ?
                    <div style={{ height: '180px', width: '180px', padding: "10px 0 10px 10px" }}>
                        <Image
                            src={imageAlbum}
                            preview={false}
                            style={{ borderRadius: '4px' }}
                        />
                        <p style={{ color: 'white' }}>{title}</p>
                    </div>
                    :
                    <div style={{ height: '180px', width: '180px', padding: "10px" }}>
                        <Image
                            src={imageAlbum}
                            preview={false}
                            style={{ borderRadius: '4px' }}
                        />
                        <p style={{ color: 'white' }}>{title}</p>
                    </div>
            } */}
            <div className={styles.container}>
                <div style={{ position: 'relative', overflow: 'hidden', borderRadius: "5px" }}>
                    <Image
                        src={imageAlbum}
                        preview={false}
                        className={styles.imageMusic}
                    />
                    <div className={styles.opacityButton}>
                        <div style={{ color: 'white' }}><HeartOutlined style={{ fontSize: '20px' }} /></div>
                        <div style={{ color: 'white' }}><PlayCircleOutlined style={{ fontSize: '45px' }} /></div>
                        <div style={{ color: 'white' }}><MoreOutlined style={{ transform: 'rotate(90deg)', fontSize: '20px' }} /></div>
                    </div>
                </div>
                <div style={{ position: 'relative', fontSize: '14px', color: "hsla(0,0%,100%,0.5)", marginTop: '10px', width: 'auto' }}>
                    <p>{title}</p>
                </div>
            </div>
        </>
    )
}

export default MusicCard;