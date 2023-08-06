import styles from './SlideBanner.module.css'
import { Image } from 'antd'

import { getStorage } from 'firebase/storage';
import { getDatabase, ref as refDatabase, get } from 'firebase/database';
import { useState, useEffect } from 'react';

import { connectFireBase } from '../../../utils/FirebaseConfig';
import { saveURL } from '../../../utils/SaveURL';

type URLProps = {
    name: string,
    path: string
}

const SlideBanner = () => {
    connectFireBase();
    const db = getDatabase();
    const storage = getStorage();

    const [sBanner, setSBanner] = useState<Array<URLProps>>([]);

    // Get download link from realtime db
    const getURL = async (db: any) => {
        const snap = (await get(refDatabase(db, 'discover/slider-banner')))

        const imageUrl: Array<URLProps> = snap.val().map((item: URLProps) => {
            return { ...item };
        });

        setSBanner(imageUrl);
    }

    useEffect(() => {
        saveURL(db, storage, "discover/slider-banner");
        getURL(db);
    }, [])

    return (
        <div className={styles.discoverPage}>
            {sBanner.map((i, index) => {
                if (index === 1) {
                    return (
                        <div className={styles.contentCarousel} style={{ padding: "0 30px 0 30px" }}>
                            <Image
                                className={styles.bannerImage}
                                src={i.path || "/errorRectangle.png"}
                                preview={false}
                            />
                        </div>
                    )
                } else return (
                    <div className={styles.contentCarousel}>
                        <Image
                            className={styles.bannerImage}
                            src={i.path || "/errorRectangle.png"}
                            preview={false}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default SlideBanner