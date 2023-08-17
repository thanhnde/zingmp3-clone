import styles from './ProgramSchedule.module.css';

type ProgramProps = {
    thumnail: string,
    name: string
}

const ProgramSchedule = ({ thumnail, name }: ProgramProps) => {
    return (
        <div className={styles.programSche} >
            <div style={{ display: 'flex', alignItems: "center", justifyContent: "center" }}>
                <div style={{ height: "64px", width: "64px", borderRadius: '4px', overflow: 'hidden' }}>
                    <img style={{ height: "100%", width: "100%" }} src={thumnail} alt="" />
                </div>
            </div>

            <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                <p style={{ fontSize: 12, color: "white", marginBottom: "4px", fontWeight: 700 }}>{name}</p>
                <p style={{ fontSize: 12, color: "hsla(0,0%,100%,0.5)", fontWeight: 500, }} >00:00 - 01:00</p>
            </div>
        </div >
    )
}

export default ProgramSchedule