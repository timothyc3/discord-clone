import React from "react";
import {useAppSelector} from "../../../hooks";
import { Message } from "../../../types";

export default function MessageItem(props: {id: string}) {

    const messageContent: Message = useAppSelector(state =>
    state.messages.entities.id[props.id])

    return (
        <div className="w-full h-auto min-h-48 grid grid-cols-[70px_1fr]">
            <div></div>
            <p className="text-white">{messageContent.text}</p>

        </div>
    )
}