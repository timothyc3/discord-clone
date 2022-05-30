import React, {useEffect, useRef, useState} from "react";
import {findAllByDisplayValue} from "@testing-library/react";

export default (props: {
    options: string[],
    selection: string,
    selectionEdit: (input: string) => void
}) => {

    const [input, setInput] = useState("");

    function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
        setInput(event.target.innerHTML);
    }

    const options = useRef(props.options);


        // .filter

    useEffect(() => {

        optionsRendered.current = props.options.filter((day) => day.toString().includes(input))
            .map(day => <div
                key={day}
                className="h-8 flex items-center pl-2 rounded hover:bg-server-bar-black/60"
            >
                {day}
            </div>);
    }, [input]);

    const optionsRendered = useRef(options.current.map(day => <div
        key={day}
        className="h-8 flex items-center pl-2 rounded hover:bg-server-bar-black/60"
    >
        {day}
    </div>));




    return (
        <div
            className="h-full flex items-center text-sm bg-sub-black
                            border-[1px] border-server-bar-black/60 relative"
        >
            <div className="peer pl-2 w-full absolute focus:outline-none bg-transparent whitespace-nowrap
                             overflow-hidden"
                 onInput={handleInput}
                 contentEditable
            ></div>
            <div className={`pl-2 pointer-events-none
                            ${props.selection === "" ? "text-inactive-light-grey" : "text-white"}`}>
                {input === "" ? "Select" : ""}
            </div>
            {/*hidden peer-focus:block*/}
            <div className="rounded border-[1px] border-server-bar-black/60 absolute w-full max-h-52
                             overflow-y-scroll overflow-x-hidden bottom-9 bg-sub-black first:bg-blue">
                {optionsRendered.current}
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