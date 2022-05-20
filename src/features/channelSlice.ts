import {createAsyncThunk, createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {Channel} from "../types"
import {getChannelData} from "../firebase";

interface ChannelState {
    entities: { [key: string]: Channel },
    ids: string[]
}

const fetchChannelData = createAsyncThunk('servers/fetchChannelData',
    async () => {
        return await getChannelData();
    })

export const channelSlice = createSlice({
    name: 'channels',
    initialState: createEntityAdapter().getInitialState() as ChannelState,
    reducers: {
        // add a channel
        addChannel: (state: ChannelState, action: {payload: {name: string, userId: number}}) => {
            // const lastId : string = state.entities.allIds[state.entities.allIds.length - 1];
            // const newId : string = (parseInt(lastId) + 1).toString();
            //
            // state.entities.id[newId] = {
            //     id: newId,
            //     name: action.payload.name,
            //     messageIds: [],
            //     userIds: [action.payload.userId.toString()]
            // };
            // state.entities.allIds.push(newId);
        },
    },
    extraReducers: (builder) => {
        // if fetching data from firebase is fulfilled, then we save the server data to state.entities
        builder.addCase(fetchChannelData.fulfilled,
            (state, action) => {
            state.entities = action.payload
        })
    }

    }
);

export const { addChannel } = channelSlice.actions;
export { fetchChannelData }

export default channelSlice.reducer;