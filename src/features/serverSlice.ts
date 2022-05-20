import {createAsyncThunk, createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {Server} from "../types";
import {getServerData} from "../firebase";

interface ServerState {
    entities: { [key: string]: Server },
    ids: string[]
}

const fetchServerData = createAsyncThunk('servers/fetchServerData',
    async () => {
        return await getServerData();
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
        }
    },
    extraReducers: (builder) => {
        // if fetching data from firebase is fulfilled, then we save the server data to state.entities
        builder.addCase(fetchServerData.fulfilled, (state, action) => {
            state.entities = action.payload;
            state.ids = Object.keys(action.payload);
        })
    }
});

export const { addServer } = serverSlice.actions;
export { fetchServerData }

export default serverSlice.reducer;