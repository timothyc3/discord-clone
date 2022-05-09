import React from "react";
import Header from "./components/Header";
import {Channel, Server} from "../../types";
import {useAppSelector} from "../../hooks";
import {shallowEqual} from "react-redux";
import ServerButton from "../ServerSideBar/components/ServerButton";
// import ChannelButton from "./components/ChannelSideBar/components/ChannelButton";


export default function ChannelSidebar() {

    const channels : { [key: string]: Channel } = useAppSelector(state => state.channel.entities.id, shallowEqual);

    const renderedChannelButtons = Object.keys(channels).map((channelId: string ) => {
        const targetChannelObject : Channel = channels[channelId];
        return <ServerButton key={targetChannelObject.id}
                             serverId={targetChannelObject.id}/>;
    });

    return (
        <div className="bg-sub-black grid grid-rows-[3rem_1fr_5rem] w-full h-full">
            <Header />
            <div className="w-full h-full py-5 px-2 flex flex-col gap-0.5">
            </div>


        </div>
    )
}