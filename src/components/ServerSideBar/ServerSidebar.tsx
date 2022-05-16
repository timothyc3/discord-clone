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

    const servers : string[] = useAppSelector(state => state.server.ids, shallowEqual);

    const renderedServerButtons = servers.map((serverId: string ) => {
        return <ServerButton key={serverId}
                             serverId={serverId}/>;
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