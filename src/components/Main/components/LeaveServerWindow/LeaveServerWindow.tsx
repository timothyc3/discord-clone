import React from "react";
import {useAppSelector, useAppDispatch} from "../../../../hooks";
import {toggleLeaveServer} from "../../../../features/activeSlice";

export default function LeaveServerWindow() {

    const active = useAppSelector(state => state.active.leaveServer);
    const serverName = useAppSelector(state => {
        const activeServerId = state.active.levelOne
        if (activeServerId in state.server.entities) {
            return state.server.entities[activeServerId].name
        } else {
            return ""
        }

    })

    const dispatch = useAppDispatch();

    function onExit() {
        dispatch(toggleLeaveServer(''));
    }

    return (
        <>
            {active && <div className="bg-black/70 w-full h-full fixed flex justify-center items-center"
                            onClick={onExit}>
                <div className="relative w-108 h-52 rounded-md grid grid-rows-[6.5fr_3.5fr] overflow-hidden"
                     onClick={(event) => {
                         event.stopPropagation();
                     }}>
                    <div className="bg-sub-black pt-4 px-4 text-white">
                        <h2 className="font-bold text-lg">{`Leave '${serverName}'`}</h2>
                        <p className="text-sm pt-4">
                            Are you sure you want to leave <span className="font-semibold">{serverName}</span>?
                            You won't be able to re-join this server unless you are re-invited
                        </p>
                    </div>
                    <div className="bg-server-bar-black flex items-center justify-end gap-8 px-4">
                        <button className="text-sm text-white font-semibold"
                        onClick={onExit}>
                            Cancel
                        </button>
                        <button
                            className='hover:bg-red-800 bg-red-500 h-10 w-28 rounded flex justify-center
                            items-center text-white text-sm transition-all font-semibold'
                        >
                            Leave Server
                        </button>
                    </div>
                </div>
            </div>}
        </>
    )
}