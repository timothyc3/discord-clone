import React from "react";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {updateLevelOne} from "../../../features/activeSlice";
import {shallowEqual} from "react-redux";

export default function ServerButton(props: {
    serverId: string
}) {

    const active : boolean = useAppSelector(state => state.active.levelOne === props.serverId, shallowEqual);
    const serverName: string = useAppSelector(state => state.server.entities.id[props.serverId].name, shallowEqual);

    const dispatch = useAppDispatch();

    // update active server in redux store
    function updateActive() {
        if(!active) {dispatch(updateLevelOne(props.serverId));}
    }

    function handleClick() {
        updateActive();
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