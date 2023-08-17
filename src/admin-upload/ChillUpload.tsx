import { useState } from "react";

import { getDatabase, get, ref as refDatabase, set } from "firebase/database";
import { getStorage, ref as refStorage, getDownloadURL, uploadBytes } from "firebase/storage";
import shortid from 'shortid';

const ChillUpload = () => {
    ////////////////////////// Image
    const [imageFile, setImage] = useState({
        name: "",
        type: "",
        size: ""
    })

    const handleImage = (e: any) => {
        const file = e.target.files[0];

        if (file) {
            setImage(file)
        }
    }

    ////////////////////////// Text
    const [input, setInput] = useState({
        title: "",
        id: ""
    })

    const handleText = (e: any) => {
        const idPath = shortid.generate(); //////////////////////////
;
        setInput({
            title: e.target.value,
            id: idPath
        })
    }
    
    ////////////////////////// audio
    const [audioFile, setAudio] = useState({
        name: "",
        type: "",
        size: ""
    })

    const handleAudio = (e: any) => {
        const file = e.target.files[0];

        if (file) {
            setAudio(file)
        }
    }

    ///////////// FIREBASE

    const db = getDatabase();
    const storage = getStorage();

    const handleUploadFile = async (e: any) => {
        e.preventDefault();

        const imageRef = refStorage(storage, `discover/chill/${input.id}/image/${imageFile.name}`);
        const audioRef = refStorage(storage, `discover/chill/${input.id}/audio/${audioFile.name}`);

        const imageBlob = new Blob([imageFile as unknown as BlobPart], { type: imageFile.type })
        const audioBlob = new Blob([audioFile as unknown as BlobPart], { type: audioFile.type })

        const uploadImageTask = uploadBytes(imageRef, imageBlob);
        const uploadaudioTask = uploadBytes(audioRef, audioBlob);

        const idPath = input.id;

        // Get old data
        const pushData = await get(refDatabase(db, `discover/chill`))

        await Promise.all([uploadImageTask, uploadaudioTask])
            .then(async (res) => {
                console.log(input.id + ' Upload completed');

                const imagePath = res[0].ref.fullPath;
                const audioPath = res[1].ref.fullPath;

                const imageDown = await getDownloadURL(refStorage(storage, imagePath));
                const audioDown = await getDownloadURL(refStorage(storage, audioPath));

                // Push data mới vào
                let data = pushData.val()

                if (!data) data = [];

                data.push({
                    id: idPath,
                    title: input.title,
                    media: {
                        image: {
                            name: res[0].ref.name,
                            path: imageDown
                        },
                        audio: {
                            name: res[1].ref.name,
                            path: audioDown
                        }
                    },
                    time: Date.now(),
                })

                set(refDatabase(db, `discover/chill`), data);
            })
            .catch((error) => {
                console.log('Error:', error);
            });

        // Reset input
        setImage({
            name: "",
            type: "",
            size: ""
        })
        setAudio({
            name: "",
            type: "",
            size: ""
        })
        setInput({
            title: "",
            id: ""
        })
    }

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <p style={{ color: 'white' }}>audio</p>
                <input type="file" name="audio" style={{ color: 'white' }} onChange={handleAudio} required />
            </div>

            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <p style={{ color: 'white' }}>image</p>
                <input type="file" name="image" style={{ color: 'white' }} onChange={handleImage} required />
            </div>

            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <p style={{ color: 'white' }}>Title</p>
                <input type="text" value={input.title} name="name" onChange={handleText} required />
            </div>

            <form onSubmit={handleUploadFile}>
                <button type="submit">Upload</button>
            </form>
        </>
    )
}

export default ChillUpload;