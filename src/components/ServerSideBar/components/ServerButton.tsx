import React from "react";
import {ServerBarProp, Server} from "../../../types";

export default function ServerButton(props: {
    selected: boolean, name: string
    handleButtonClick: ServerBarProp["handleButtonClick"]
}) {

    return (
        <div className={`server-button flex justify-center items-center font-extrabold
        ${props.selected ? 'selected' : ''}`}
             role="button"
             aria-label={props.name}
             onClick={props.handleButtonClick}>
            {props.name.charAt(0).toUpperCase()}
        </div>
    )
}