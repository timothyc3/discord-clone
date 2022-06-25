import React from "react";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import CreateServerButton from "./components/CreateServerButton";
import {toggleCreateServer} from "../../../../features/activeSlice";
import ServerTemplateSelection from "./components/ServerTemplateSelection";

export default function CreateServerWindow() {

    // check if the button active on serverBar is "newServer", if so this will return true instead of false
    const active = useAppSelector(state => state.active.createServer);

    const dispatch = useAppDispatch();

    // update active server in redux store
    function updateActive() {
        dispatch(toggleCreateServer(''));
    }

    return (
        <>
            {
                active && <div className="bg-black/70 w-full h-full fixed flex justify-center items-center"
                    onClick={updateActive}
                >
                    <ServerTemplateSelection updateActive={updateActive}/>
                </div>
            }
        </>
    )
}