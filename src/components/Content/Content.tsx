import React from "react";
import Header from "./components/Header";
import MessageContainer from "./components/MessageContainer";
import MessageInput from "./components/MessageInput";

export default function Content() {
    return (
        <div className="bg-main-content-black grid grid-rows-[3rem_1fr_5rem] w-full h-full">
            <Header />
            <MessageContainer />
            <MessageInput />
        </div>
    );
}