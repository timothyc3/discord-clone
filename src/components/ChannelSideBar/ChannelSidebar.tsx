import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {fetchChannelData} from "../../features/channelSlice";
import Header from "./components/Header";
// import {Channel} from "../../types";
// import {useAppSelector} from "../../hooks";
// import {shallowEqual} from "react-redux";
import ChannelButton from "./components/ChannelButton";
import {shallowEqual} from "react-redux";

export default function ChannelSidebar() {

    // get all the channels of that server
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchChannelData());
    }, []);

    let renderedChannelButtons;

    // get the channels of the selected server
    const channels : string[] = useAppSelector(state => {
        // if a server button is active
        if (state.active.levelOne in state.server.entities) {
            return state.server.entities[state.active.levelOne].channelIds
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