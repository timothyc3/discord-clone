import React, { useState } from "react";
import LoginForm from "./components/LoginForm";

export default function LoginScreen(props: {loginState: boolean, handleLogIn: () => void}) {

    const [isRegistering, setIsRegistering] = useState<boolean>(false);

    // triggered when the user clicks the register button on the LoginForm
    function handleRegisterEnter() {
        if (!isRegistering) {
            setIsRegistering(true);
        }
    }

    return (
        <div className="h-screen w-screen font-body bg-blue flex items-center
        justify-center">
            <LoginForm loginState={props.loginState}
                       handleLogIn={props.handleLogIn}
                       registerEnter={handleRegisterEnter}
            />
        </div>
    )
}