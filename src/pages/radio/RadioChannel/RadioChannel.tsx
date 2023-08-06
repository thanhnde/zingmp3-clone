import styles from './RadioChannel.module.css'

const RadioChannel = () => {
    return (
        <div style={{ marginTop: '50px', display: 'flex', flexDirection: "row" }}>
            <div className={styles.channelCol}>
                <p style={{ color: 'white', textAlign: 'center' }}>Kênh</p>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: "hsla(0,0%,100%,0.1)",
                    borderRadius: "8px 0 0 8px",
                }} >
                    <div style={{ height: '60px', width: "60px", margin: "10px 0 0 10px" }}>
                        <img style={{ height: "100%", width: "100%", borderRadius: "100%" }} src="https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_webp/cover/8/3/0/e/830e49ef302bbe4fdfb04c9e26d42fbd.jpg" alt="" />
                    </div>
                    <div style={{ height: '60px', width: "60px", margin: "10px 0 0 10px" }}>
                        <img style={{ height: "100%", width: "100%", borderRadius: "100%" }} src="https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_webp/cover/6/8/0/3/6803b42e5444830b57a02d3f4d427301.jpg" alt="" />
                    </div>
                    <div style={{ height: '60px', width: "60px", margin: "10px 0 0 10px" }}>
                        <img style={{ height: "100%", width: "100%", borderRadius: "100%" }} src="https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_webp/cover/6/9/b/4/69b45afc9247c747299998860918edf0.jpg" alt="" />
                    </div>
                </div>
            </div>

            <div className={styles.contentCol}>

            </div>
        </div>
    )
}

export default RadioChannel;