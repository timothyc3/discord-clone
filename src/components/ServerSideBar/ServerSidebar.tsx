import React from "react";
import ServerButton from "./components/ServerButton";
import { ServerBarProp } from "../../types";

type ServerBar = ServerBarProp & {home: JSX.Element, discover: JSX.Element, newServer: JSX.Element}

export default function ServerSidebar(props: ServerBar) {

    // create a ServerButton div for each server initialized by parent component 'App'
    // -server filter allow us to filter present buttons like home, discover and newServer out
    // of the initialization.
    const serverButtons: JSX.Element[] = props.selected
        .map(serverButtonObject => <ServerButton key={serverButtonObject.button}
                                     selected={serverButtonObject.active}
                                                 name={serverButtonObject.button}
                                     handleButtonClick={props.handleButtonClick}/>
            );

    return (
      <div className="bg-server-bar-black flex flex-col items-center pt-5">
          {props.home}
          <span className="bg-sub-black w-8 h-0.5 rounded-3xl my-3 after:content-[''] after:text-green"></span>
          {serverButtons}
          {props.newServer}
          {props.discover}
      </div>
    );
}