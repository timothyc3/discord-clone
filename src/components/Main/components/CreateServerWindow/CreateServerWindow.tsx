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
                    <div className="bg-white w-108 h-144 rounded-md pt-6 grid grid-rows-[auto_auto_8fr_2fr]">
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
                        <div className="bg-light-grey/30 w-full h-full"></div>

                    </div>
                </div>
            }
        </>
    )
}