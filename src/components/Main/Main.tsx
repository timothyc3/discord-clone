import React, {useEffect} from "react";
import ChannelSidebar from "./components/ChannelSideBar/ChannelSidebar";
import ServerSidebar from "./components/ServerSideBar/ServerSidebar";
import Content from "./components/Content/Content";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {fetchServerData} from "../../features/serverSlice";
import {updateChannels} from "../../features/channelSlice";
import {fetchUserData} from "../../features/userSlice";
import {Channel} from "../../types";
import {listenChannel} from "../../firebase";
import CreateServerWindow from "./components/CreateServerWindow/CreateServerWindow";

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

    return (
        <div className="h-screen w-screen grid grid-cols-[75px_240px_1fr] font-body">
            <ServerSidebar/>
            <ChannelSidebar/>
            <Content/>
            <CreateServerWindow />
        </div>
    )
}