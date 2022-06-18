import './App.css';
import React, {　useState } from "react";
import Main from "./components/Main/Main";
// for remixicons usages
import 'remixicon/fonts/remixicon.css';
import LoginScreen from "./components/LoginScreen/LoginScreen";
import {getCurrentUser} from "./firebase";
import {useAppSelector} from "./hooks";

export default function App() {

    const user = getCurrentUser() !== false;
    // create a boolean where we return false if the string is empty, that is if login id has not been retrieved
    const loginStatus = useAppSelector(state => {
        return state.login.uid !== "";
    })

    return (
        <>
            {/*{ loginStatus ? <Main /> : <LoginScreen*/}
            {/*    loginState={loginStatus}/>*/}
            {/*}*/}
            <LoginScreen
                loginState={loginStatus}/>
        </>
    );
}
