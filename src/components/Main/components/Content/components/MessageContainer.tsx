import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../../../../hooks";
import {shallowEqual} from "react-redux";
import MessageItem from "./MessageItem";
import {fetchMessageData} from "../../../../../features/messageSlice";

export default function MessageContainer() {

    const dispatch = useAppDispatch();

    // listens to redux store for messageIds of the channel the user is interacting with
    const channelMessageIds : string[] = useAppSelector(state => {
        if (state.active.levelTwo in state.channel.entities) {
            // reverse array of ids so as we are using flex: column-reverse, use slice to keep
            // the state immutable.
            return state.channel.entities[state.active.levelTwo].messageIds.slice().reverse();
        } else {
            return []
        }
    }, shallowEqual);

    const loadedMessageIds: string[] = useAppSelector( state => {
        return state.messages.ids
    });

    const unloadedMessagedIds = channelMessageIds.filter(id => {
        return !loadedMessageIds.includes(id);
    });

    useEffect(() => {
        if (unloadedMessagedIds.length !== 0) {dispatch(fetchMessageData(unloadedMessagedIds));}
        }, [channelMessageIds]);

    const renderedMessages : JSX.Element[] = channelMessageIds.map(messageId =>
        <MessageItem
            key={messageId}
            id={messageId}></MessageItem>
    )

    return (
        <div className="flex flex-auto flex-col-reverse gap-y-2 overflow-x-hidden overflow-y-scroll">
            {renderedMessages}
        </div>
    )
}
