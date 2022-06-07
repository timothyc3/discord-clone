import React, {useEffect, useRef, useState} from "react";

export default (props: {
    options: string[],
    selection: string,
    selectionEdit: (input: string) => void
}) => {

    const [input, setInput] = useState("");
    const [userEnteredSelection, setUserEnteredSelection] = useState<boolean | string>(false);

    function handleUserEnterSelection(input: string) {
        setUserEnteredSelection(input);
    }

    function handleInput(event: React.ChangeEvent<HTMLDivElement>) {

        const text = event.target as HTMLElement;
        setInput(text.innerHTML);
    }

    function handleEnterInput(event: React.KeyboardEvent<HTMLDivElement>) {
        if (event.key === "Enter") {
            event.preventDefault();
            setInput("");
        }
    }

    let options = props.options.filter((day) => day.toLowerCase().includes(input));

    // renders the first option individually, so we can apply additional styling
    const firstOptionRendered = <li
        key={options[0]}
        className={`h-8 flex items-center pl-2 rounded
        ${!userEnteredSelection || userEnteredSelection === options[0] ? "bg-server-bar-black/60" : ""}`}
        contentEditable={false}
        onMouseEnter={() => {handleUserEnterSelection(options[0])}}
        onMouseDown={() => {props.selectionEdit(options[0])}}
    >
        {options[0]}
    </li>

    // renders all options after the first one
    const optionsRendered = options.slice(1).map(option => <li
        key={option}
        className={`h-8 flex items-center pl-2 rounded
            ${userEnteredSelection === option ? "bg-server-bar-black/60" : ""}`}
        contentEditable={false}
        onMouseEnter={() => {handleUserEnterSelection(option)}}
        onMouseDown={() => {props.selectionEdit(option)}}
    >
        {option}
    </li>);

    return (
        <div
            className="h-full flex items-center text-sm bg-sub-black
                            border-[1px] border-server-bar-black/60 relative cursor-default"
        >
            <div className="absolute w-full h-full flex items-center ">
                <div className="peer pl-2 w-full focus:outline-none bg-transparent whitespace-nowrap
                             overflow-hidden"
                     onInput={handleInput}
                     onKeyDown={handleEnterInput}
                     contentEditable
                ></div>
                <ul className={`rounded border-[1px] border-server-bar-black/60 absolute w-full max-h-52
                             overflow-y-scroll overflow-x-hidden bottom-9 bg-sub-black first:bg-blue
                             invisible peer-focus:visible`}
                    contentEditable={false}>
                    {firstOptionRendered}
                    {optionsRendered}
                </ul>
            </div>
            <div className={`pl-2 pointer-events-none
                            ${props.selection === "" ? "text-inactive-light-grey" : "text-white"}`}>
                {input === "" && props.selection === "" ? "Select" : input === "" ? props.selection : ""}
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