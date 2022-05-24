import React from "react";
import SignUpForm from "./components/SignUpForm";

export default function LoginScreen(props: {handleLogIn: () => void}) {
    return (
        <div className="h-screen w-screen font-body bg-blue flex items-center
        justify-center">
            <SignUpForm handleLogIn={props.handleLogIn} />
        </div>
    )
}