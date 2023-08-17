import DiscoverCategoryLayout from '../../../components/DiscoverCategoryLayout/DiscoverCategoryLayout';
import { useState, useEffect } from 'react';

import { getDatabase, ref as refDatabase, get } from 'firebase/database';
import { createTempDataChill } from './CreateTempDataChill';

type TypeMusicProps = {
    title: string,
    imageAlbum: string
}

const Chill = () => {
    const db = getDatabase();
    createTempDataChill();

    const [data, setData] = useState<Array<TypeMusicProps>>([]);    

    const getURL = async (db: any) => {
        const snap = (await get(refDatabase(db, 'discover/chill')))
        setData(snap.val())
    }

    const awaitData = async () => {
        await getURL(db);
    }

    useEffect(() => {
        awaitData();
    }, [])

    let chill: Array<TypeMusicProps> = [];

    data.map((i: any) => {
        chill.push({
            title: i.title,
            imageAlbum: i.media.image.path
        })
    })

    chill.splice(0, 1)

    return (
        <DiscoverCategoryLayout data={chill} titleHeader='Chill' nameOfOtherButton='TẤT CẢ' height="250px" width="100%" numOfDisplay={5} />
    )
}

export default Chill;