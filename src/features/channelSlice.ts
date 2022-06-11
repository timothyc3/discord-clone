import {createAsyncThunk, createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {Channel} from "../types"
import {getChannelData} from "../firebase";

interface ChannelState {
    entities: { [key: string]: Channel },
    ids: string[]
}

const fetchChannelData = createAsyncThunk('servers/fetchChannelData',
    async (uid: string) => {
        return await getChannelData(uid);
    })


export const channelSlice = createSlice({
    name: 'channel',
    initialState: createEntityAdapter().getInitialState() as ChannelState,
    reducers: {
        // add a channel
        updateChannels: (state: ChannelState, action: {payload: {[key: string]: Channel}}) => {
            console.log("updateChannels called", action.payload)
            const newState: ChannelState = {entities: {}, ids: []}
            // populate the entities and ids of newState
            Object.keys(action.payload).forEach(key => {
                const channelId = action.payload[key].id;
                newState.ids.push(channelId);
                newState.entities[channelId] = action.payload[key];
            });
            state.ids = newState.ids;
            state.entities = newState.entities;
        },
    },
    extraReducers: (builder) => {
        // if fetching data from firebase is fulfilled, then we save the server data to state.entities
        builder.addCase(fetchChannelData.fulfilled,
            (state, action) => {
            state.entities = action.payload;
            state.ids = Object.keys(action.payload);
        })
    }

    }
);

export const { updateChannels } = channelSlice.actions;
export { fetchChannelData }

export default channelSlice.reducer;