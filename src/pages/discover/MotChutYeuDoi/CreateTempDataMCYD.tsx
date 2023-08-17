import {set, get, ref as refDatabase, getDatabase} from 'firebase/database';

export const createTempDataMCYD = async () => {
    const db = getDatabase();

    const check = await get(refDatabase(db, `discover/mot-chut-yeu-doi`))

    if (!check.exists()) {
        await set(refDatabase(db, `discover/mot-chut-yeu-doi`), [{
            id: "Temp Data",
            title: "Temp Data",
            media: {
                image: {    
                    name: "Temp Data",
                    path: "Temp Data"
                },
                audio: {
                    name: "Temp Data",
                    path: "Temp Data"
                }
            },
        }]);
    }
}