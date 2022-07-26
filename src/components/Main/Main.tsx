import React, {useEffect} from "react";
import ChannelSidebar from "./components/ChannelSideBar/ChannelSidebar";
import ServerSidebar from "./components/ServerSideBar/ServerSidebar";
import Content from "./components/Content/Content";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {fetchServerData, updateServers} from "../../features/serverSlice";
import {updateChannels} from "../../features/channelSlice";
import {fetchUserData} from "../../features/userSlice";
import {Channel, Server} from "../../types";
import {listenChannel, listenServer} from "../../firebase";
import CreateServerWindow from "./components/CreateServerWindow/CreateServerWindow";
import CreateChannelWindow from "./components/CreateChannelWindow/CreateChannelWindow";
import LeaveServerWindow from "./components/LeaveServerWindow/LeaveServerWindow";

export default function Main() {

    const dispatch = useAppDispatch();
    // get the user id from store once
    const uid: string = useAppSelector(state => state.login.uid, () => true);

    useEffect(() => {
        const unsubscribe = (uid: string) => {
            if (uid) {
                dispatch(fetchServerData(uid));
                dispatch(fetchUserData());

                listenServer(
                    uid,
                    (payload: { [key: string]: Server }) => {
                        dispatch(updateServers(payload))
                    }
                )

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
            <CreateChannelWindow />
            <LeaveServerWindow />
        </div>
    )
}