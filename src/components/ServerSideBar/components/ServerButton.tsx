import React from "react";

export default function ServerButton(props: {
    active: string, name: string, serverId: string
    handleButtonClick: (event: any) => void
}) {

    return (
        <div className={`server-button flex justify-center items-center font-extrabold
        ${props.active ? 'selected' : ''}`}
             role="button"
             aria-label={props.serverId}
             onClick={props.handleButtonClick}>
            {props.name.charAt(0).toUpperCase()}
        </div>
    )
}