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
            { active && <div className="bg-black/70 w-full h-full fixed flex justify-center items-center"
                             onClick={onExit}>
                <div
                    className="relative bg-white w-108 h-auto rounded-md"
                    onClick={(event) => event.stopPropagation()}
                >
                    <input
                        className="w-[90%] h-8 mt-2 pl-2 text-sm text-server-bar-black rounded bg-light-grey/40 outline-0
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