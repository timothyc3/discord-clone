import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../../../../hooks";
import {shallowEqual} from "react-redux";
import {toggleCreateChannel} from "../../../../../features/activeSlice";

export default function Header(props: {
    handleHeaderClick: () => void,
    falseHeaderActive: () => void,
    headerActive: boolean
}) {

    const dispatch = useAppDispatch();

    // retrieve the heading to use by seeing if it's a server ID present in server slice, if not just use
    // whatever is defined in the active slice. If it is return the name from that server object in server slice
    const heading: string = useAppSelector(state => {
        if (state.active.levelOne in state.server.entities) {
            return state.server.entities[state.active.levelOne].name
        } else {
            return state.active.levelOne
        }
    }, shallowEqual);

    // listen to redux active server, pass into useEffect to turn off headerActive if it changes
    const activeServer: string = useAppSelector(state => state.active.levelOne)

    useEffect(() => {props.falseHeaderActive()}, [activeServer])

    function handleCreateChannel() {
        dispatch(toggleCreateChannel(''))
    }

    return (
        <div className={`box-border ${props.headerActive ? "bg-channel-hover-grey" : "bg-sub-black"} 
            w-full h-full shadow-md flex items-center py-3 px-5 relative
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
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg"
                     className="h-4 w-4 ml-auto text-light-grey"
                     fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                </svg>}

            {props.headerActive &&
                <ul className="bg-darker-black absolute left-1/2 box-border -bottom-3
                w-11/12 -translate-x-1/2 translate-y-full rounded-md p-2  text-light-grey text-xs
                font-semibold"
                    onClick={(event) => {
                        event.stopPropagation()
                    }
                    }
                >
                    <li className="flex justify-between items-center p-2 rounded my-1
                    first:mt-0 last:mb-0 group transition-all hover:bg-darker-blue"
                        onClick={props.handleHeaderClick}
                    >
                        <h2 className="group-hover:text-white">Server Boost</h2>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             className="h-5 w-5 text-purple-500 group-hover:text-white"
                             fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </li>
                    <hr className="mx-1 h-[1px] border-none bg-channel-active-grey" />
                    <li className="flex justify-between items-center p-2 rounded my-1
                    first:mt-0 last:mb-0 group transition-all hover:bg-darker-blue"
                        onClick={props.handleHeaderClick}
                    >
                        <h2 className="text-blue group-hover:text-white">Invite People</h2>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             className="h-5 w-5 text-blue group-hover:text-white"
                             viewBox="0 0 20 20" fill="currentColor">
                            <path
                                d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"/>
                        </svg>
                    </li>
                    <li className="flex justify-between items-center p-2 rounded my-1
                    first:mt-0 last:mb-0 group transition-all hover:bg-darker-blue"
                        onClick={props.handleHeaderClick}
                    >
                        <h2 className="group-hover:text-white">Server Settings</h2>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             className="h-5 w-5 group-hover:text-white"
                             viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg>
                    </li>
                    <li className="flex justify-between items-center p-2 rounded my-1
                    first:mt-0 last:mb-0 group transition-all hover:bg-darker-blue"
                        onClick={() => {
                            props.handleHeaderClick();
                            handleCreateChannel()}}
                    >
                        <h2 className="group-hover:text-white">Create Channel</h2>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             className="h-5 w-5 group-hover:text-white"
                             viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                    </li>
                    <hr className="mx-1 h-[1px] border-none bg-channel-active-grey" />
                    <li className="flex justify-between items-center p-2 rounded my-1
                    first:mt-0 last:mb-0 group transition-all hover:bg-darker-blue"
                        onClick={props.handleHeaderClick}
                    >
                        <h2 className="group-hover:text-white">Notification Settings</h2>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             className="h-5 w-5 group-hover:text-white"
                             viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                        </svg>
                    </li>
                    <li className="flex justify-between items-center p-2 rounded my-1
                    first:mt-0 last:mb-0 group transition-all hover:bg-darker-blue"
                        onClick={props.handleHeaderClick}
                    >
                        <h2 className="group-hover:text-white">Privacy Settings</h2>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             className="h-5 w-5 group-hover:text-white"
                             viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                    </li>
                    <hr className="mx-1 h-[1px] border-none bg-channel-active-grey" />
                    <li className="flex justify-between items-center p-2 rounded my-1
                    first:mt-0 last:mb-0 group transition-all hover:bg-darker-blue"
                        onClick={props.handleHeaderClick}
                    >
                        <h2 className="group-hover:text-white">Edit Server Profile</h2>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             className="h-5 w-5 group-hover:text-white"
                             viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                    </li>
                    <li className="flex justify-between items-center p-2 rounded my-1
                    first:mt-0 last:mb-0 group transition-all hover:bg-darker-blue"
                        onClick={props.handleHeaderClick}
                    >
                        <h2 className="group-hover:text-white">Hide Muted Channels</h2>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             className="h-6 w-6 group-hover:text-white"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </li>
                    <hr className="mx-1 h-[1px] border-none bg-channel-active-grey" />
                    <li className="flex justify-between items-center p-2 rounded my-1
                    first:mt-0 last:mb-0 group transition-all hover:bg-red-500"
                        onClick={props.handleHeaderClick}
                    >
                        <h2 className="text-red-500 group-hover:text-white">Leave Server</h2>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             className="h-5 w-5 text-red-500 group-hover:text-white"
                             viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                        </svg>
                    </li>
                </ul>}
        </div>

    )
}