import React from "react";

export default function Content() {
    return (
        <div className="bg-main-content-black grid grid-rows-[3rem_1fr_5rem] w-full h-full">
            <div className="box-border w-full h-full shadow-md flex items-center py-3 px-5">
                <svg xmlns="http://www.w3.org/2000/svg"
                     className="h-6 w-6 text-inactive-light-grey"
                     viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z" clipRule="evenodd" />
                </svg>
                <h2 className="font-semibold text-white font-body ml-2">testing</h2>

                <svg xmlns="http://www.w3.org/2000/svg"
                     className="h-6 w-6 text-light-grey ml-auto"
                     viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg"
                     className="h-6 w-6 text-light-grey ml-4"
                     viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>

                <i className="ri-pushpin-fill text-2xl text-light-grey ml-4"></i>

                <svg xmlns="http://www.w3.org/2000/svg"
                     className="h-6 w-6 text-light-grey ml-4"
                     viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>

                <div className="relative w-36 ml-4 h-full">
                    <input type="search" placeholder="Search"
                           className="bg-server-bar-black rounded pl-2 pr-7 w-full h-full text-xs
                    font-medium flex items-center text-light-grey focus:outline-0"/>

                    <svg xmlns="http://www.w3.org/2000/svg"
                         className="h-4 w-4 text-light-grey absolute top-0 right-0 translate-y-1/4
                         -translate-x-1/2"
                         fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg"
                     className="h-6 w-6 text-light-grey ml-4"
                     viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clipRule="evenodd" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg"
                     className="h-6 w-6 text-light-grey ml-4"
                     viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>

            </div>
            <div></div>
            <input type="search" placeholder="Message"
                   className="bg-chat-box-search-bar-main m-5 rounded-lg px-5 text-white
                   text-sm placeholder-inactive-light-grey focus:outline-0"/>

        </div>
    );
}