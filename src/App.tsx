import './App.css';
import React, {useState, useEffect} from "react";
import Main from "./components/Main/Main";
// for remixicons usages
import 'remixicon/fonts/remixicon.css';
import LoginScreen from "./components/LoginScreen/LoginScreen";


export default function App() {

    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <>
            { loggedIn ? <Main /> : <LoginScreen />
            }
        </>
    );
}
