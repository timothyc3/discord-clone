 import React, {useState} from "react";
import {login} from "../../../firebase";

export default function LoginForm(props: {
    loginState: boolean,
    handleLogIn: () => void,
    registerEnter: () => void,
}) {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loginFailed, setLoginFailed] = useState<boolean>(false);

    function onEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
    }

    function onPasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
    }

    // checks submitted credentials against firebase to see if user has signed in successfully
    async function onSubmit(event: React.MouseEvent<HTMLInputElement>) {
        event.preventDefault();
        login(email, password)
            .then(
                (userCreds) => {
                    setLoginFailed(false);
                    props.handleLogIn()
                }
            )
            .catch((e) => {
                setLoginFailed(true);
            });
    }

    const labelClass = `font-bold ${loginFailed ? "text-error-orange" : ""}`;
    const failMessage = <span className="text-error-orange"><em> - Login or password is invalid.</em></span>;

    return (
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
                      className="w-full text-light-grey text-xs mt-4">
                    <label className={labelClass} htmlFor="email">EMAIL</label>
                    {loginFailed && failMessage}<br/>
                    <input
                        className="w-full h-8 mt-2 mb-6 pl-2 text-sm text-white rounded-md bg-server-bar-black outline-0"
                        type="email" id="email" name="email" autoComplete="off" onChange={onEmailChange}/><br/>
                    <label className={labelClass} htmlFor="password">PASSWORD</label>
                    {loginFailed && failMessage}<br/>
                    <input className="w-full h-8 my-2 pl-2 text-sm text-white rounded-md bg-server-bar-black outline-0"
                           type="password" id="password" name="password" autoComplete="off"
                           onChange={onPasswordChange}/><br/>
                    <button className="text-unclicked-links-blue inline-block">Forgot your password?</button>
                    <br/>
                    <input disabled={props.loginState}
                           className="mt-4 mb-2 text-base text-white font-semibold w-full h-10 bg-blue rounded-sm
                           disabled:text-inactive-light-grey hover:bg-dimmed-blue active:bg-darker-blue
                           transition-colors"
                           type="submit" value="Login" onClick={onSubmit}/><br/>
                    <p className="text-inactive-light-grey">Need an account? <button
                        className="text-unclicked-links-blue inline-block"
                        onClick={props.registerEnter}>
                        Register
                    </button></p>
                </form>
            </div>
        </div>
    )
}