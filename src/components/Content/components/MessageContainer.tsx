import React from "react";
import {useAppSelector} from "../../../hooks";
import {shallowEqual} from "react-redux";
import MessageItem from "./MessageItem";

export default function MessageContainer() {

    const messageIds : string[] = useAppSelector(state => {
        if (state.active.levelTwo in state.channel.entities.id) {
            return state.channel.entities.id[state.active.levelTwo].messageIds;
        } else {
            return []
        }
    }, shallowEqual);

    const renderedMessages : JSX.Element[] = messageIds.map(messageId =>
        <MessageItem
            key={messageId}
            id={messageId}></MessageItem>
    )

    return (
        <div className="flex flex-col justify-end pr-2">
            {renderedMessages}
        </div>
    )
}