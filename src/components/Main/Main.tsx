import React, {useEffect} from "react";
import ChannelSidebar from "./components/ChannelSideBar/ChannelSidebar";
import ServerSidebar from "./components/ServerSideBar/ServerSidebar";
import Content from "./components/Content/Content";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {fetchMessageData} from "../../features/messageSlice";
import {fetchServerData} from "../../features/serverSlice";
import {updateChannels} from "../../features/channelSlice";
import {fetchUserData} from "../../features/userSlice";
import {getAuth} from "firebase/auth";
import {Channel} from "../../types";
import {listenChannel} from "../../firebase";
import {useStore} from "react-redux";

export default function Main() {

    const dispatch = useAppDispatch();
    // get the user id from store once
    const uid: string = useAppSelector(state => state.login.uid, () => true);

    useEffect(() => {
        const unsubscribe = (uid: string) => {
            if (uid) {
                dispatch(fetchServerData(uid));
                dispatch(fetchUserData());

                listenChannel(
                    uid,
                    (payload: { [key: string]: Channel }) => {
                        dispatch(updateChannels(payload))
                    }
                );
            }
        };

        return unsubscribe(uid)
    }, []);


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
            <ServerSidebar/>
            <ChannelSidebar/>
            <Content/>
        </div>
    )
}