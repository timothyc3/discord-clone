import React, {useEffect, useState} from "react";
import DateOfBirthInput from "./components/DateOfBirthInput";
import {createNewUser} from "../../../../firebase";

export default function SignUpForm(props: {registerExit: () => void,}) {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [daySelection, setDaySelection] = useState<string>("");
    const [monthSelection, setMonthSelection] = useState<string>("");
    const [yearSelection, setYearSelection] = useState<string>("");

    function onEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
    }

    function onPasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
    }

    function onUsernameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value);
    }

    function selectionDayInputEdit(input: string) {
        setDaySelection(input);
    }

    function selectionMonthInputEdit(input: string) {
        setMonthSelection(input);
    }

    function selectionYearInputEdit(input: string) {
        setYearSelection(input);
    }

    async function handleRegistration(event: React.MouseEvent<HTMLInputElement>) {
        event.preventDefault();
        await createNewUser(email, password, username, daySelection, monthSelection, yearSelection);
    }

    const yearOptions = (() => {
        const currentYear = new Date().getFullYear();
        // get current year - 130
        const minYear = currentYear - 130;
        
        // initialize year array
        const yearArray = [];
        
        // max is 12 years before current year.
        for (let i = currentYear - 12; i >= minYear; i--) {
            yearArray.push(i);
        }

        return yearArray
    })();

    const selectClassName = "w-full h-full bg-sub-black border-[1px] border-server-bar-black/60 rounded text-inactive-light-grey" +
        " text-sm pl-2 font-medium focus:outline-none hover:border-server-bar-black appearance-none box-border";

    return (
        <div className="bg-main-content-black w-108 h-132 rounded-md shadow-2xl p-8">
            <h1 className="text-white font-bold text-center text-xl">Create an account</h1>

            <form action="src/components/LoginScreen/components/SignUpForm/SignUpForm" className="w-full text-light-grey text-xs mt-4">
                <label className="font-semibold" htmlFor="email">EMAIL</label>
                <input
                    className="w-full h-8 mt-2 mb-6 pl-2 text-sm text-white rounded bg-server-bar-black outline-0"
                    type="email" id="email" name="email" autoComplete="off" onChange={onEmailChange}/><br/>

                <label className="font-semibold" htmlFor="username">USERNAME</label>
                <input
                    className="w-full h-8 mt-2 mb-6 pl-2 text-sm text-white rounded bg-server-bar-black outline-0"
                    type="text" id="username" name="username" autoComplete="off" onChange={onUsernameChange}/><br/>

                <label className="font-semibold" htmlFor="password">PASSWORD</label>
                <input
                    className="w-full h-8 mt-2 mb-6 pl-2 text-sm text-white rounded bg-server-bar-black outline-0"
                    type="password" id="password" name="password" autoComplete="off" onChange={onPasswordChange}/><br/>

                <fieldset className="grid grid-rows-[auto_1fr] mb-6">
                    <h2 className="font-semibold">DATE OF BIRTH</h2>
                    <div className="grid grid-cols-3 gap-x-2 mt-2 h-9">

                        <DateOfBirthInput
                            options={
                            Array.from({length: 31}, (v, k) => k + 1).map(number => number.toString())
                        }
                            selection={daySelection}
                            selectionEdit={selectionDayInputEdit}
                        />

                        <DateOfBirthInput
                            options={
                                ['January', 'February', 'March', 'April', 'May',
                                    'June', 'July', 'August', 'September', 'October', 'November', 'December']
                        }
                            selection={monthSelection}
                            selectionEdit={selectionMonthInputEdit}
                        />

                        <DateOfBirthInput

                            options={yearOptions.map(number => number.toString())}
                            selection={yearSelection}
                            selectionEdit={selectionYearInputEdit}
                        />

                    </div>
                </fieldset>

                <input className="mb-2 text-base text-white font-semibold w-full h-10 bg-blue rounded-sm
                           disabled:text-inactive-light-grey hover:bg-dimmed-blue active:bg-darker-blue
                           transition-colors"
                       type="submit" value="Continue" onClick={handleRegistration} /><br/>

                <button
                    className="text-unclicked-links-blue inline-block"
                    onClick={props.registerExit}>
                    Already have an account?
                </button>

            </form>

        </div>
    )
}