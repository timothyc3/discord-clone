import React from "react";
import {useAppSelector} from "../../../../../hooks";
import {shallowEqual} from "react-redux";
import {writeMessage} from "../../../../../firebase";

export default function MessageInput() {

    const userId = useAppSelector(state => state.login.uid)

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

               onKeyDown={(event : React.KeyboardEvent<HTMLInputElement>) => {
                   if (event.key === 'Enter'
                       && channelObject.name !== null
                       && channelObject.id !== null) {

                       const today = new Date();

                       const target = event.target as HTMLInputElement;

                       const messagePayload = {
                           channelId: channelObject.id,
                           userId: userId,
                           text: target.value,
                           year: today.getFullYear(),
                           month: today.getMonth(),
                           day: today.getDate(),
                           hour: today.getHours(),
                           minute: today.getMinutes(),
                           second: today.getSeconds()
                       };

                       writeMessage(messagePayload).then(() => {
                           console.log('done sending message to firebase')
                           target.value = "";
                       }).catch((e) => console.error(e));

                   }
               }}



               className="bg-chat-box-search-bar-main m-5 rounded-lg px-5 text-white
               text-sm placeholder-inactive-light-grey focus:outline-0"/>
    )


}