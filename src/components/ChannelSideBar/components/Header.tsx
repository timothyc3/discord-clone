import React from "react";
import {useAppSelector} from "../../../hooks";
import {shallowEqual} from "react-redux";

export default function Header() {

    const serverId : string = useAppSelector(state => {
        if (state.active.levelOne in state.server.entities.id) {
            return state.server.entities.id[state.active.levelOne].name
        }
        else {
            return state.active.levelOne
        }
    }, shallowEqual);

    return (
        <div className="box-border w-full h-full shadow-md flex items-center py-3 px-5
            hover:bg-channel-hover-grey duration-75 select-none">
            <h2 className="font-semibold text-white font-body">
                {serverId}
            </h2>
            <svg xmlns="http://www.w3.org/2000/svg"
                 className="h-4 w-4 ml-auto text-light-grey"
                 fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
            </svg>
        </div>

    )
}