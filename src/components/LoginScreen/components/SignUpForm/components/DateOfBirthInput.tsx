import React, {useEffect, useRef, useState} from "react";
import {findAllByDisplayValue} from "@testing-library/react";

export default (props: {
    active: boolean
    setActive: () => void,
    options: string[],
    selection: string,
    selectionEdit: (input: string) => void
}) => {

    const [input, setInput] = useState("");

    // turns true only once when the user mouse overs the selection
    const [userEnteredSelection, setUserEnteredSelection] = useState<boolean>(false);

    const options = props.options.filter((day) => day.toString().includes(input));

    // renders the first option individually, so we can apply additional styling
    const firstOptionRendered = <div
        key={options[0]}
        className={`h-8 flex items-center pl-2 rounded hover:bg-server-bar-black/60 
        ${userEnteredSelection ? "" : "bg-server-bar-black/60"}`}
        onMouseEnter={handleUserEnterSelection}
    >
        {options[0]}
    </div>

    // renders all options after the first one
    const optionsRendered = options.slice(1).map(day => <div
            key={day}
            className="h-8 flex items-center pl-2 rounded hover:bg-server-bar-black/60"
            onMouseEnter={handleUserEnterSelection}
        >
            {day}
        </div>);

    // called when the user first enters the selection list
    function handleUserEnterSelection() {
        if(!userEnteredSelection) {
            setUserEnteredSelection(true);
        }
    }

    function handleInput(event: React.KeyboardEvent<HTMLElement>) {

        if (event.key === "Enter") {
            event.preventDefault();
            handleInputExit();
        }
        else {
            const input = event.target as HTMLElement;
            setInput(input.innerHTML);
        }
    }

    //  called inside handleInput when 'enter' key is pressed or onBlur
    function handleInputExit() {
        console.log("exit detected")
    }




    return (
        <div
            className="h-full flex items-center text-sm bg-sub-black
                            border-[1px] border-server-bar-black/60 relative"
        >
            <div className="peer pl-2 w-full absolute focus:outline-none bg-transparent whitespace-nowrap
                             overflow-hidden"
                 onKeyDown={handleInput}
                 onBlur={handleInputExit}
                 contentEditable
            ></div>
            <div className={`pl-2 pointer-events-none
                            ${props.selection === "" ? "text-inactive-light-grey" : "text-white"}`}>
                {input === "" ? "Select" : ""}
            </div>
            <div className={`rounded border-[1px] border-server-bar-black/60 absolute w-full max-h-52
                             overflow-y-scroll overflow-x-hidden bottom-9 bg-sub-black first:bg-blue
                             ${props.active ? "" : "hidden peer-focus:block"}`}>
                {firstOptionRendered}
                {optionsRendered}
            </div>
            <svg xmlns="http://www.w3.org/2000/svg"
                 className="h-4 w-4 absolute right-0 top-2/4 -translate-y-2/4 -translate-x-2/4
                             pointer-events-none"
                 fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
            </svg>
        </div>
    )
}