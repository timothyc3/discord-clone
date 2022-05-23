import React, {useEffect} from "react";
import ChannelSidebar from "./components/ChannelSideBar/ChannelSidebar";
import ServerSidebar from "./components/ServerSideBar/ServerSidebar";
import Content from "./components/Content/Content";
import {useAppDispatch} from "../../hooks";
import {fetchMessageData} from "../../features/messageSlice";
import {fetchServerData} from "../../features/serverSlice";
import {fetchChannelData} from "../../features/channelSlice";
import {fetchUserData} from "../../features/userSlice";

export default function Main() {

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchMessageData());
        dispatch(fetchServerData());
        dispatch(fetchChannelData());
        dispatch(fetchUserData());
    }, []);

    return (
        <div className="h-screen w-screen grid grid-cols-[75px_240px_1fr] font-body">
            <ServerSidebar />
            <ChannelSidebar/>
            <Content />
        </div>
    )
}