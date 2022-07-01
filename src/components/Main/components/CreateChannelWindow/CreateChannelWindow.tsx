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
                    rounded-xl grid grid-rows-[auto_auto_auto_65px] overflow-y-hidden"
                    onClick={(event) => event.stopPropagation()}
                >
                    <h1 className="text-white font-semibold text-xl mb-4 m-4">Create Channel</h1>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         className="h-7 w-7 absolute right-3.5 top-3.5 text-inactive-light-grey hover:text-server-bar-black
                             transition-colors"
                         onClick={onExit}
                         fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                    <label htmlFor="serverName"
                           className="text-white font-bold text-xs mx-4"
                    >CHANNEL NAME</label>
                    <div className="relative mx-4 mt-2 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg"
                             className="h-5 w-5 absolute text-white top-1/2 left-3.5
                             -translate-x-1/2 -translate-y-1/2"
                             viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd"
                                  d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z"
                                  clipRule="evenodd"/>
                        </svg>
                        <input
                            className="w-full h-10 pl-7 text-sm text-white rounded bg-server-bar-black outline-0
                    self-center"
                            type="text" id="serverName" name="serverName" autoComplete="off"
                            placeholder={"new-channel"}
                            onChange={handleChannelNameTextInput}
                        />
                    </div>
                    <div className="grid grid-rows-[2fr_3fr] grid-cols-[auto_1fr_50px] mx-4
                    items-center gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg"
                             className="h-5 w-5 text-light-grey"
                             viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                        <h3 className="text-white text-sm font-semibold">Private Channel</h3>
                        <div className="flex items-center justify-center">
                            <label htmlFor="toggle" className="relative flex items-center cursor-pointer">
                                <input type="checkbox" id="toggle" className="sr-only peer"/>
                                <div
                                    className="h-6 bg-inactive-light-grey border-2 border-inactive-light-grey
                                    rounded-full w-11 peer-checked:bg-bright-green peer-checked:border-bright-green
                                    transition-all duration-300">
                                </div>
                                <div className="absolute top-0.5 left-0.5 bg-white border border-light-grey
                                    h-5 w-5 shadow-sm rounded-full peer-checked:translate-x-full
                                    transition-all duration-300">
                                </div>
                            </label>
                        </div>

                    </div>
                    <div className="bg-channel-hover-grey w-full h-[65px] px-4
                        flex items-center justify-between"
                    >
                        <button className={`rounded flex justify-center items-center text-white
                                text-sm font-semibold`}>
                            Create
                        </button>
                    </div>
                </div>

            </div>
            }
        </>
    )
}