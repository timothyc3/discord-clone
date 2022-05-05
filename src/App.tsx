import './App.css';
import React, {SyntheticEvent, useEffect, useState} from "react";
import {ServerBarProp, ServerButtonObject} from "./types"
import ChannelSidebar from "./components/ChannelSidebar";

// for remixicons usages
import 'remixicon/fonts/remixicon.css';
import Content from "./components/Content";
import ServerSidebar from "./components/ServerSideBar/ServerSidebar";
import {getServers} from "./firebase";

function App() {

  // checks which button is currently selected by user
  const [serverButtonSelected, setServerButtonSelected] = useState<Array<ServerButtonObject>>([
    {button: 'home', active: false},
    {button: 'newServer', active: false},
    {button: 'discover', active: false},
  ]);

  function handleServerBarClicked(event: React.BaseSyntheticEvent) {
    // find the object with that represents the button that the user clicked,
    // set that button's 'active' boolean to true and reset rest to false
    const result = serverButtonSelected.map(object => object.button === event.target.ariaLabel ?
        {...object, active: true} : {...object, active: false});

    setServerButtonSelected(result);
  }

  // get a list of all servers stored on firestore
  useEffect( () => {
    getServers().then(result => {
        let serverArray = result.docs.map(server => {
            return {button: `${server.id}-server`, active: false}});

        setServerButtonSelected([...serverButtonSelected, ...serverArray])
    })
  }, [])

  useEffect(() => {
      console.log(serverButtonSelected);
  }, [serverButtonSelected])

  return (
      <div className="h-screen w-screen grid grid-cols-[75px_240px_1fr] font-body">
        <ServerSidebar
            selected={serverButtonSelected}
            handleButtonClick={handleServerBarClicked}
        />
        <ChannelSidebar />
        <Content />
      </div>
  );
}

export default App;
