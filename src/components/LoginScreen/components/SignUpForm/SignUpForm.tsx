import React, {useEffect, useState} from "react";
import DateOfBirthInput from "./components/DateOfBirthInput";

export default function SignUpForm() {

    const [daySelection, setDaySelection] = useState<string>("");


    const monthOptions = (() => {
        const monthRangeArray = ['January', 'February', 'March', 'April', 'May',
        'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return monthRangeArray.map(month => <option value={month} key={month}>{month}</option>);
    })();

    function selectionDayInputEdit(input: string) {
        setDaySelection(input);
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

        return yearArray.map(year => <option value={year} key={year}>{year}</option>);
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
                    type="email" id="email" name="email" autoComplete="off" /><br/>

                <label className="font-semibold" htmlFor="username">USERNAME</label>
                <input
                    className="w-full h-8 mt-2 mb-6 pl-2 text-sm text-white rounded bg-server-bar-black outline-0"
                    type="text" id="username" name="username" autoComplete="off" /><br/>

                <label className="font-semibold" htmlFor="password">PASSWORD</label>
                <input
                    className="w-full h-8 mt-2 mb-6 pl-2 text-sm text-white rounded bg-server-bar-black outline-0"
                    type="password" id="password" name="password" autoComplete="off" /><br/>

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


                        <div className="relative">
                            <select
                                className={selectClassName}
                                name="month" id="month" defaultValue="selected">
                                {monthOptions}
                            </select>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 className="h-4 w-4 absolute right-0 top-2/4 -translate-y-2/4 -translate-x-2/4
                                 pointer-events-none"
                                 fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" strokeWidth="3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                            </svg>
                        </div>


                        <div className="relative">
                            <select
                                className={selectClassName}
                                name="year" id="year" defaultValue="selected">
                                {yearOptions}
                            </select>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 className="h-4 w-4 absolute right-0 top-2/4 -translate-y-2/4 -translate-x-2/4
                                 pointer-events-none"
                                 fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" strokeWidth="3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                            </svg>
                        </div>
                    </div>
                </fieldset>

            </form>

        </div>
    )
}