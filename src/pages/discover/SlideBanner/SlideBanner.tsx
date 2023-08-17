import styles from './SlideBanner.module.css'
import { Image } from 'antd'

import { getStorage } from 'firebase/storage';
import { getDatabase, ref as refDatabase, get } from 'firebase/database';
import { useState, useEffect } from 'react';

import { saveURL } from '../../../utils/SaveURL';

type URLProps = {
    name: string,
    path: string
}

const SlideBanner = () => {
    const db = getDatabase();
    const storage = getStorage();

    const [sBanner, setSBanner] = useState<Array<URLProps>>([]);

    // Get download link from realtime db
    const getURL = async (db: any) => {
        const snap = await get(refDatabase(db, 'discover/slider-banner'));
        setSBanner(snap.val());
    }

    const awaitData = async () => {
        await saveURL(db, storage, 'discover/slider-banner');
        await getURL(db);
    }

    useEffect(() => {
        awaitData();
    }, [])

    return (
        <div className={styles.discoverPage}>
            {sBanner.map((i, index) => {
                if (index === 1) {
                    return (
                        <div className={styles.contentCarousel} style={{ padding: "0 30px 0 30px" }} key={i.name}>
                            <Image
                                className={styles.bannerImage}
                                src={i.path || "/asset/error-image/error-rectangle.png"}
                                preview={false}
                            />
                        </div>
                    )
                } else return (
                    <div className={styles.contentCarousel} key={i.name}>
                        <Image
                            className={styles.bannerImage}
                            src={i.path || "/asset/error-image/errorRectangle.png"}
                            preview={false}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default SlideBanner