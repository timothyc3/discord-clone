import React from "react";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {shallowEqual} from "react-redux";
import {updateLevelOne} from "../../../features/activeSlice";

export default function DiscoverButton() {

    const active : boolean = useAppSelector(state => state.active.levelOne === "Discover", shallowEqual);

    const dispatch = useAppDispatch();

    // update active server in redux store
    function updateActive() {
        dispatch(updateLevelOne("Discover"));
    }

    function handleClick() {
        updateActive();
    }

    return (
        <i className={`ri-compass-3-fill server-button text-2xl
            flex justify-center items-center ${active ? 'selected bg-bright-green text-white' : ''}`}
           aria-label="discover" role="button" onClick={handleClick}
        ></i>
    );
}