// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {arrayUnion, collection, doc, getDocs, getFirestore, setDoc, writeBatch, query, where, onSnapshot} from "firebase/firestore";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth"
import {Channel, ChannelPayload, Message, MessagePayload, Server, User} from "./types";
import {useAppDispatch} from "./hooks";
// import {updateChannels} from "./features/channelSlice";

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

const createNewUser = async (
    email: string,
    password: string,
    username: string,
    dayDOB: string,
    monthDOB: string,
    yearDOB: string
    ) => {
    console.log(email, password)
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user;
        console.log("sign up complete", user);

        const newUserData: User = {
            id: userCredential.user.uid,
            avatar: "",
            name: username,
            dayBirthday: dayDOB,
            monthBirthday: monthDOB,
            yearBirthday: yearDOB
        }

        async function addNewUserToFirebase(data: User) {
            try {
                // create an empty doc with randomly generated ID attribute that will be written to the servers collection
                const docRef = doc(firestore, "users", data.id);
                await setDoc(docRef, data);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }

        addNewUserToFirebase(newUserData);

    }).catch((e) => {
        console.error(e.code, e.message);
    })
}

const login = async (email: string, password: string) => {
    return await signInWithEmailAndPassword(auth, email, password)
}

const logOut = () => {
    signOut(auth)
        .then(() => {
        console.log("sign out successful")
    })
        .catch((e) => {
            console.error(e)
        });
}

// get information on the user. Returns user information if exists, if not signed in, return false.
const getCurrentUser = () => {
    const user = auth.currentUser
    if (user) {
        return user
    }
    else {return false}
}

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
};

const getMessageData = async (messageIdArray: string[]) => {

    try {
        let result : {[key: string] : Message}  = {};

        // we need to split messageIdArray into chunks of 10, to batch fetch from firebase within its limit
        const chunkSize = 10;
        for (let i = 0; i < messageIdArray.length; i += chunkSize) {
            const messageIdChunk = messageIdArray.slice(i, i + chunkSize);
            const snapshot = await getDocs(query(
                collection(firestore, "messages"),
                where( "id", "in", messageIdChunk)
            ));

            snapshot.forEach((doc) => {
                const data = doc.data() as Message
                result[data.id] = {...data, found: true}
            });
        }


        // create a data piece for every messageId that does not exist in firebase
        const NonExistingMessages = messageIdArray.filter(id => !Object.keys(result)
            .map(key => result[key].id).includes(id));

        NonExistingMessages.forEach(id => {
            result[id] = {
                id: "",
                userId: "",
                text: "",
                year: 0,
                month: 0,
                day: 0,
                hour: 0,
                minute: 0,
                second: 0,
                found: false
            } as Message
        })

        return result;
    } catch (error) {
        console.error('error happened')
        throw new Error("Error fetching server data");
    }
}

const listenChannel = (userId: string,
                       handler: (payload: {[key: string]: Channel}) => void) => {

    const q = query(collection(firestore, "channels"),
        where("userIds", "array-contains", userId));

    return onSnapshot(q, (querySnapshot) => {
        const result : any = [];
        querySnapshot.forEach((doc) => {
            result.push(doc.data())
        });
        handler(result)
    })

}

// adds documents in firebase for the new message.
async function writeMessage(data: MessagePayload) {
    const batch = writeBatch(firestore);

    // set target collections to addDoc to
    const docRefMessages = doc(collection(firestore, "messages"));
    const docRefChannels = doc(collection(firestore, "channels"), data.channelId);

    // split channelId from the messagePayload as it was only required for docRefChannels
    const {channelId, ...messagePayload} = data

    // add docRefMessages to the batch write
    batch.set(docRefMessages, {
        ...messagePayload,
        id: docRefMessages.id
    });

    // add docRefChannels to the batch write, adds the new messageID to the channel
    batch.update(docRefChannels, {messageIds: arrayUnion(docRefMessages.id)});

    await batch.commit()
}

async function createChannel(data: ChannelPayload) {
    const batch = writeBatch(firestore);

    const docRefChannels = doc(collection(firestore, "channels"));
    const docRefServer = doc(collection(firestore, "servers"), data.serverId);

    const {serverId, ...channelPayload} = data;

    batch.set(docRefChannels, {...channelPayload, id: docRefChannels.id});
    batch.update(docRefServer, {channelIds: arrayUnion(docRefChannels.id)});

    await batch.commit();
}

const getChannelData = async (uid: string) => {
    try {
        const snapshot = await getDocs(query(
            collection(firestore, "channels"),
            where("userIds", "array-contains", uid)
        ));
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

const getServerData = async (uid: string) => {
    try {
        const snapshot = await getDocs(query(
            collection(firestore, "servers"),
            where("userIds", "array-contains", uid)
        ));
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

export {addData, getServerData, getChannelData, getMessageData, getUserData,
    writeMessage, createNewUser, logOut, getCurrentUser, listenChannel, login}