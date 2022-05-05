import React from "react";
import HomeButton from "./components/HomeButton";
import NewServerButton from "./components/NewServerButton";
import DiscoverButton from "./components/DiscoverButton";
import {ServerBarProp } from "../../types";
import ServerButton from "./components/ServerButton";

export default function ServerSidebar(props: ServerBarProp) {

    // create a ServerButton div for each server initialized by parent component 'App'
    const serverButtons = props.selected.map(serverButtonObject => {
        if (serverButtonObject.button.includes('-server')) {
            return <ServerButton key={serverButtonObject.button}
                                 selected={serverButtonObject}
                                 handleButtonClick={props.handleButtonClick}/>
        }

    });

    return (
      <div className="bg-server-bar-black flex flex-col items-center pt-5">
          <HomeButton handleButtonClick={props.handleButtonClick} selected={props.selected.filter(
              item => item.button === 'home')}/>
          <span className="bg-sub-black w-8 h-0.5 rounded-3xl my-3 after:content-[''] after:text-green"></span>
          {serverButtons}
          <NewServerButton handleButtonClick={props.handleButtonClick} selected={props.selected.filter(
              item => item.button === 'newServer')}/>
          <DiscoverButton handleButtonClick={props.handleButtonClick} selected={props.selected.filter(
              item => item.button === 'discover')}/>

      </div>
    );
}