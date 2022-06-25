import React from "react";

export default function CreateServerButton(props: {name: string, handleClick: (input: string) => void}) {
    return (
        <div className="w-full h-16 mt-3 rounded-md border border-light-grey py-2 px-4 box-border
                        grid grid-cols-[60px_1fr_20px] items-center hover:bg-inactive-light-grey/20
                        transition-all"
        onClick={() => {
            props.handleClick(props.name);
        }}>
            <div></div>
            <h2 className="font-bold text-sm pointer-events-none">{props.name}</h2>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-channel-hover-grey/80" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
        </div>
    )
}