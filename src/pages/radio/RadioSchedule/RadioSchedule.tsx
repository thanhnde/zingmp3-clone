import ProgramSchedule from '../../../components/ProgramSchedule/ProgramSchedule';
import styles from './RadioSchedule.module.css'

const programSchedule = [
    {
        thumnail: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/4/c/8/1/4c8122132440e3d958845d746abf482d.jpg",
        name: "HOT 100 ĐỘ XONE"
    },
    {
        thumnail: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/6/5/6/d/656da41d575f1474dbdaa51b5004a96c.jpg",
        name: "F Film F Phê"
    },
    {
        thumnail: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/e/3/4/ee344bad4a9124b88906548837f3bce2.jpg",
        name: "Vietnam Innovators"
    }
]

const RadioSchedule = () => {
    return (
        <div style={{ marginTop: '50px', display: 'flex', flexDirection: "row", height: "300px" }}>
            <div className={styles.channelColumn}>
                <div style={{ height: "40px", width: "100%", textAlign: 'center', position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <p style={{ color: 'white' }}>Kênh</p>
                </div>

                <div className={styles.radioChannel}>
                    <div style={{ height: 'calc(100% /3)', width: "100%", display: 'flex', alignItems: "center", justifyContent: "center" }}>
                        <img style={{ height: "60px", width: "60px", borderRadius: "100%" }}
                            src="https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_webp/cover/8/3/0/e/830e49ef302bbe4fdfb04c9e26d42fbd.jpg" alt="" />
                    </div>

                    <div style={{ height: 'calc(100% /3)', width: "100%", display: 'flex', alignItems: "center", justifyContent: "center", margin: "8px 0 8px 0" }}>
                        <img style={{ height: "60px", width: "60px", borderRadius: "100%" }}
                            src="https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_webp/cover/6/8/0/3/6803b42e5444830b57a02d3f4d427301.jpg" alt="" />
                    </div>

                    <div style={{ height: 'calc(100% /3)', width: "100%", display: 'flex', alignItems: "center", justifyContent: "center" }}>
                        <img style={{ height: "60px", width: "60px", borderRadius: "100%" }}
                            src="https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_webp/cover/6/9/b/4/69b45afc9247c747299998860918edf0.jpg" alt="" />
                    </div>
                </div>
            </div>

            <div className={styles.programColumn}>
                <div style={{ height: "40px", color: "#66FFC4" }}>
                    {/* Timeline */}
                </div>

                <div className={styles.programContainer}>
                    {programSchedule.map((i, index) => {
                        if (index === 1) {
                            return <div style={{ margin: "8px 0 8px 0" }}>
                                <ProgramSchedule thumnail={i.thumnail} name={i.name} />
                            </div>
                        }
                        else {
                            return (
                                <ProgramSchedule thumnail={i.thumnail} name={i.name} />
                            )
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default RadioSchedule;