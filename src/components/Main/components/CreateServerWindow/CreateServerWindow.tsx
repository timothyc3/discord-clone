import React from "react";
import {useAppSelector} from "../../../../hooks";

export default function CreateServerWindow() {

    // check if the button active on serverBar is "newServer", if so this will return true instead of false
    const createServerOpen = useAppSelector(state => state.active.levelOne === "New Server");

    return (
        <>
            {
                createServerOpen && <div className="bg-black/70 w-full h-full fixed flex justify-center items-center">
                    <div className="bg-white w-108 h-132 rounded-md flex flex-col px-4 py-6 items-center">
                        <h1 className="font-bold text-2xl">Create a server</h1>
                        <h2 className="text-channel-hover-grey font-light text-sm text-center px-4 mt-2">
                            Your server is where you and our friends hang out. Make yours and start talking
                        </h2>
                        <div className="w-full h-16 mt-3 rounded-md border border-light-grey/50 py-2 px-4 box-border
                        grid grid-cols-[50px_1fr_20px] items-center">
                            <div></div>
                            <h2 className="font-bold text-sm">Create My Own</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}