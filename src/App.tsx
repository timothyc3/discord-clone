import './App.css';
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ServerSidebar from "./components/ServerSideBar/ServerSidebar";
import ChannelSidebar from "./components/ChannelSideBar/ChannelSidebar";
import Content from "./components/Content";
// for remixicons usages
import 'remixicon/fonts/remixicon.css';



export default function App() {

    const [activeServer, setActiveServer] = useState<string>( "discover");

    // called when button on serverSideBar is clicked, so we can change the activeServer state.
    function handleActiveServerChange(event: React.BaseSyntheticEvent) {
        const newActiveServer : string = event.target.ariaLabel;

        setActiveServer(newActiveServer);
    }


    return (
        <div className="h-screen w-screen grid grid-cols-[75px_240px_1fr] font-body">
            <ServerSidebar active={activeServer} handleButtonClick={handleActiveServerChange} />
            <ChannelSidebar />
            <Content />
        </div>
    );
}
