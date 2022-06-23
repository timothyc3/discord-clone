import React from "react";
import {useAppSelector} from "../../../../hooks";
import CreateServerButton from "./components/CreateServerButton";

export default function CreateServerWindow() {

    // check if the button active on serverBar is "newServer", if so this will return true instead of false
    const createServerOpen = useAppSelector(state => state.active.levelOne === "New Server");

    return (
        <>
            {
                createServerOpen && <div className="bg-black/70 w-full h-full fixed flex justify-center items-center">
                    <div className="relative bg-white w-108 h-144 rounded-md pt-6 grid grid-rows-[auto_auto_1fr_auto]">
                        <svg xmlns="http://www.w3.org/2000/svg"
                             className="h-7 w-7 absolute right-4 top-4 text-inactive-light-grey"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <h1 className="font-bold text-2xl text-center">Create a server</h1>
                        <h2 className="text-channel-hover-grey font-light text-sm text-center px-4 mt-2 mb-2">
                            Your server is where you and our friends hang out. Make yours and start talking
                        </h2>
                        <div className="w-full h-full px-4 py-4 box-border overflow-y-scroll">
                            <CreateServerButton name="Make Your Own" />
                            <h3 className="text-xs font-bold text-channel-hover-grey/90 mt-6">START FROM A TEMPLATE</h3>
                            <CreateServerButton name="Gaming" />
                            <CreateServerButton name="School Club" />
                            <CreateServerButton name="Study Group" />
                            <CreateServerButton name="Friends" />
                            <CreateServerButton name="Artists & Creators" />
                            <CreateServerButton name="Local Community" />
                        </div>
                        <div className="bg-light-grey/30 w-full h-full p-4">
                            <h2 className="text-center font-bold text-lg">Already have an invite?</h2>
                            <div className="bg-channel-hover-grey/70 hover:bg-channel-hover-grey
                             w-full h-10 rounded flex justify-center items-center transition-all mt-2">
                                <h3 className="text-sm text-white">Join a server</h3>
                            </div>
                        </div>

                    </div>
                </div>
            }
        </>
    )
}