import './App.css';
import React, {useState, useEffect} from "react";
import Main from "./components/Main/Main";
// for remixicons usages
import 'remixicon/fonts/remixicon.css';
import LoginScreen from "./components/LoginScreen/LoginScreen";
import {getCurrentUser} from "./firebase";
import {logOut} from "./firebase";

export default function App() {

    logOut();

    const user = getCurrentUser() !== false
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(user)

    return (
        <>
            { isLoggedIn ? <Main /> : <LoginScreen handleLogIn={() => {setIsLoggedIn(true)}}/>
            }
        </>
    );
}
