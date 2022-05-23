import './App.css';
import React, {useState, useEffect} from "react";
import ServerSidebar from "./components/ServerSideBar/ServerSidebar";
import ChannelSidebar from "./components/ChannelSideBar/ChannelSidebar";
import Content from "./components/Content/Content";
// for remixicons usages
import 'remixicon/fonts/remixicon.css';
import {useAppDispatch} from "./hooks";
import {fetchMessageData} from "./features/messageSlice";
import {fetchServerData} from "./features/serverSlice";
import {fetchChannelData} from "./features/channelSlice";
import {fetchUserData} from "./features/userSlice";
// import {addData} from "./firebase";


export default function App() {

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchMessageData());
        dispatch(fetchServerData());
        dispatch(fetchChannelData());
        dispatch(fetchUserData());
    }, []);

    const [loggedIn, setLoggedIn] = useState(true);

    return (
        <div className="h-screen w-screen grid grid-cols-[75px_240px_1fr] font-body">
            { loggedIn ? <>
                    <ServerSidebar />
                    <ChannelSidebar />
                    <Content />
                </> :
                <div>
                    not logged in
                </div>
            }

        </div>
    );
}
