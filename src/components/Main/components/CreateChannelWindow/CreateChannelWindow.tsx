import React from "react";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {toggleCreateChannel} from "../../../../features/activeSlice";

export default function CreateChannelWindow() {
    const dispatch = useAppDispatch();

    const active = useAppSelector(state => state.active.createChannel);

    // update active server in redux store
    function onExit() {
        dispatch(toggleCreateChannel(''));
    }

    return (
        <>
            { active && <div className="bg-black/70 w-full h-full fixed flex justify-center items-center"
                             onClick={onExit}>

            </div>
            }
        </>
    )
}