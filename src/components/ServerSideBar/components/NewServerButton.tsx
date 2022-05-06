import React from "react";

export default function NewServerButton(props: {
    active: boolean,
    handleButtonClick: (event: any) => void
}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             className={`server-button p-3 ${props.active ? 'selected bg-bright-green text-white' : ''}`}
             onClick={props.handleButtonClick} aria-label="newServer" role="button"
             fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/>
        </svg>
    );
}