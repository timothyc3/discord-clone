import React, { useState } from "react";
import { createNewUser, login, getCurrentUser } from "../../../firebase";

export default function SignUpForm(props: {handleLogIn: () => void}) {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    function onEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
    }

    function onPasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
    }

    async function onSubmit(event: React.MouseEvent<HTMLInputElement>) {
        event.preventDefault();
        login(email, password).then(
            (userCreds) => {
                console.log('output', userCreds);
                props.handleLogIn()
            }
        );
    }

    return (
        <div className="h-screen w-screen font-body bg-blue flex items-center
        justify-center">
            <div className="bg-main-content-black w-192 h-96 rounded-md shadow-2xl p-8
        grid grid-cols-[3fr_2fr]">
                <div className="grid-rows-[auto_50px_1fr]">
                    <h2 className="col-span-2 text-center text-2xl text-white font-bold">
                        Welcome back!
                    </h2>
                    <h3 className="col-span-2 text-center text-inactive-light-grey mt-1">
                        we're so excited to see you again!
                    </h3>
                    <form action=""
                          className="w-full text-light-grey text-xs mt-2">
                        <label className="font-bold" htmlFor="email">EMAIL</label><br/>
                        <input className="w-full h-8 mt-2 mb-6 pl-2 text-sm text-white rounded-md bg-server-bar-black outline-0"
                               type="email" id="email" name="email" autoComplete="off" onChange={onEmailChange}/><br/>
                        <label className="font-bold" htmlFor="password" >PASSWORD</label><br/>
                        <input className="w-full h-8 my-2 pl-2 text-sm text-white rounded-md bg-server-bar-black outline-0"
                               type="password" id="password" name="password" autoComplete="off" onChange={onPasswordChange}/><br/>
                        <a href="">Forgot your password?</a><br/>
                        <input
                            className="mt-6 mb-4 text-base text-white font-semibold w-full h-10 bg-blue rounded-md"
                            type="submit" value="Login" onClick={onSubmit}/><br/>
                        <p className="text-inactive-light-grey">Need an account? <a href="">Register</a></p>
                    </form>
                </div>
            </div>
        </div>

    )
}