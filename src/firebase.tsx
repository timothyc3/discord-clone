// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDocs, getFirestore, collection } from "firebase/firestore";
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

async function getServers():Promise<Array<Server>> {
    const docs = await getDocs(collection(firestore, "servers"));
    return docs.docs.map(server => {
        return {name: `${server.id}`, active: false, channels: []}
    });
}

async function getChannels(serverName: string):Promise<Array<Channel>> {
    const docs = await getDocs(collection(firestore, "servers", serverName, "channels"));
    return docs.docs.map(channel => {
        return {name: channel.id, messages: [], active: false}});
}

export {getServers, getChannels}