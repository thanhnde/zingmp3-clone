import styles from './RadioLiving.module.css';
import { Tag } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";

type TypeRadioLivingProps = {
    name: string,
    numOfListening: number,
    image: string,
    avatar: string
}

const RadioLiving = ({ name, numOfListening, image, avatar }: TypeRadioLivingProps) => {
    return (
        <div>
            <div className={styles.container}>
                <div style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    top: 0,
                    left: 0,
                    overflow: 'hidden',
                    borderRadius: "100%"
                }}>
                    <div style={{ borderRadius: "100%" }}>
                        <img src={image} alt="" className={styles.imageRadio} />
                    </div>
                </div>

                <div style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    top: 0,
                    left: 0,
                }}>
                    <div className={styles.opacityButton}>
                        <PlayCircleOutlined style={{ fontSize: '45px' }} />
                    </div>

                    <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: "50%",
                        transform: "translateX(-50%) translateY(50%)"
                    }}>
                        <Tag color="#FE0000" style={{
                            lineHeight: "16px",
                            textAlign: "center",
                            fontSize: "9px",
                            fontWeight: "bold"
                        }}>LIVE</Tag>
                    </div >

                    <div style={{ borderRadius: "100%" }}>
                        <img src={avatar} alt="" className={styles.imageAvatar} />
                    </div>
                </div>
            </div>

            <div style={{ width: '120px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '16px', color: 'white' }}>{name}</h3>
                <p style={{ fontSize: '12px', color: 'hsla(0,0%,100%,0.5)' }}>{numOfListening} đang nghe</p>
            </div>
        </div >
    )
}

export default RadioLiving;