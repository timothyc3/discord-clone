import React from "react";
import Header from "./components/Header";
// import ChannelButton from "./components/ChannelSideBar/components/ChannelButton";


export default function ChannelSidebar() {

    return (
        <div className="bg-sub-black grid grid-rows-[3rem_1fr_5rem] w-full h-full">
            <Header />
            <div className="w-full h-full py-5 px-2 flex flex-col gap-0.5">
            </div>


        </div>
    )
}