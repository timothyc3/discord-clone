import React, {useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {toggleCreateChannel} from "../../../../features/activeSlice";

export default function CreateChannelWindow() {
    const dispatch = useAppDispatch();

    const active = useAppSelector(state => state.active.createChannel);

    const [channelName, setChannelName] = useState<string>('')

    // update active server in redux store
    function onExit() {
        dispatch(toggleCreateChannel(''));
    }

    function handleChannelNameTextInput(event: React.ChangeEvent<HTMLInputElement>) {
        setChannelName(event.target.value);
    }

    return (
        <>
            { active && <div className="bg-black/70 w-full h-full fixed flex justify-center items-center "
                             onClick={onExit}>
                <div
                    className="relative bg-channel-active-grey w-108 h-auto
                    rounded-xl grid grid-rows-[auto_auto_200px_65px] p-4"
                    onClick={(event) => event.stopPropagation()}
                >
                    <h1 className="text-white font-semibold text-xl">Create Channel</h1>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         className="h-7 w-7 absolute right-3.5 top-3.5 text-inactive-light-grey hover:text-server-bar-black
                             transition-colors"
                         onClick={onExit}
                         fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                    <input
                        className="w-full h-10 mt-2 pl-2 text-sm text-server-bar-black rounded bg-server-bar-black outline-0
                    self-center"
                        type="text" id="serverName" name="serverName" autoComplete="off"
                        placeholder={"new-channel"}
                        onChange={handleChannelNameTextInput}
                    />

                </div>

            </div>
            }
        </>
    )
}