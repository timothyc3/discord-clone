import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {toggleCreateServer} from "../../../../features/activeSlice";
import ServerTemplateSelection from "./components/ServerTemplateSelection";
import ServerGroupTypeSelection from "./components/ServerGroupTypeSelection";
import ServerNamePhotoSelection from "./components/ServerNamePhotoSelection";
import {batchCreateChannels, createServer} from "../../../../firebase";
import {ServerPayload} from "../../../../types";

export default function CreateServerWindow() {

    // check if the button active on serverBar is "newServer", if so this will return true instead of false
    const active = useAppSelector(state => state.active.createServer);
    // retrieve the username once, provided it does not return empty string. Will stop refreshing
    // once it no longer returns an empty string as seen in equalityFn
    const defaultServerName = useAppSelector(state => {
            if (state.login.uid in state.user.entities) {
                return `${state.user.entities[state.login.uid].name}'s Server`
            }
            else {return ''}
        }, (a, b) => a !== '');

    const userUid = useAppSelector(state => state.login.uid)

    // when defaultServerName does not return empty string, this will trigger once after mount.
    useEffect(() => {
        setServerName(defaultServerName);
    }, [defaultServerName])

    const [serverTemplate, setServerTemplate] = useState<string>('');
    const [serverGroupType, setServerGroupType] = useState<string>('');
    const [serverName, setServerName] = useState<string>('');

    function onServerTemplateSubmit(input: string) {
        setServerTemplate(input);
    }

    function onServerGroupTypeSubmit(input: string) {
        setServerGroupType(input);
    }

    function onServerNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setServerName(event.target.value);
    }

    async function onServerCreation() {

        const isPrivate : boolean = serverGroupType === 'For me and my friends';

        createServer({name: serverName, creatorUserId: userUid}, isPrivate)
            .then((serverId) => {
                console.log(`successfully created new server with id: ${serverId}`);
                batchCreateChannels(serverTemplate, serverId, userUid);
            });
    }

    const dispatch = useAppDispatch();

    // update active server in redux store
    function onExit() {
        dispatch(toggleCreateServer(''));
        if (serverTemplate !== '') {
            setServerTemplate('');
        }
        if (serverGroupType !== '') {
            setServerGroupType('');
        }
        setServerName(defaultServerName);
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
                        <ServerNamePhotoSelection updateActive={onExit}
                                                  onServerGroupTypeSubmit={(input: string) => onServerGroupTypeSubmit(input)}
                                                  onServerTemplateSubmit={(input: string) => onServerTemplateSubmit(input)}
                                                  defaultServerName={serverName}
                                                  onServerNameChange={onServerNameChange}
                                                  onServerCreation={onServerCreation}
                        />
                }
            </div>
            }
        </>
    )
}