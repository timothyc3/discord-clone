import React from "react";
import {useAppSelector} from "../../../../../hooks";
import { Message, User } from "../../../../../types";
import {shallowEqual} from "react-redux";

export default function MessageItem(props: {id: string}) {

    const messageLoaded = useAppSelector(state => props.id in state.messages.entities) as boolean;

    const messageContent: Message = useAppSelector(state => {
        return state.messages.entities[props.id]
    }, shallowEqual);

    function formatDate(date: Message) {
        return `${date.day}/${date.month}/${date.year}`
    }

    return (<>
            {messageLoaded ?
                <div className="w-full h-auto min-h-48 grid grid-cols-[70px_1fr] grid-rows-[auto_1fr]">
                    <div className="row-span-2">avatar</div>
                    <h5 className="h-full text-white text-sm font-semibold">{""}
                        <span className="pl-2 text-light-grey text-xs font-normal pt-10">{formatDate(messageContent)}</span>
                    </h5>
                    <p className="text-white text-sm">{messageContent.text}</p>

                </div>
                :
                <div className="w-full h-auto min-h-48 grid grid-cols-[70px_1fr] grid-rows-[auto_1fr]"></div>}
    </>
    )
}