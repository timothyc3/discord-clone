import './App.css';
import React, {useEffect, useState} from "react";
// import {Server, Channel } from "./types"
import ServerSidebar from "./components/ServerSideBar/ServerSidebar";
import ChannelSidebar from "./components/ChannelSideBar/ChannelSidebar";
import Content from "./components/Content";
// import {getChannels, getServers} from "./firebase";

// for remixicons usages
import 'remixicon/fonts/remixicon.css';
import store from "./store";



export default function App() {
    console.log("here is the initialState:", store.getState())


    return (
        <div className="h-screen w-screen grid grid-cols-[75px_240px_1fr] font-body">
            <ServerSidebar />
            <ChannelSidebar />
            <Content />
        </div>
    );
}
