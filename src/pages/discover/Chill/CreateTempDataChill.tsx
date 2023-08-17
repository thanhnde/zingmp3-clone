import {set, get, ref as refDatabase, getDatabase} from 'firebase/database';

export const createTempDataChill = async () => {
    const db = getDatabase();

    const check = await get(refDatabase(db, `discover/chill`))

    if (!check.exists()) {
        await set(refDatabase(db, `discover/chill`), [{
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