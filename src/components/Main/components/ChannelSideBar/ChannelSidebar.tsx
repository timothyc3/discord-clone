import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import Header from "./components/Header";
// import {Channel} from "../../types";
// import {useAppSelector} from "../../hooks";
// import {shallowEqual} from "react-redux";
import ChannelButton from "./components/ChannelButton";
import {shallowEqual} from "react-redux";
import {channel} from "diagnostics_channel";
import {listenChannel} from "../../../../firebase";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {updateChannels} from "../../../../features/channelSlice";
import {Channel} from "../../../../types";

export default function ChannelSidebar() {

    const auth = getAuth();
    const dispatch = useAppDispatch();

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                return listenChannel(
                    user.uid,
                    (payload: {[key: string]: Channel}) => {dispatch(updateChannels(payload))}
                    );
            }});
    }, [])

    let renderedChannelButtons;

    // get the channels of the selected server
    const channels : string[] = useAppSelector(state => {
        console.log("state", state.channel)
        // if a server button is active, return a list of channels that the user has access to
        if (state.active.levelOne in state.server.entities) {
            const result = state.server.entities[state.active.levelOne].channelIds
                // filter for channelIds that are in our redux store, as only ones that users have
                // access to are retrieved from firebase
                .filter(channelId => state.channel.ids.includes(channelId));
            console.log(result)
            return result
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