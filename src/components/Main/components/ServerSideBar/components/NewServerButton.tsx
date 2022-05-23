import React from "react";
import {useAppDispatch, useAppSelector} from "../../../../../hooks";
import {shallowEqual} from "react-redux";
import {updateLevelOne, updateLevelTwo} from "../../../../../features/activeSlice";

export default function NewServerButton() {

    const active : boolean = useAppSelector(state => state.active.levelOne === "New Server", shallowEqual);

    const dispatch = useAppDispatch();

    // update active server in redux store
    function updateActive() {
        dispatch(updateLevelOne("New Server"));
        dispatch(updateLevelTwo("New Server"));
    }

    function handleClick() {
        updateActive();
    }

    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             className={`server-button p-3 ${active ? 'selected bg-bright-green text-white' : ''}`}
             aria-label="newServer" role="button" onClick={handleClick}
             fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/>
        </svg>
    );
}