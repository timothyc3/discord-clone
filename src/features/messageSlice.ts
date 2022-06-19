import {createAsyncThunk, createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {Message} from "../types";
import {getMessageData} from "../firebase";

interface MessageState {
    entities: { [key: string]: Message },
    ids: string[]
}

const fetchMessageData = createAsyncThunk('servers/fetchMessageData',
    async (messageIdArray: string[]) => {
        return await getMessageData(messageIdArray);
    });

export const messageSlice = createSlice({
    name: 'message',
    initialState: createEntityAdapter().getInitialState() as MessageState,
    reducers: {},
    extraReducers: (builder) => {
        // if fetching data from firebase is fulfilled, then we save the server data to state.entities
        builder.addCase(fetchMessageData.fulfilled,
            (state, action) => {
                if (typeof action.payload !== "undefined") {
                    state.entities = {...state.entities, ...action.payload};
                    state.ids = [...state.ids ,...Object.keys(action.payload)];
                }
            })
    }
    }
);

export { fetchMessageData }
export default messageSlice.reducer;