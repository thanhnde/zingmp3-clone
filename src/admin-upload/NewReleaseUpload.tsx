import { useState } from "react";

import { Select } from 'antd';

import { getDatabase, get, ref as refDatabase, set } from "firebase/database";
import { getStorage, ref as refStorage, getDownloadURL, uploadBytes } from "firebase/storage";
import shortid from 'shortid';

const NewReleaseUpload = () => {
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
        name: "",
        artist: "",
        id: ""
    })

    const handleText = (e: any) => {
        const idPath = shortid.generate();

        setInput({
            ...input,
            [e.target.name]: e.target.value,
            id: idPath
        })
    }

    const [selectType, setSelectType] = useState("");

    const handleSelect = (value: string) => {
        setSelectType(value)
    }

    const [isChecked, setChecked] = useState(false);

    const handleCheckbox = (e: any) => {
        setChecked(e.target.checked);
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

        const imageRef = refStorage(storage, `discover/new-release/${input.id}/image/${imageFile.name}`);
        const audioRef = refStorage(storage, `discover/new-release/${input.id}/audio/${audioFile.name}`);

        const imageBlob = new Blob([imageFile as unknown as BlobPart], { type: imageFile.type })
        const audioBlob = new Blob([audioFile as unknown as BlobPart], { type: audioFile.type })

        const uploadImageTask = uploadBytes(imageRef, imageBlob);
        const uploadaudioTask = uploadBytes(audioRef, audioBlob);

        const idPath = input.id;

        // Get old data
        const pushData = await get(refDatabase(db, `discover/new-release`))

        // console.log(pushData.val())

        await Promise.all([uploadImageTask, uploadaudioTask])
            .then(async (res) => {
                console.log(input.id + ' Upload completed');

                const imagePath = res[0].ref.fullPath;
                const audioPath = res[1].ref.fullPath;

                const imageDown = await getDownloadURL(refStorage(storage, imagePath));
                const audioDown = await getDownloadURL(refStorage(storage, audioPath));

                // Push data mới vào
                let data = pushData.val()[selectType]

                if (!data) data = [];

                data.push({
                    id: idPath,
                    name: input.name,
                    artist: input.artist,
                    type: selectType,
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
                    premium: isChecked
                })

                if (selectType === "VN" || "QT") {
                    set(refDatabase(db, `discover/new-release/${selectType}`), data);
                }
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
            name: "",
            artist: "",
            id: ""
        })

        setSelectType("");

        // uploadImageTask.on(
        //     'state_changed',
        //     (data) => {
        //         const progress = (data.bytesTransferred / data.totalBytes) * 100;
        //         console.log('Upload is ' + progress + '% done');
        //         switch (data.state) {
        //             case 'paused':
        //                 console.log('Upload is paused');
        //                 break;
        //             case 'running':
        //                 console.log('Upload is running');
        //                 break;
        //         }
        //     },
        //     (error) => {
        //         switch (error.code) {
        //             case 'storage/unauthorized':
        //                 // User doesn't have permission to access the object
        //                 break;
        //             case 'storage/canceled':
        //                 // User canceled the upload
        //                 break;
        //             case 'storage/unknown':
        //                 // Unknown error occurred, inspect error.serverResponse
        //                 break;
        //         }
        //     },
        //     () => {
        //         // Upload completed successfully, get the download URL
        //         // getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        //         //     console.log('File available at', downloadURL);
        //         // });

        //         setInput({
        //             ...input,
        //             id: idPath
        //         })

        //         console.log('Upload completed');
        //     }
        // )
    }

    return (
        <div style={{
            width: "400px",
            height: "200px",
            backgroundColor: "hsla(0, 0%, 100%, 0.1)",
            borderRadius: "20px",
            padding: "30px",
            display: 'flex',
            flexDirection: 'row'
        }}>
            <div style={{ width: "70px", display: 'flex', flexDirection: "column", justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <p style={{ color: 'white' }}>Audio</p>
                <p style={{ color: 'white' }}>Image</p>
                <p style={{ color: 'white' }}>Name</p>
                <p style={{ color: 'white' }}>Artist</p>
                <p style={{ color: 'white' }}>Type</p>
                <p style={{ color: 'white' }}>Premium</p>
            </div>

            <div style={{ width: "280px", display: 'flex', flexDirection: "column", justifyContent: 'space-between', marginLeft: "20px", alignItems: 'flex-start' }}>
                <input type="file" name="audio" onChange={handleAudio} required
                    style={{ color: 'white' }}
                />
                <input
                    type="file" name="image" onChange={handleImage} required
                    style={{ color: 'white' }}
                />
                <input
                    type="text" value={input.name}
                    name="name" onChange={handleText} required
                    style={{borderRadius: "5px", border: 0, height: "20px"}}
                />
                <input type="text" value={input.artist} name="artist" onChange={handleText} required
                    style={{borderRadius: "5px", border: 0, height: "20px"}}
                />

                <Select
                    onChange={handleSelect}
                    options={[
                        { value: 'VN', label: 'VIỆT NAM' },
                        { value: 'QT', label: 'QUỐC TẾ' },
                    ]}
                    placeholder="Select type"
                    size="small"
                />
                <input type="checkbox" name="checkbox" id="checkbox" onChange={handleCheckbox}
                    style={{}} />
            </div>

            <div>
                <button type="submit" onSubmit={handleUploadFile}>Upload</button>
            </div>
        </div>
    )
}

export default NewReleaseUpload;