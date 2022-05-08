import React from "react";
// import ServerButton from "./components/ServerSideBar/components/ServerButton";
import HomeButton from "./components/HomeButton";
import NewServerButton from "./components/NewServerButton";
import DiscoverButton from "./components/DiscoverButton";
import ServerButton from "./components/ServerButton";
import {useAppSelector} from "../../hooks";
import {shallowEqual} from "react-redux";
import {Server} from "../../types";

export default function ServerSidebar() {

    const servers : { [key: string]: Server } = useAppSelector(state => state.server.entities.id, shallowEqual);

    const renderedServerButtons = Object.keys(servers).map((serverId: string ) => {
        const targetServerObject : Server = servers[serverId];
        return <ServerButton key={targetServerObject.id}
                             serverId={targetServerObject.id}
                             name={targetServerObject.name}/>;
    });





    return (
        <div className="bg-server-bar-black flex flex-col items-center pt-5">
            <HomeButton />
            <span className="bg-sub-black w-8 h-0.5 rounded-3xl my-3 after:content-[''] after:text-green"></span>
            {renderedServerButtons}
            <NewServerButton />
            <DiscoverButton />
        </div>
    );
}