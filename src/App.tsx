import './App.css';
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ServerSidebar from "./components/ServerSideBar/ServerSidebar";
import ChannelSidebar from "./components/ChannelSideBar/ChannelSidebar";
import Content from "./components/Content";
// for remixicons usages
import 'remixicon/fonts/remixicon.css';



export default function App() {

    return (
        <div className="h-screen w-screen grid grid-cols-[75px_240px_1fr] font-body">
            <ServerSidebar />
            <ChannelSidebar />
            <Content />
        </div>
    );
}
