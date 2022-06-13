import React, {useEffect} from "react";
import ChannelSidebar from "./components/ChannelSideBar/ChannelSidebar";
import ServerSidebar from "./components/ServerSideBar/ServerSidebar";
import Content from "./components/Content/Content";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {fetchMessageData} from "../../features/messageSlice";
import {fetchServerData} from "../../features/serverSlice";
import {updateChannels} from "../../features/channelSlice";
import {fetchUserData} from "../../features/userSlice";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {Channel} from "../../types";
import {listenChannel} from "../../firebase";
import {shallowEqual} from "react-redux";

export default function Main() {

    const auth = getAuth()
    const dispatch = useAppDispatch();

    // const messageIds = useAppSelector(state => {
    //     const result: Array<Array<string>> = [];
    //     Object.keys(state.channel.entities).forEach(id => {
    //         result.push(state.channel.entities[id].messageIds);
    //     });
    //     console.log("new message", result)
    //     return result;
    // }, shallowEqual);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const uid = user.uid;
                dispatch(fetchServerData(uid));

                listenChannel(
                    user.uid,
                    (payload: { [key: string]: Channel }) => {
                        dispatch(updateChannels(payload))
                    }
                )



            }
        });
        dispatch(fetchUserData());

        return unsubscribe()
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