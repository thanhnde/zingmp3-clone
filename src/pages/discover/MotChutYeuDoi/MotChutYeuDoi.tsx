import DiscoverCategortyLayout from '../../../components/DiscoverCategoryLayout/DiscoverCategoryLayout';

import { getDatabase, ref as refDatabase, get } from 'firebase/database';
import { useEffect, useState } from 'react';
import { createTempDataMCYD } from './CreateTempDataMCYD';

type TypeMusicProps = {
    title: string,
    imageAlbum: string
}

const MotChutYeuDoi = () => {
    const db = getDatabase();
    createTempDataMCYD();

    const [data, setData] = useState<Array<TypeMusicProps>>([]);    

    const getURL = async (db: any) => {
        const snap = (await get(refDatabase(db, 'discover/mot-chut-yeu-doi')))
        setData(snap.val())
    }

    const awaitData = async () => {
        await getURL(db);
    }

    useEffect(() => {
        awaitData();
    }, [])

    let mcyd: Array<TypeMusicProps> = [];

    data.map((i: any) => {
        mcyd.push({
            title: i.title,
            imageAlbum: i.media.image.path
        })
    })

    mcyd.splice(0, 1);

    return (
        <DiscoverCategortyLayout data={mcyd} titleHeader='Một Chút Yêu Đời' height="250px" width="100%" numOfDisplay={5}/>
    )
}

export default MotChutYeuDoi;