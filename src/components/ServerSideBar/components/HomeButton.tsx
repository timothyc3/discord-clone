import React from "react";

export default function HomeButton() {

    const active = false;

    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             className={`h-12 w-12 
                ${active ?
                 'bg-blue rounded-2xl text-white' :
                 'rounded-full text-light-grey bg-main-content-black'}
                 p-2 hover:bg-blue hover:rounded-2xl hover:text-white
                 transition-all duration-100 ease-in active:translate-y-0.5`}
             aria-label="home" role="button"
             fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
        </svg>
    );
}