import './App.css';
import React, {useEffect, useState} from "react";
import {Server} from "./types"
import ChannelSidebar from "./components/ChannelSidebar";
import HomeButton from "./components/ServerSideBar/components/HomeButton";
import DiscoverButton from "./components/ServerSideBar/components/DiscoverButton";
import NewServerButton from "./components/ServerSideBar/components/NewServerButton";
import Content from "./components/Content";
import ServerSidebar from "./components/ServerSideBar/ServerSidebar";
import {getChannels, getServers} from "./firebase";

// for remixicons usages
import 'remixicon/fonts/remixicon.css';


export default function App() {

    // stores an object array that keeps a boolean for each server
    const [servers, setServers] = useState<Array<Server>>([]);

    // state that checks if home button is clicked or not
    const [home, setHome] = useState<boolean>(false);

    // state that checks if new server button is clicked
    const [newServer, setNewServer] = useState<boolean>(false);

    // state that checks if discover button is clicked
    const [discover, setDiscover] = useState<boolean>(false);

    function handleServerButtonClicked(event: React.BaseSyntheticEvent) {
        // find the object with that represents the button that the user clicked,
        // set that button's 'active' boolean to true and reset rest to false


        // set the special buttons to false
        setHome(false);
        setDiscover(false);
        setNewServer(false);

        const targetServerObject = servers.filter(server => server.name === event.target.ariaLabel)[0]

        // only load data from firestore if the server button is currently not active
        if (!targetServerObject.active)  {
            // updates server state to include the sp
            const addChannelData = (serverName: string) => {
                // only load channels from firebase if the channels attribute array is empty (first time loading)
                    getChannels(serverName).then(channelArray => {

                        // only update the state if
                        setServers(servers.map(object => object.name === serverName ?
                            {...object, channels: channelArray} : {...object}));
                    });};

            if(targetServerObject.channels.length === 0) {addChannelData(event.target.ariaLabel);}

            // change the target button's active state to true and the other server buttons to false
            setServers(servers.map(object => object.name === event.target.ariaLabel ? {...object, active: true} :
                {...object, active: false}))

        }
    }

    // get a list of all servers stored on firestore on initial render
    useEffect(() => {
        getServers().then(result => {
            setServers(result);
        })
    }, []);

    useEffect(() => {
        if (home) {
            setNewServer(false);
            setDiscover(false);
            setServers(servers.map(serverButtonObject => {
                return {...serverButtonObject, active: false}
            }));
        }
    }, [home]);

    useEffect(() => {
        if (discover) {
            setNewServer(false);
            setHome(false);
            setServers(servers.map(serverButtonObject => {
                return {...serverButtonObject, active: false}
            }));
        }
    }, [discover]);

    useEffect(() => {
        if (newServer) {
            setHome(false);
            setDiscover(false);
            setServers(servers.map(serverButtonObject => {
                return {...serverButtonObject, active: false}
            }));
        }
    }, [newServer]);


    // check which button is active right now
    useEffect(() => {
        console.log(servers)

    }, [servers])

    return (
        <div className="h-screen w-screen grid grid-cols-[75px_240px_1fr] font-body">
            <ServerSidebar
                selected={servers}
                handleButtonClick={handleServerButtonClicked}
                home={<HomeButton
                    active={home}
                    handleButtonClick={() => {
                        setHome(true);
                    }}/>}
                discover={<DiscoverButton
                    active={discover}
                    handleButtonClick={() => {
                        setDiscover(true);
                    }}/>}
                newServer={<NewServerButton
                    active={newServer}
                    handleButtonClick={() => {
                        setNewServer(true);
                    }}/>}
            />
            <ChannelSidebar/>
            <Content/>
            {newServer &&
                <div>
                    sign up form
                </div>}

        </div>
    );
}
