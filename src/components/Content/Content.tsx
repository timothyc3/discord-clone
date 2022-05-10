import React from "react";
import Header from "./components/Header";

export default function Content() {
    return (
        <div className="bg-main-content-black grid grid-rows-[3rem_1fr_5rem] w-full h-full">
            <Header />
            <div></div>
            <input type="search" placeholder="Message"
                   className="bg-chat-box-search-bar-main m-5 rounded-lg px-5 text-white
                   text-sm placeholder-inactive-light-grey focus:outline-0"/>

        </div>
    );
}