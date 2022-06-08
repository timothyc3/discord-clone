import React, {useEffect} from "react";
import ChannelSidebar from "./components/ChannelSideBar/ChannelSidebar";
import ServerSidebar from "./components/ServerSideBar/ServerSidebar";
import Content from "./components/Content/Content";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {fetchMessageData} from "../../features/messageSlice";
import {fetchServerData} from "../../features/serverSlice";
import {fetchChannelData} from "../../features/channelSlice";
import {fetchUserData} from "../../features/userSlice";
import { getAuth, onAuthStateChanged} from "firebase/auth";
import {Channel} from "../../types";

export default function Main() {

    const dispatch = useAppDispatch();
    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const uid = user.uid;
                console.log('user id found', uid);
                dispatch(fetchServerData(uid));
                await dispatch(fetchChannelData(uid))
                    .then((result) => {
                        // the result.payload is a nested object of {...channelId: {Channel Object}}
                        const channelsObject = result.payload as { [key: string]: Channel }
                        // iterate over each channel and collect all messages
                        const initialArray = [] as string[];
                        const messageIds = Object.keys(channelsObject).reduce((prev: string[], current: string) => {
                            const currentChannelObject = channelsObject[current];
                            return [...prev, ...currentChannelObject.messageIds]
                        }, initialArray);
                        fetchMessageData(messageIds)
                    });

            }
        });
        dispatch(fetchUserData());
    }, []);

    const auth = getAuth()

    // listens to redux store for the channel that the user is interacting with, returning "null"
    // if the ui that the user is interacting with is not a valid channel
    // const activeChannel : string = useAppSelector(state => {
    //     if (state.active.levelTwo in state.channel.entities) {
    //         return state.channel.entities[state.active.levelTwo].name
    //     } else {
    //         return "null"
    //     }
    // })

    // useEffect( () => {
    //     console.log(activeChannel)
    // }, [activeChannel])

    return (
        <div className="h-screen w-screen grid grid-cols-[75px_240px_1fr] font-body">
            <ServerSidebar />
            <ChannelSidebar/>
            <Content />
        </div>
    )
}