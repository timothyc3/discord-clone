import {createAsyncThunk, createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {Channel} from "../types"
import {getChannelData} from "../firebase";

interface ChannelState {
    entities: { [key: string]: Channel },
    ids: string[]
}

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
    }
    }
);

export const { updateChannels } = channelSlice.actions;

export default channelSlice.reducer;