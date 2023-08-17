import { useEffect, useState } from "react";
import Music from "../NewReleaseMusicCard/NewReleaseMusicCard";
import styles from './NewReleaseDetail.module.css';

import { get, getDatabase, ref as refDatabase } from 'firebase/database';
import { createTempData } from "../CreateTempDataNewRelease";

type TypeMusicProps = {
    type: string
}

type NewReleaseProps = {
    name: string;
    artist: string;
    type: string;
    media: {
        image: {
            name: string,
            path: string
        },
        audio: {
            name: string,
            path: string
        }
    }
    time: string;
    premium?: undefined;
} | {
    name: string;
    artist: string;
    type: string;
    media: {
        image: {
            name: string,
            path: string
        },
        audio: {
            name: string,
            path: string
        }
    }
    time: string;
    premium: boolean;
}

const NewReleaseDetail = ({ type }: TypeMusicProps) => {
    const db = getDatabase();
    createTempData();

    const [data, setData] = useState<any>();

    const getURL = async (db: any) => {
        const snap = (await get(refDatabase(db, 'discover/new-release')))
        setData(snap.val())
    }

    const awaitData = async () => {
        await getURL(db);
    }

    useEffect(() => {
        awaitData();
    }, [])

    let newReleaseDetail: Array<NewReleaseProps> = [];

    if (data) {
        if (type === "ALL") {
            newReleaseDetail = Object.values(data).flat() as NewReleaseProps[]; // Set all
        }
        else if (type === "QT" || type === "VN") {
            newReleaseDetail = data[type] // Set follow type
        }
    }

    return (
        <div className={styles.gridMusic}>
            {Object.values(newReleaseDetail).map((item, index) => {
                if (index < 12 && item.name !== "Temp Data") {
                    return (
                        <div>
                            <Music
                                imageMusic={item.media.image.path}
                                nameMusic={item.name}
                                artist={item.artist}
                                audio={item.media.audio.path}
                                releaseTime={item.time}
                                type={item.type}
                                premium={item.premium}
                            />
                        </div>
                    )
                }
                else return <></>
            })}
        </div>
    )
}

export default NewReleaseDetail;