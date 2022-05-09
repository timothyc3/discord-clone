import React from "react";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {shallowEqual} from "react-redux";
import {updateLevelTwo} from "../../../features/activeSlice";

export default function ChannelButton(props: {
    channelId: string
}) {

    const active : boolean = useAppSelector(state => state.active.levelTwo === props.channelId, shallowEqual);
    const channelName : string = useAppSelector(state => state.channel.entities.id[props.channelId].name, shallowEqual);

    const dispatch = useAppDispatch();

    // update active server in redux store
    function updateActive() {
        if(!active) {dispatch(updateLevelTwo(props.channelId));}
    }

    function handleClick() {
        updateActive();
    }

    return (
        <div className={`group w-full h-9 rounded-md p-2 flex items-center flex-grow-0
                        duration-75 ${active ? 
            'bg-channel-active-grey' : 'hover:bg-channel-hover-grey'}`}
             onClick={handleClick}
        >

            <svg xmlns="http://www.w3.org/2000/svg"
                 className="h-5 w-5 text-inactive-light-grey"
                 viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd"
                      d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z"
                      clipRule="evenodd"/>
            </svg>

            <h2 className={`ml-2 text-sm font-medium duration-75 select-none
            ${active ? 'text-white' : 'text-inactive-light-grey group-hover:text-light-grey'}`}>{channelName}</h2>

            <svg xmlns="http://www.w3.org/2000/svg"
                 className={`h-4 w-4 ml-auto text-light-grey group-hover:block duration-75
                        ${active ? 'block' : 'hidden'}`}
                 viewBox="0 0 20 20" fill="currentColor">
                <path
                    d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"/>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg"
                 className={`h-4 w-4 ml-1 text-light-grey group-hover:block duration-75
                        ${active ? 'block' : 'hidden'}`}
                 viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd"
                      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"/>
            </svg>
        </div>
    )
}