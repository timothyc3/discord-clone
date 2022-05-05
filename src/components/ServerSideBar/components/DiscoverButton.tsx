import React from "react";
import {ServerBarProp} from "../../../types";

export default function DiscoverButton(props: {selected: ServerBarProp["selected"],
    handleButtonClick: ServerBarProp["handleButtonClick"]}) {

    return (
            <i className={`ri-compass-3-fill server-button text-2xl
            flex justify-center items-center ${props.selected[0].active ? 'selected bg-bright-green text-white' : ''}`}
               aria-label="discover" role="button"
            onClick={props.handleButtonClick}
            ></i>
    );
}