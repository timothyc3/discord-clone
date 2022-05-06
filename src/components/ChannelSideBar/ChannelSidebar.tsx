import React from "react";
import {Server} from "../../types";


export default function ChannelSidebar(props: {
    server: Server
    channelButtons: Array<JSX.Element>
}) {

    return (
        <div className="bg-sub-black grid grid-rows-[3rem_1fr_5rem] w-full h-full">
            <div className="box-border w-full h-full shadow-md flex items-center py-3 px-5
                 hover:bg-channel-hover-grey duration-75 select-none">
                <h2 className="font-semibold text-white font-body">
                    {props.server.name}
                </h2>
                <svg xmlns="http://www.w3.org/2000/svg"
                     className="h-4 w-4 ml-auto text-light-grey"
                     fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                </svg>
            </div>
            <div className="w-full h-full py-5 px-2 flex flex-col gap-0.5">
                {props.channelButtons}
            </div>


        </div>
    )
}