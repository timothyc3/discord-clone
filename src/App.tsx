import './App.css';
import React from "react";
import { useDispatch } from "react-redux";
import ServerSidebar from "./components/ServerSideBar/ServerSidebar";
import ChannelSidebar from "./components/ChannelSideBar/ChannelSidebar";
import Content from "./components/Content";
// for remixicons usages
import 'remixicon/fonts/remixicon.css';
import store from "./store";
import {addServer} from "./features/serverSlice";



export default function App() {

    store.subscribe(() => {console.log("here is the current state:", store.getState())})

    const dispatch = useDispatch();

    dispatch(addServer({name: "New Server btw", userId: 7}));

    return (
        <div className="h-screen w-screen grid grid-cols-[75px_240px_1fr] font-body">
            <ServerSidebar />
            <ChannelSidebar />
            <Content />
        </div>
    );
}
