import React from "react";

export default function DiscoverButton() {

    const active = false;

    return (
        <i className={`ri-compass-3-fill server-button text-2xl
            flex justify-center items-center ${active? 'selected bg-bright-green text-white' : ''}`}
           aria-label="discover" role="button"
        ></i>
    );
}