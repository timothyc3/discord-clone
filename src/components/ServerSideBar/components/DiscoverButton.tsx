import React from "react";

export default function DiscoverButton(props: {
    active: boolean,
    handleButtonClick: (event: any) => void
}) {

    return (
        <i className={`ri-compass-3-fill server-button text-2xl
            flex justify-center items-center ${props.active ? 'selected bg-bright-green text-white' : ''}`}
           aria-label="discover" role="button"
           onClick={props.handleButtonClick}
        ></i>
    );
}