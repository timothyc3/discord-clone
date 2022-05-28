import React from "react";
import {current} from "@reduxjs/toolkit";

export default function SignUpForm() {

    const dayOptions = (() => {
       const dateRangeArray = Array.from({length: 31}, (v, k) => k + 1);
        return dateRangeArray.map(day => <option value={day}>{day}</option>);
    })();

    const monthOptions = (() => {
        const monthRangeArray = ['January', 'February', 'March', 'April', 'May',
        'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return monthRangeArray.map(month => <option value={month}>{month}</option>);
    })();

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

        return yearArray.map(year => <option value={year}>{year}</option>);
    })();

    const selectClassName = "bg-sub-black border-2 border-server-bar-black/60 rounded text-inactive-light-grey" +
        " text-sm pl-2 font-medium";

    return (
        <div className="bg-main-content-black w-108 h-132 rounded-md shadow-2xl p-8">
            <h1 className="text-white font-bold text-center text-xl">Create an account</h1>

            <form action="" className="w-full text-light-grey text-xs mt-4">
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
                        <select
                            className={selectClassName}
                            name="day" id="day" >
                            <option value="" disabled selected>Select</option>
                            {dayOptions}
                        </select>
                        <select
                            className={selectClassName}
                            name="month" id="month">
                            <option value="" disabled selected>Select</option>
                            {monthOptions}
                        </select>
                        <select
                            className={selectClassName}
                            name="year" id="year">
                            <option value="" disabled selected>Select</option>
                            {yearOptions}
                        </select>
                    </div>
                </fieldset>

            </form>

        </div>
    )
}