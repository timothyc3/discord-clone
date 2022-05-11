import React from "react";
import {useAppSelector} from "../../../hooks";

export default function MessageInput() {

    const heading : string = useAppSelector(state => {
        if (state.active.levelTwo in state.channel.entities.id) {
            return state.channel.entities.id[state.active.levelTwo].name
        } else {
            return state.active.levelTwo
        }
    });

    return (
        <input type="search" placeholder={`Message #${heading}`}
               className="bg-chat-box-search-bar-main m-5 rounded-lg px-5 text-white
               text-sm placeholder-inactive-light-grey focus:outline-0"/>
    )


}