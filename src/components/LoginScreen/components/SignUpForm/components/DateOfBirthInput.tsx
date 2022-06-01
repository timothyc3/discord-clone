import React, {useEffect, useRef, useState} from "react";
import {findAllByDisplayValue} from "@testing-library/react";

export default (props: {
    options: string[],
    selection: string,
    selectionEdit: (input: string) => void
}) => {

    const [input, setInput] = useState("");

    // turns true only once when the user mouse overs the selection
    const [userEnteredSelection, setUserEnteredSelection] = useState<boolean | string>(false);

    function handleUserEnterSelection(input: string) {
        setUserEnteredSelection(input);
    }

    function handleInput(event: React.ChangeEvent<HTMLDivElement>) {

        const text = event.target as HTMLElement;
        setInput(text.innerHTML);
        console.log('called', text.innerHTML)
    }

    function handleEnterInput(event: React.KeyboardEvent<HTMLDivElement>) {
        if (event.key === "Enter") {
            event.preventDefault();

        }
    }

    //  called inside handleInput when 'enter' key is pressed or onBlur
    function handleMouseExit(event: React.FocusEvent<HTMLDivElement>) {
        console.log("exit detected")
    }

    let options = props.options.filter((day) => day.toLowerCase().includes(input));

    // renders the first option individually, so we can apply additional styling
    const firstOptionRendered = <div
        key={options[0]}
        className={`h-8 flex items-center pl-2 rounded
        ${!userEnteredSelection || userEnteredSelection === options[0] ? "bg-server-bar-black/60" : ""}`}
        onMouseEnter={() => {handleUserEnterSelection(options[0])}}
    >
        {options[0]}
    </div>

    // renders all options after the first one
    const optionsRendered = options.slice(1).map(day => <div
        key={day}
            className={`h-8 flex items-center pl-2 rounded
            ${userEnteredSelection === day ? "bg-server-bar-black/60" : ""}`}
        onMouseEnter={() => {handleUserEnterSelection(day)}}
    >
        {day}
    </div>);

    useEffect(() => {console.log(userEnteredSelection)}, [userEnteredSelection])


    return (
        <div
            className="h-full flex items-center text-sm bg-sub-black
                            border-[1px] border-server-bar-black/60 relative"
        >
            <div className="peer pl-2 w-full absolute focus:outline-none bg-transparent whitespace-nowrap
                             overflow-hidden"
                 onInput={handleInput}
                 onKeyDown={handleEnterInput}
                 onBlur={handleMouseExit}
                 contentEditable
            ></div>
            <div className={`pl-2 pointer-events-none
                            ${props.selection === "" ? "text-inactive-light-grey" : "text-white"}`}>
                {input === "" ? "Select" : ""}
            </div>
            <div className={`rounded border-[1px] border-server-bar-black/60 absolute w-full max-h-52
                             overflow-y-scroll overflow-x-hidden bottom-9 bg-sub-black first:bg-blue
                             hidden peer-focus:block`}>
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