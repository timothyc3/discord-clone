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

  // get a list of all servers stored on firestore on initial render
  useEffect( () => {
    getServers().then(result => {
        let serverArray = result.docs.map(server => {
            return {button: `${server.id}-server`, active: false}});

        setServerButtonSelected([...serverButtonSelected, ...serverArray])
    })
  }, [])

  // useEffect(() => {
  //     console.log(serverButtonSelected);
  // }, [serverButtonSelected])

  return (
      <div className="h-screen w-screen grid grid-cols-[75px_240px_1fr] font-body">
        <ServerSidebar
            selected={serverButtonSelected}
            handleButtonClick={handleServerBarClicked}
            home={<HomeButton
                selected={serverButtonSelected.filter(item => item.button === 'home')}
                handleButtonClick={handleServerBarClicked} />}
            discover={<DiscoverButton
                selected={serverButtonSelected.filter(item => item.button === 'discover')}
                handleButtonClick={handleServerBarClicked} />}
            newServer={<NewServerButton
                selected={serverButtonSelected.filter(item => item.button === 'newServer')}
                handleButtonClick={handleServerBarClicked} />}
        />
        <ChannelSidebar />
        <Content />
      </div>
  );
}

export default App;
