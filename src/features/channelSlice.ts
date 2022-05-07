import {createSlice} from "@reduxjs/toolkit";
import {Channel} from "../types"

interface ChannelState {
    status: 'idle' | 'loading',
    entities: {
        id: { [key: number]: Channel },
        allIds: number[]
    },
    activeId: number
}

const initialState : ChannelState = {
    status: 'idle',
    entities: {id: {
            1 : {
                id: 1,
                name: 'React',
                messageIds: [1, 2],
                userIds: [1, 2, 3, 4, 5]
            },
            2 : {
                id: 2,
                name: 'Redux',
                messageIds: [3, 4],
                userIds: [3, 4, 5, 6]
            },
            3 : {
                id: 2,
                name: 'Vue',
                messageIds: [5, 6, 7],
                userIds: []
            },
            4 : {
                id: 2,
                name: 'Angular',
                messageIds: [8, 9],
                userIds: []
            }
        },
        allIds: [1, 2, 3, 4]
    },
    activeId: 1
}

export const channelSlice = createSlice({
        name: 'channels',
        initialState: initialState,
        reducers: {
            // add a channel
            addChannel: (state, action: {payload: {name: string, userId: number}}) => {
                const lastId : number = state.entities.allIds[state.entities.allIds.length - 1];
                const newId : number = lastId + 1;

                state.entities.id[newId] = {
                    id: newId,
                    name: action.payload.name,
                    messageIds: [],
                    userIds: [action.payload.userId]
                };
                state.entities.allIds.push(newId);
            }
        }
    }
)