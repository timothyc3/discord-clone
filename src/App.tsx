import './App.css';
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ServerSidebar from "./components/ServerSideBar/ServerSidebar";
import ChannelSidebar from "./components/ChannelSideBar/ChannelSidebar";
import Content from "./components/Content";
// for remixicons usages
import 'remixicon/fonts/remixicon.css';
import store from "./store";
import {addServer} from "./features/serverSlice";



export default function App() {

    const [activeServer, setActiveServer] = useState<number | "discover" | "home" | "newServer">( "discover");


    return (
        <div className="h-screen w-screen grid grid-cols-[75px_240px_1fr] font-body">
            <ServerSidebar />
            <ChannelSidebar />
            <Content />
        </div>
    );
}
