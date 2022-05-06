import React from "react";
import {ServerBarProp, ServerButtonObject} from "../../../types";

export default function ServerButton(props: {selected: ServerButtonObject,
    handleButtonClick: ServerBarProp["handleButtonClick"]}) {

    return (
        <div className={`server-button flex justify-center items-center font-extrabold
        ${props.selected.active ? 'selected' : ''}`}
             role="button"
             aria-label={props.selected.button}
             onClick={props.handleButtonClick}>
            {props.selected.button.charAt(0).toUpperCase()}
        </div>
    )
}