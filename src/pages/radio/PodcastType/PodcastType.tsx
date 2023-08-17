import { useEffect, useState } from "react";
import styles from './PodcastType.module.css';

import { connectFireBase } from "../../../utils/FirebaseConfig";
import { saveURL } from "../../../utils/SaveURL";
import { getStorage } from "firebase/storage";
import { ref as refDatabase, get, getDatabase } from 'firebase/database';

type URLProps = {
    name: string,
    path: string
}

const PodcastType = () => {
    connectFireBase();

    const db = getDatabase();
    const storage = getStorage();

    const [typePod, setTypePod] = useState<Array<URLProps>>([]);

    const getURL = async (db: any) => {
        const snap = (await get(refDatabase(db, 'radio/podcast-type')))

        const imageUrl: Array<URLProps> = snap.val().map((item: URLProps) => {
            return { ...item };
        });

        setTypePod(imageUrl);
    }

    const awaitData = async () => {
        await saveURL(db, storage, "radio/podcast-type");
        await getURL(db);
    }

    useEffect(() => {
        awaitData();
    }, [])

    return (
        <div style={{ marginTop: "50px", marginBottom: "50px" }}>
            <h3 style={{ color: 'white', paddingBottom: "16px", fontSize: '20px' }}>Thể Loại Podcast</h3>

            <div className={styles.container}>
                {typePod.map((i, index) => {
                    if (index === 0) {
                        return (
                            <div style={{ width: "calc(100% /5)", marginRight: "15px" }}>
                                <div className={styles.imageRadio}>
                                    <div className={styles.img}>
                                        <img src={i.path} style={{ width: "100%", height: "100%", borderRadius: "4px" }} />
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    if (index === 4) {
                        return (
                            <div style={{ width: "calc(100% /5)", marginLeft: "15px" }}>
                                <div className={styles.imageRadio}>
                                    <div className={styles.img}>
                                        <img src={i.path} style={{ width: "100%", height: "100%", borderRadius: "4px" }} />
                                    </div>
                                </div>
                            </div>
                        )
                    }

                    else return (
                        <div style={{ width: "calc(100% /5)", margin: "0 15px 0 15px" }}>
                            <div className={styles.imageRadio} >
                                <div className={styles.img}>
                                    <img src={i.path} style={{ width: "100%", height: "100%", borderRadius: "4px" }} />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PodcastType;