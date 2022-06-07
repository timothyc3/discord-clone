import React from "react";
import { useAppSelector } from "../../../../hooks";
import Header from "./components/Header";
// import {Channel} from "../../types";
// import {useAppSelector} from "../../hooks";
// import {shallowEqual} from "react-redux";
import ChannelButton from "./components/ChannelButton";
import {shallowEqual} from "react-redux";
import {channel} from "diagnostics_channel";

export default function ChannelSidebar() {

    let renderedChannelButtons;

    // get the channels of the selected server
    const channels : string[] = useAppSelector(state => {
        // if a server button is active, return a list of channels that the user has access to
        if (state.active.levelOne in state.server.entities) {
            return state.server.entities[state.active.levelOne].channelIds
                // filter for channelIds that are in our redux store, as only ones that users have
                // access to are retrieved from firebase
                .filter(channelId => state.channel.ids.includes(channelId));
        }
        else return []
    }, shallowEqual);

    renderedChannelButtons = channels.map((channelId: string) => {
        return <ChannelButton
            key={channelId}
            channelId={channelId}/>;
    });


    return (
        <div className="bg-sub-black grid grid-rows-[3rem_1fr_5rem] w-full h-full">
            <Header />
            <div className="w-full h-full py-5 px-2 flex flex-col gap-0.5">
                {renderedChannelButtons}
            </div>


        </div>
    )
}