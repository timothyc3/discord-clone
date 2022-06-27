import React from "react";
import {useAppSelector} from "../../../../../hooks";
import {shallowEqual} from "react-redux";

export default function Header(props: {
    handleHeaderClick: () => void,
    headerActive: boolean
}) {

    // retrieve the heading to use by seeing if it's a server ID present in server slice, if not just use
    // whatever is defined in the active slice. If it is return the name from that server object in server slice
    const heading: string = useAppSelector(state => {
        if (state.active.levelOne in state.server.entities) {
            return state.server.entities[state.active.levelOne].name
        } else {
            return state.active.levelOne
        }
    }, shallowEqual);

    return (
        <div className={`box-border ${props.headerActive ? "bg-channel-hover-grey" : "bg-sub-black"} 
            w-full h-full shadow-md flex items-center py-3 px-5
            hover:bg-channel-hover-grey duration-75 select-none`}
             onClick={props.handleHeaderClick}
        >
            <h2 className="font-semibold text-white font-body">
                {heading}
            </h2>
            {props.headerActive ?
                <svg xmlns="http://www.w3.org/2000/svg"
                     className="h-4 w-4 ml-auto text-light-grey"
                     fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-auto text-light-grey"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
            </svg>}
        </div>

    )
}