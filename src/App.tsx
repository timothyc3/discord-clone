import './App.css';
import React, {useEffect, useState} from "react";
import {Server, Channel } from "./types"
import ChannelSidebar from "./components/ChannelSideBar/ChannelSidebar";
import HomeButton from "./components/ServerSideBar/components/HomeButton";
import DiscoverButton from "./components/ServerSideBar/components/DiscoverButton";
import NewServerButton from "./components/ServerSideBar/components/NewServerButton";
import Content from "./components/Content";
import ServerSidebar from "./components/ServerSideBar/ServerSidebar";
import {getChannels, getServers} from "./firebase";

// for remixicons usages
import 'remixicon/fonts/remixicon.css';
import ServerButton from "./components/ServerSideBar/components/ServerButton";
import ChannelButton from "./components/ChannelSideBar/components/ChannelButton";


export default function App() {

    // stores an object array that keeps a boolean for each server
    const [servers, setServers] = useState<Array<Server>>([]);

    // state that checks if home button is clicked or not
    const [home, setHome] = useState<boolean>(false);

    // state that checks if new server button is clicked
    const [newServer, setNewServer] = useState<boolean>(false);

    // state that checks if discover button is clicked
    const [discover, setDiscover] = useState<boolean>(false);

    function handleServerButtonClick(event: React.BaseSyntheticEvent) {
        // find the object with that represents the button that the user clicked,
        // set that button's 'active' boolean to true and reset rest to false


        // set the special buttons to false
        setHome(false);
        setDiscover(false);
        setNewServer(false);

        const targetServerObject = servers.filter(server => server.name === event.target.ariaLabel)[0]

        // only load data from firestore if the server button is currently not active
        if (!targetServerObject.active) {
            // updates server state to include a list of channels in that server and update that object's active to true
            const addChannelData = (serverName: string) => {
                // only load channels from firebase if the channels attribute array is empty (first time loading)
                getChannels(serverName).then(channelArray => {
                    setServers(servers.map(object => object.name === serverName ?
                        {...object, channels: channelArray, active: true} : {...object, active: false}));
                });
            };

            if (targetServerObject.channels.length === 0) {
                addChannelData(event.target.ariaLabel);
            } else {
                // change the target button's active state to true and the other server buttons to false
                setServers(servers.map(object => object.name === event.target.ariaLabel ? {...object, active: true} :
                    {...object, active: false}))
            }
        }
    }

    function handleChannelButtonClick( channelName: string) {
        // retrieve the server that is currently active from the state
        const activeServerObject: Server = servers.filter(server => server.name === activeServer[0].name)[0];

        // retrieve the target channel that the user clicked
        const targetChannelObject: Channel = activeServerObject.channels.filter(channel => channel.name === channelName)[0];
        // check if the object indicates that the button is already active
        if (!targetChannelObject.active) {

            // toggle the button to active if it is currently false
            const updatedChannelObject: Channel = {...targetChannelObject, active: true}

            // updated servers array
            const updatedChannelArray:Array<Channel> = activeServerObject.channels.map(channel => channel.name === channelName ?
            updatedChannelObject : {...channel, active: false});

            // updated server object
            const updatedServerObject: Server = {...activeServerObject, channels: updatedChannelArray}

            setServers(servers.map(server => server.name === activeServer[0].name ? updatedServerObject
                : server));
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
        // console.log(servers)

    }, [servers])

    // create a ServerButton for each server
    const serverButtons: JSX.Element[] = servers
        .map((server: Server) => <ServerButton key={server.name}
                                               active={server.active}
                                               name={server.name}
                                               handleButtonClick={handleServerButtonClick}/>
        );

    // define active (clicked) server
    const activeServer = servers.filter(server => server.active);

    // create a ChannelButton for each channel in the active server.
    let channelButtons: Array<JSX.Element> = [];
    if (servers.some(server => server.active)) {
        channelButtons = activeServer[0].channels.map(channel => <ChannelButton channelName={channel.name}
                                                                                active={channel.active}
                                                                                key={channel.name}
                                                                                handleClick={handleChannelButtonClick}
        />)
    }


    return (
        <div className="h-screen w-screen grid grid-cols-[75px_240px_1fr] font-body">
            <ServerSidebar
                serverButtons={serverButtons}
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
            <ChannelSidebar
                channelButtons={channelButtons}
                server={activeServer.length === 1 ?
                    activeServer[0]
                    : {name: '', active: false, channels: []}}
            />
            <Content/>
            {newServer &&
                <div>
                    sign up form
                </div>}

        </div>
    );
}
