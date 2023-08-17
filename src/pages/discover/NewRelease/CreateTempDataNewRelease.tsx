import {set, get, ref as refDatabase, getDatabase} from 'firebase/database';

export const createTempData = async () => {
    const db = getDatabase();

    const check = await get(refDatabase(db, `discover/new-release`))

    if (!check.exists()) {
        await set(refDatabase(db, `discover/new-release/VN`), [{
            id: "Temp Data",
            name: "Temp Data",
            artist: "Temp Data",
            type: "Temp Data",
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
            time: Date.now(),
            premium: "Temp Data"
        }]);

        await set(refDatabase(db, `discover/new-release/QT`), [{
            id: "Temp Data",
            name: "Temp Data",
            artist: "Temp Data",
            type: "Temp Data",
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
            time: Date.now(),
            premium: "Temp Data"
        }]);
    }
}