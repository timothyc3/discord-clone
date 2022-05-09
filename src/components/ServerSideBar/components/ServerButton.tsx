import React from "react";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {updateLevelOne, updateLevelTwo} from "../../../features/activeSlice";
import {shallowEqual} from "react-redux";
import {store} from "../../../store";

export default function ServerButton(props: {
    serverId: string
}) {

    const active : boolean = useAppSelector(state => state.active.levelOne === props.serverId, shallowEqual);
    const serverName: string = useAppSelector(state => state.server.entities.id[props.serverId].name, shallowEqual);

    const dispatch = useAppDispatch();

    // update active server in redux store
    function updateActiveServer() {
         dispatch(updateLevelOne(props.serverId));
    }

    // set the active channel for the server (default to the first channel)
    function updateActiveChannel() {
        const firstChannel = store.getState().server.entities.id[props.serverId].channelIds[0];
        dispatch(updateLevelTwo(firstChannel));
    }

    function handleClick() {
        if(!active) {
            updateActiveServer();
            updateActiveChannel();
        }
    }

    return (
        <div className={`server-button flex justify-center items-center font-extrabold
        ${active ? 'selected' : ''}`}
             role="button"
             aria-label={props.serverId}
             onClick={handleClick}
             >
            {serverName.charAt(0).toUpperCase()}
        </div>
    )
}