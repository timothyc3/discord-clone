import React from "react";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {updateLevelOne} from "../../../features/activeSlice";
import {shallowEqual} from "react-redux";

export default function ServerButton(props: {
    name: string, serverId: string
}) {

    const active : boolean = useAppSelector(state => state.active.levelOne === props.serverId, shallowEqual);

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
            {props.name.charAt(0).toUpperCase()}
        </div>
    )
}