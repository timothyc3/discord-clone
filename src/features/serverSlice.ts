import {createAsyncThunk, createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {Server} from "../types";
import {getServerData} from "../firebase";

interface ServerState {
    entities: { [key: string]: Server },
    ids: string[]
}

const fetchServerData = createAsyncThunk('servers/fetchServerData',
    async (uid: string) => {
        return await getServerData(uid);
})

export const serverSlice = createSlice({
    name: 'server',
    initialState: createEntityAdapter().getInitialState() as ServerState,
    reducers: {
        // adds a server to the server slice
        addServer: (state: ServerState, action: {payload: {name: string, userId: number}}) => {
            // const lastId : string = state.ids[state.entities.allIds.length - 1];
            // const newId : string = (parseInt(lastId) + 1).toString();
            //
            // state.entities.id[newId] = {
            //     id: newId,
            //     name: action.payload.name,
            //     channelIds: [],
            //     userIds: [action.payload.userId.toString()]
            // };
            // state.entities.allIds.push(newId);
        },

        updateServerChannels: (state: ServerState, action: {payload: {serverId: number, channelId: number}}) => {
            // state.entities.id[action.payload.serverId].channelIds.push(action.payload.channelId.toString())
        },
        updateServers: (state: ServerState, action: {payload: {[key: string]: Server}}) => {
            console.log("updateServer called", action.payload)
            const newState: ServerState = {entities: {}, ids: []}
            // populate the entities and ids of newState
            Object.keys(action.payload).forEach(key => {
                const serverId = action.payload[key].id;
                newState.ids.push(serverId);
                newState.entities[serverId] = action.payload[key];
            });
            state.ids = newState.ids;
            state.entities = newState.entities;
        },
    },
    extraReducers: (builder) => {
        // if fetching data from firebase is fulfilled, then we save the server data to state.entities
        builder.addCase(fetchServerData.fulfilled, (state, action) => {
            state.entities = action.payload;
            state.ids = Object.keys(action.payload);
        })
    }
});

export const { updateServers } = serverSlice.actions;
export { fetchServerData }

export default serverSlice.reducer;