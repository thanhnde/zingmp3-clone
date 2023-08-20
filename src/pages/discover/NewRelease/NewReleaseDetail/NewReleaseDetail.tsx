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

    // let newReleaseDetail: Array<NewReleaseProps> = [];
    const [listNewReleaseAll, setListNewReleaseAll] = useState<Array<NewReleaseProps>>([]);
    const [listNewReleaseVN, setListNewReleaseVN] = useState<Array<NewReleaseProps>>([]);
    const [listNewReleaseQT, setListNewReleaseQT] = useState<Array<NewReleaseProps>>([]);

    useEffect(() => {
        if (data) {
            if (type === "ALL") {
                const allData = Object.values(data).flat() as NewReleaseProps[];
                setListNewReleaseAll(allData.slice(0, 12));
            }
            if (type === "VN") {
                setListNewReleaseVN(data["VN"].slice(0, 12)) // Set follow type
            }
            if (type === "QT") {
                setListNewReleaseQT(data["QT"].slice(0, 12)) // Set follow type
            }
        }
    }, [data, type])

    return (
        <div className={styles.gridMusic}>
            {
                type === "ALL"
                    ? Object.values(listNewReleaseAll).map((item) => {
                        if (item.name !== "Temp Data") {
                            return (
                                <div key={item.name}>
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
                    })
                    : type === "VN"
                        ? Object.values(listNewReleaseVN).map((item) => {
                            if (item.name !== "Temp Data") {
                                return (
                                    <div key={item.name}>
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
                        })
                        : Object.values(listNewReleaseQT).map((item) => {
                            if (item.name !== "Temp Data") {
                                return (
                                    <div key={item.name}>
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
                        })
            }
        </div>
    )
}

export default NewReleaseDetail;