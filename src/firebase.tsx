// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getDocs,
    addDoc,
    setDoc,
    getFirestore,
    collection,
    doc,
}
    from "firebase/firestore";
import {Server, Channel} from "./types";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC4AIaye7x1BupsXqznyg89N5-yu_CYVGE",
    authDomain: "discord-clone-877ad.firebaseapp.com",
    projectId: "discord-clone-877ad",
    storageBucket: "discord-clone-877ad.appspot.com",
    messagingSenderId: "123734672611",
    appId: "1:123734672611:web:4bd1f812f89e7de481b1d6",
    measurementId: "G-Z8JK8QB1EP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);



const addData = async (data: any) => {
    try {
        // create an empty doc with randomly generated ID attribute that will be written to the servers collection
        const docRef = doc(collection(firestore, "servers"));
        await setDoc(docRef, {
            ...data,
            id: docRef.id,
        });

        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};

const getServerData = async () => {
    try {

    } catch (e) {
        console.error("Error fetching server data")
    }
}

export {addData}