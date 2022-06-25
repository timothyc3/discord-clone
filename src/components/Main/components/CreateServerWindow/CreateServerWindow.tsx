import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {toggleCreateServer} from "../../../../features/activeSlice";
import ServerTemplateSelection from "./components/ServerTemplateSelection";
import ServerGroupTypeSelection from "./components/ServerGroupTypeSelection";
import ServerNamePhotoSelection from "./components/ServerNamePhotoSelection";

export default function CreateServerWindow() {

    // check if the button active on serverBar is "newServer", if so this will return true instead of false
    const active = useAppSelector(state => state.active.createServer);

    const [serverTemplate, setServerTemplate] = useState<string>('');
    const [serverGroupType, setServerGroupType] = useState<string>('');

    function onServerTemplateSubmit(input: string) {
        setServerTemplate(input);
    }

    function onServerGroupTypeSubmit(input: string) {
        setServerGroupType(input);
    }

    const dispatch = useAppDispatch();

    // update active server in redux store
    function onExit() {
        dispatch(toggleCreateServer(''));
        if (serverTemplate !== '') {
            setServerTemplate('')
        }
        if (serverGroupType !== '') {
            setServerGroupType('')
        }
    }

    return (
        <>
            {active && <div className="bg-black/70 w-full h-full fixed flex justify-center items-center"
                            onClick={onExit}>

                {serverTemplate === '' && serverGroupType === '' ?
                    <ServerTemplateSelection updateActive={onExit}
                                             onServerTemplateSubmit={(input: string) => onServerTemplateSubmit(input)}/> :
                    serverGroupType === '' ?
                        <ServerGroupTypeSelection updateActive={onExit}
                                                  onServerGroupTypeSubmit={(input: string) => onServerGroupTypeSubmit(input)}
                                                  onServerTemplateSubmit={(input: string) => onServerTemplateSubmit(input)}
                        /> :
                        <ServerNamePhotoSelection/>
                }
            </div>
            }
        </>
    )
}