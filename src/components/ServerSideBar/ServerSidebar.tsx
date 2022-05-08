import React from "react";
// import ServerButton from "./components/ServerSideBar/components/ServerButton";
import HomeButton from "./components/HomeButton";
import NewServerButton from "./components/NewServerButton";
import DiscoverButton from "./components/DiscoverButton";
import {useAppSelector} from "../../hooks";

export default function ServerSidebar(props : {
    active: string,
    handleButtonClick: (event: React.BaseSyntheticEvent) => void
}) {

    const servers = useAppSelector(state => state.server.entities);

    console.log('here are the servers')

    return (
        <div className="bg-server-bar-black flex flex-col items-center pt-5">
            <HomeButton />
            <span className="bg-sub-black w-8 h-0.5 rounded-3xl my-3 after:content-[''] after:text-green"></span>
            <NewServerButton />
            <DiscoverButton />
        </div>
    );
}