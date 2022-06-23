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
                    <div className="bg-white w-108 h-132 rounded-md flex flex-col px-4 py-6">
                        <h1 className="font-bold text-2xl text-center">Create a server</h1>
                        <h2 className="text-channel-hover-grey font-light text-sm text-center px-4 mt-2 mb-2">
                            Your server is where you and our friends hang out. Make yours and start talking
                        </h2>
                        <CreateServerButton name="Make Your Own" />
                        <h3 className="text-xs font-bold text-channel-hover-grey/90 mt-4">START FROM A TEMPLATE</h3>
                        <CreateServerButton name="Gaming" />
                        <CreateServerButton name="School Club" />
                        <CreateServerButton name="Study Group" />
                    </div>
                </div>
            }
        </>
    )
}