import React from "react";
import {useAppSelector} from "../../../../hooks";

export default function CreateServerWindow() {

    // check if the button active on serverBar is "newServer", if so this will return true instead of false
    const createServerOpen = useAppSelector(state => state.active.levelOne === "New Server");

    return (
        <>
            {
                createServerOpen && <div className="bg-black/70 w-full h-full fixed flex justify-center items-center">
                    <div className="bg-white w-108 h-132 rounded flex flex-col px-4 py-6 items-center">
                        <h1 className="font-bold text-2xl">Create a server</h1>
                        <h2 className="text-channel-hover-grey font-light text-sm text-center px-4 mt-2">
                            Your server is where you and our friends hang out. Make yours and start talking
                        </h2>
                    </div>
                </div>
            }
        </>
    )
}