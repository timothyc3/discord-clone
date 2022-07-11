import React from "react"
import {ServerPayload} from "../../../../../types";

export default function ServerNamePhotoSelection(
    props: {
        updateActive: () => void,
        onServerGroupTypeSubmit: (input: string) => void
        onServerTemplateSubmit: (input: string) => void
        onServerNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void
        onServerCreation: () => void
        defaultServerName: string
    }
) {
    return (
        <div className="relative bg-white w-108 h-96 rounded-md pt-6 grid grid-rows-[auto_auto_200px_65px]"
             onClick={(event) => {
                 event.stopPropagation();
             }}>
            <svg xmlns="http://www.w3.org/2000/svg"
                 className="h-7 w-7 absolute right-3.5 top-3.5 text-inactive-light-grey hover:text-server-bar-black
                             transition-colors"
                 onClick={props.updateActive}
                 fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
            <h1 className="font-bold text-2xl text-center pointer-events-none">Customise your server</h1>
            <h2 className="text-channel-hover-grey font-light text-sm text-center px-4 mt-2 mb-2
                        pointer-events-none">
                Give your new server a personality with a name and an icon. You can always change it later.
            </h2>
            <div className="flex flex-col">
                <button className="w-20 h-20 border-channel-hover-grey flex flex-col items-center justify-center
                 self-center border-dashed border-2 rounded-full my-2 relative">
                    <div className="absolute top-0 right-0 bg-blue w-6 h-6 flex justify-center items-center
                    rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg"
                             className="h-3.5 w-3.5 text-white"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/>
                        </svg>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         className=" h-8 w-8 text-channel-hover-grey self-center"
                         viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd"
                              d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                              clipRule="evenodd"/>
                    </svg>
                    <h3 className="text-xs font-bold text-channel-hover-grey">
                        UPLOAD
                    </h3>

                </button>
                <label className="font-semibold self-center w-[90%] text-xs text-channel-hover-grey"
                       htmlFor="serverName">
                    SERVER NAME
                </label>
                <input
                    className="w-[90%] h-8 mt-2 pl-2 text-sm text-server-bar-black rounded bg-light-grey/40 outline-0
                    self-center"
                    type="text" id="serverName" name="serverName" autoComplete="off"
                    value={props.defaultServerName}
                    onChange={props.onServerNameChange}
                />
                <p className="self-center w-[90%] text-xs text-channel-active-grey mt-2">A cloned web app doesn't have terms and conditions...</p>

            </div>
            <div className="bg-light-grey/30 w-full h-full px-4 flex items-center justify-between">
                <button className="text-xs font-semibold"
                    onClick={() => {
                        props.onServerGroupTypeSubmit('');
                    }}>
                    Back
                </button>
                <button disabled={props.defaultServerName === ''}
                    className={`${props.defaultServerName === '' ? "bg-blue/50" :
                        "hover:bg-darker-blue bg-blue"} h-10 w-24 
                    rounded flex justify-center items-center text-white
                        text-sm font-semibold`}
                    onClick={props.onServerCreation}
                >
                    Create
                </button>
            </div>
        </div>
    )
}