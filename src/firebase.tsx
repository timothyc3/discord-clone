// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getDocs,
    setDoc,
    getFirestore,
    collection,
    doc,
    writeBatch,
    arrayUnion,
}
    from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import {Server, Channel, Message, User} from "./types";

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
const auth = getAuth();



const addData = async (data: any) => {
    try {
        // create an empty doc with randomly generated ID attribute that will be written to the servers collection
        const docRef = doc(collection(firestore, "users"));
        await setDoc(docRef, {
            ...data,
            id: docRef.id,
        });

        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};

const getUserData = async () => {
    try {
        const snapshot = await getDocs(collection(firestore, "users"));
        let result : {[key: string] : User}  = {};
        snapshot.forEach((doc) => {
            const data = doc.data() as User
            result[data.id] = data
        });
        return result
    } catch (error) {
        console.error('error happened')
        throw new Error("Error fetching server data");
    }
}

const getMessageData = async () => {
    try {
        const snapshot = await getDocs(collection(firestore, "messages"));
        let result : {[key: string] : Message}  = {};
        snapshot.forEach((doc) => {
            const data = doc.data() as Message
            result[data.id] = data
        });
        return result
    } catch (error) {
        console.error('error happened')
        throw new Error("Error fetching server data");
    }
}
// called inside writeMessage, updates the respective channel's messageId, and adds a document
// in firebase for the new message.
async function updateMessageFirebase(data: any) {
    const batch = writeBatch(firestore);

    const docRefMessages = doc(collection(firestore, "messages"));
    const docRefChannels = doc(collection(firestore, "channels"), data.channelId);

    console.log(data);

    const {channelId, ...messagePayload} = data

    batch.set(docRefMessages, {
        ...messagePayload,
        id: docRefMessages.id
    });

    batch.update(docRefChannels, {messageIds: arrayUnion(docRefMessages.id)});

    await batch.commit()
}

const writeMessage = async (data: any) => {

    try {

        updateMessageFirebase(data).then(() =>
        {console.log('done sending message to firebase')});


    } catch (e) {
        console.error("Error writing message to firebase: ", e)
    }
}

const getChannelData = async () => {
    try {
        const snapshot = await getDocs(collection(firestore, "channels"));
        let result : {[key: string] : Channel}  = {};
        snapshot.forEach((doc) => {
            const data = doc.data() as Channel
            result[data.id] = data
        });
        return result
    } catch (error) {
        console.error('error happened')
        throw new Error("Error fetching server data");
    }
}

const getServerData = async () => {
    try {
        const snapshot = await getDocs(collection(firestore, "servers"));
        let result : {[key: string] : Server}  = {};
        snapshot.forEach((doc) => {
            const data = doc.data() as Server
            result[data.id] = data
        });
        return result
    } catch (error) {
        console.error('error happened')
        throw new Error("Error fetching server data");
    }
}

export {addData, getServerData, getChannelData, getMessageData, writeMessage, getUserData}