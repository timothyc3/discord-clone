import React from "react";
import CreateServerButton from "./CreateServerButton";

export default function ServerGroupTypeSelection(
    props: {
        updateActive: () => void,
        onServerGroupTypeSubmit: (input: string) => void
        onServerTemplateSubmit: (input: string) => void
    }) {

    const groupTypes = [
        'For me and my friends',
        'For a club or community'
    ]

    const groupTypeButtons = groupTypes.map(groupType => <CreateServerButton
        key={groupType}
        name={groupType}
        handleClick={props.onServerGroupTypeSubmit}
    />)

    return (
        <div className="relative bg-white w-108 h-auto rounded-md pt-6 grid grid-rows-[auto_auto_200px_65px]"
             onClick={(event) => {event.stopPropagation();}}>
            <svg xmlns="http://www.w3.org/2000/svg"
                 className="h-7 w-7 absolute right-3.5 top-3.5 text-inactive-light-grey hover:text-server-bar-black
                             transition-colors"
                 onClick={props.updateActive}
                 fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>

            <h1 className="font-bold text-xl text-center pointer-events-none">Tell us more about your server</h1>
            <h2 className="text-channel-hover-grey font-light text-sm text-center px-4 mt-2 mb-2
                        pointer-events-none">
                In order to help you with your setup, is your new server for just a few friends or a larger community?
            </h2>
            <div className="w-full h-full px-4 flex flex-col">
                {groupTypeButtons}
                <div className="text-xs text-center my-auto cursor-default">
                    Not sure? You can <span className="text-blue" onClick={() => props.onServerGroupTypeSubmit('skip')}>
                    skip this question
                </span> for now.
                </div>
            </div>
            <div className="bg-light-grey/30 w-full h-full p-4 flex items-center">
                <h3 className="text-xs font-semibold cursor-default"
                    onClick={() => {
                        props.onServerTemplateSubmit('');
                        console.log('called')
                    }}>
                    Back</h3>
            </div>
        </div>
    )
}