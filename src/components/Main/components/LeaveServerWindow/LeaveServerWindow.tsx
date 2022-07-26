import React from "react";
import {useAppSelector, useAppDispatch} from "../../../../hooks";
import {toggleLeaveServer} from "../../../../features/activeSlice";

export default function LeaveServerWindow() {

    const active = useAppSelector(state => state.active.leaveServer);

    const dispatch = useAppDispatch();

    function onExit() {
        dispatch(toggleLeaveServer(''));
    }

    return (
        <>
            {active && <div className="bg-black/70 w-full h-full fixed flex justify-center items-center"
                            onClick={onExit}>

            </div>}
        </>
    )
}