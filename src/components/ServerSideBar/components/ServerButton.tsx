import React from "react";
import {ServerBarProp} from "../../../types";

export default function ServerButton(props: {server: string, selected: ServerBarProp["selected"],
    handleButtonClick: ServerBarProp["handleButtonClick"]}) {

    return (
        <div className={`server-button ${props.selected[0].active ? 'selected' : ''}`}
             aria-label={`${props.server}-server`}
             onClick={props.handleButtonClick}>
            {props.server}
        </div>
    )
}