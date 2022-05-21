import React, { useState } from "react";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {addMessage} from "../../../features/messageSlice";
import {channel} from "diagnostics_channel";
import {shallowEqual} from "react-redux";

export default function MessageInput() {

    const dispatch = useAppDispatch();

    const channelObject : {name: string | null, id: string | null} = useAppSelector(state => {
        if (state.active.levelTwo in state.channel.entities) {
            return {
                name: state.channel.entities[state.active.levelTwo].name,
                id: state.channel.entities[state.active.levelTwo].id
            };
        } else {
            return {
                name: state.active.levelTwo,
                id: null,
            }
        }
    }, shallowEqual);

    return (
        <input type="search" placeholder={`Message #${channelObject.name}`}

               onKeyDown={(event : React.KeyboardEvent) => {
                   if (event.key === 'Enter'
                       && channelObject.name !== null
                       && channelObject.id !== null) {

                       const today = new Date();

                       const target = event.target as HTMLInputElement;

                       const messagePayload = {
                           channelId: channelObject.id,
                           userId: 1,
                           text: target.value,
                           year: today.getFullYear(),
                           month: today.getMonth(),
                           day: today.getDate(),
                           hour: today.getHours(),
                           minute: today.getMinutes(),
                           second: today.getSeconds()
                       };

                       dispatch(addMessage(messagePayload));
                   }
               }}



               className="bg-chat-box-search-bar-main m-5 rounded-lg px-5 text-white
               text-sm placeholder-inactive-light-grey focus:outline-0"/>
    )


}