import React from "react";
import {useAppSelector} from "../../../../../hooks";

export default function UserCard() {

    const username = useAppSelector(state => {

        const uid = state.login.uid
        if (uid in  state.user.entities) {
            return state.user.entities[uid].name
        }
        else {return ""}

    })

    const uid = useAppSelector(state => state.login.uid)

    return (
        <div className="w-full bg-server-bar-black/60 p-3 grid grid-cols-[2.5rem_4fr_1fr_1fr_1fr] gap-x-3">
            <div className="bg-white h-full rounded-full"></div>
            <div className="flex flex-col justify-center">

                <h2 className="text-sm font-semibold text-white">{username}</h2>
                <h3 className="text-xs text-inactive-light-grey">{`#${uid.substring(0, 4)}`}</h3>

            </div>
            <svg xmlns="http://www.w3.org/2000/svg"
                 className="h-5 w-5 m-auto text-inactive-light-grey"
                 viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg"
                 className="h-5 w-5 m-auto text-inactive-light-grey"
                 viewBox="0 0 20 20" fill="currentColor">
                <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg"
                 className="h-5 w-5 m-auto text-inactive-light-grey"
                 viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
        </div>
    )
}