import { initializeApp } from "firebase/app";

export const connectFireBase = () => {
        return initializeApp({
                databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
                storageBucket: process.env.REACT_APP_FIREBASE_STORAGE
        })
};