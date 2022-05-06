import React from "react";

type ServerBar = {serverButtons: Array<JSX.Element>, home: JSX.Element, discover: JSX.Element, newServer: JSX.Element }

export default function ServerSidebar(props: ServerBar) {

    return (
        <div className="bg-server-bar-black flex flex-col items-center pt-5">
            {props.home}
            <span className="bg-sub-black w-8 h-0.5 rounded-3xl my-3 after:content-[''] after:text-green"></span>
            {props.serverButtons}
            {props.newServer}
            {props.discover}
        </div>
    );
}