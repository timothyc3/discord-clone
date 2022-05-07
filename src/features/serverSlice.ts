import { createSlice } from "@reduxjs/toolkit";
import { Server } from "../types"

interface ServerState {
    status: 'idle' | 'loading',
    entities: {
        id: { [key: number]: Server },
        allIds: number[]
    },
    activeId: number
}

const initialState : ServerState = {
    status: 'idle',
    entities: {id: {
            1 : {
                id: 1,
                name: 'React',
                channelIds: [1, 2],
                userIds: [1, 2, 3, 4, 5]
            },
            2 : {
                id: 2,
                name: 'Redux',
                channelIds: [3, 4],
                userIds: [3, 4, 5, 6]
            }
        },
        allIds: [1, 2]
    },
    activeId: 1
}

export const serverSlice = createSlice({
    name: 'servers',
    initialState: initialState,
    reducers: {
        // adds a server to the server slice
        addServer: (state, action: {payload: {name: string, userId: number}}) => {
            const lastId : number = state.entities.allIds[state.entities.allIds.length - 1];
            const newId = lastId + 1;

            const newServerObject : Server = {
                id: newId,
                name: action.payload.name,
                channelIds: [],
                userIds: [action.payload.userId]
            };

            state.entities.id[newId] = newServerObject;
            state.entities.allIds.push(newId);
        },

        // changes the active server so the UI knows what to render
        changeActive: (state, action: {payload: {activeId: number}}) => {
            state.activeId = action.payload.activeId;
        }

    }
});

export const { addServer } = serverSlice.actions;

export default serverSlice.reducer;