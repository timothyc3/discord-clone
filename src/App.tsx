import './App.css';
import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import ServerSidebar from "./components/ServerSideBar/ServerSidebar";
import ChannelSidebar from "./components/ChannelSideBar/ChannelSidebar";
import Content from "./components/Content/Content";
// for remixicons usages
import 'remixicon/fonts/remixicon.css';
import {fetchServerData} from "./features/serverSlice";
import {useAppDispatch} from "./hooks";


export default function App() {

    const dispatch = useAppDispatch()
    dispatch(fetchServerData());

    return (
        <div className="h-screen w-screen grid grid-cols-[75px_240px_1fr] font-body">
            <ServerSidebar />

        </div>
    );
}
