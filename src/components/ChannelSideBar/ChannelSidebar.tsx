import React from "react";
import Header from "./components/Header";
import {Channel} from "../../types";
import {useAppSelector} from "../../hooks";
import {shallowEqual} from "react-redux";
import ServerButton from "../ServerSideBar/components/ServerButton";
import ChannelButton from "./components/ChannelButton";
// import ChannelButton from "./components/ChannelSideBar/components/ChannelButton";


export default function ChannelSidebar() {

    // // get all the channels of that server
    // const channels : string[] | string = useAppSelector(state => {
    //
    //     if (state.active.levelOne in state.server.entities.id) {
    //         return state.server.ids[state.active.levelOne].channelIds
    //     } else {
    //         return state.active.levelOne
    //     }
    // }, shallowEqual);

    let renderedChannelButtons;

    // if (typeof channels !== "string") {
    //     renderedChannelButtons = channels.map((channelId: string) => {
    //         return <ChannelButton
    //             key={channelId}
    //             channelId={channelId}/>;
    //     });
    // }


    return (
        <div className="bg-sub-black grid grid-rows-[3rem_1fr_5rem] w-full h-full">
            <Header />
            <div className="w-full h-full py-5 px-2 flex flex-col gap-0.5">
                {renderedChannelButtons}
            </div>


        </div>
    )
}