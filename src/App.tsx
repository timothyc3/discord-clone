import './App.css';
import React, {SyntheticEvent, useEffect, useState} from "react";
import {ServerBarProp, ServerButtonObject} from "./types"
import ChannelSidebar from "./components/ChannelSidebar";
import HomeButton from "./components/ServerSideBar/components/HomeButton";
import DiscoverButton from "./components/ServerSideBar/components/DiscoverButton";
import NewServerButton from "./components/ServerSideBar/components/NewServerButton";
import Content from "./components/Content";
import ServerSidebar from "./components/ServerSideBar/ServerSidebar";
import {getServers} from "./firebase";

// for remixicons usages
import 'remixicon/fonts/remixicon.css';


export default function App() {

    // stores an object array that keeps a boolean for each server
    const [serverButtonSelected, setServerButtonSelected] = useState<Array<ServerButtonObject>>([
    ]);

    // state that checks if home button is clicked or not
    const [homeButton, setHomeButton] = useState<boolean>(false);

    // state that checks if new server button is clicked
    const [newServerButton, setNewServerButton] = useState<boolean>(false);

    // state that checks if discover button is clicked
    const [discoverButton, setDiscoverButton]= useState<boolean>(false);

    function handleServerButtonClicked(event: React.BaseSyntheticEvent) {
    // find the object with that represents the button that the user clicked,
    // set that button's 'active' boolean to true and reset rest to false
    const result = serverButtonSelected.map(object => object.button === event.target.ariaLabel ?
        {...object, active: true} : {...object, active: false});
    setServerButtonSelected(result);

    // set the special buttons to false
    setHomeButton(false);
    setDiscoverButton(false);
    setNewServerButton(false);
    }

    // get a list of all servers stored on firestore on initial render
    useEffect( () => {
    getServers().then(result => {
        let serverArray: Array<ServerButtonObject> = result.docs.map(server => {
            return {button: `${server.id}-server`, active: false}});

        setServerButtonSelected(serverArray);
    });
    }, []);

    useEffect(() => {
      if (homeButton) {
          setNewServerButton(false);
          setDiscoverButton(false);
          setServerButtonSelected(serverButtonSelected.map(serverButtonObject => {
              return {...serverButtonObject, active: false}
          }));
      }
    }, [homeButton]);

    useEffect(() => {
        if (discoverButton) {
            setNewServerButton(false);
            setHomeButton(false);
            setServerButtonSelected(serverButtonSelected.map(serverButtonObject => {
                return {...serverButtonObject, active: false}
            }));
        }
    }, [discoverButton]);

    useEffect(() => {
        if (newServerButton) {
            setHomeButton(false);
            setDiscoverButton(false);
            setServerButtonSelected(serverButtonSelected.map(serverButtonObject => {
                return {...serverButtonObject, active: false}
            }));
        }
    }, [newServerButton]);




    // check which button is active right now
    useEffect(() => {


    }, [serverButtonSelected])

    return (
      <div className="h-screen w-screen grid grid-cols-[75px_240px_1fr] font-body">
        <ServerSidebar
            selected={serverButtonSelected}
            handleButtonClick={handleServerButtonClicked}
            home={<HomeButton
                active={homeButton}
                handleButtonClick={() => {setHomeButton(true);}} />}
            discover={<DiscoverButton
                active={discoverButton}
                handleButtonClick={() => {setDiscoverButton(true);}} />}
            newServer={<NewServerButton
                active={newServerButton}
                handleButtonClick={() => {setNewServerButton(true);}} />}
        />
        <ChannelSidebar />
        <Content />
      </div>
    );
    }
