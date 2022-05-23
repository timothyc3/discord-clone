import React from "react";
import {useAppSelector} from "../../../../../hooks";
import { Message, User } from "../../../../../types";
import {shallowEqual} from "react-redux";

export default function MessageItem(props: {id: string}) {

    const messageContent: Message = useAppSelector(state =>
    state.messages.entities[props.id], shallowEqual);

    const user : User = useAppSelector(state =>
        state.user.entities[messageContent.userId], shallowEqual);

    function formatDate(date: Message) {
        return `${date.day}/${date.month}/${date.year}`
    }

    return (
        <div className="w-full h-auto min-h-48 grid grid-cols-[70px_1fr] grid-rows-[auto_1fr]">
            <div className="row-span-2">avatar</div>
            <h5 className="h-full text-white text-sm font-semibold">{user.name}
                <span className="pl-2 text-light-grey text-xs font-normal pt-10">{formatDate(messageContent)}</span>
            </h5>
            <p className="text-white text-sm">{messageContent.text}</p>

        </div>
    )
}