import { ref as refStorage, listAll, getDownloadURL } from 'firebase/storage';
import { set, ref as refDatabase } from 'firebase/database';

type URLProps = {
    name: string,
    path: string
}

export const saveURL = async (db: any, storage: any, pathDB: string) => {
    const save: Array<URLProps> = [];

    // Get url download of image and push to array
    const listRef = await listAll(refStorage(storage, pathDB))
    await Promise.all(listRef.items.map(async (i) => {
        const downUrl = await getDownloadURL(refStorage(storage, i.fullPath))
        save.push({ name: i.name, path: downUrl })
    }))

    // Save download link to realtime db
    set(refDatabase(db, pathDB), save);
}