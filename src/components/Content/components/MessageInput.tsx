import React, { useState } from "react";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {addMessage} from "../../../features/messageSlice";
import {updateChannelMessages} from "../../../features/channelSlice";
import {channel} from "diagnostics_channel";
import {shallowEqual} from "react-redux";

export default function MessageInput() {

    const [message, setMessage] = useState<string>('');

    const dispatch = useAppDispatch();

    const currentMessageId : string =  useAppSelector(state =>
        state.messages.entities.allIds[state.messages.entities.allIds.length - 1], shallowEqual)

    const channelObject : {name: string | null, id: string | null} = useAppSelector(state => {
        if (state.active.levelTwo in state.channel.entities.id) {
            return {
                name: state.channel.entities.id[state.active.levelTwo].name,
                id: state.channel.entities.id[state.active.levelTwo].id
            };
        } else {
            return {
                name: null,
                id: null,
            }
        }
    }, shallowEqual);

    return (
        <input type="search" placeholder={`Message #${channelObject.name}`}
               onInput={(event : React.ChangeEvent<HTMLInputElement>) => {
                   const target: HTMLInputElement = event.target;
                   setMessage(target.value);
               } }

               onKeyDown={(event : React.KeyboardEvent<HTMLInputElement>) => {
                   if (event.key === 'Enter'
                       && channelObject.name !== null
                       && channelObject.id !== null) {

                       const today = new Date()

                       const messagePayload = {
                           userId: 1,
                           text: message,
                           year: today.getFullYear(),
                           month: today.getMonth(),
                           day: today.getDate(),
                           hour: today.getHours(),
                           minute: today.getMinutes(),
                           second: today.getSeconds()
                       };

                       // dispatch(addMessage(messagePayload));
                       //
                       // const channelUpdatePayload = {
                       //     channelId: parseInt(channelObject.id),
                       //     messageId: parseInt(currentMessageId)
                       // };
                       //
                       // dispatch(updateChannelMessages(channelUpdatePayload));
                   }
               }}



               className="bg-chat-box-search-bar-main m-5 rounded-lg px-5 text-white
               text-sm placeholder-inactive-light-grey focus:outline-0"/>
    )


}