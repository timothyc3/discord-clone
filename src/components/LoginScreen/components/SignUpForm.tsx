import React from "react";

export default function SignUpForm() {

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
                            className=""
                            name="" id=""></select>
                        <select name="" id=""></select>
                        <select name="" id=""></select>
                    </div>
                </fieldset>

            </form>

        </div>
    )
}