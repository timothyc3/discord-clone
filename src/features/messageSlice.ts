import {createAsyncThunk, createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {Message} from "../types";
import {getMessageData, writeMessage} from "../firebase";

interface MessageState {
    entities: { [key: string]: Message },
    ids: string[]
}

const fetchMessageData = createAsyncThunk('servers/fetchMessageData',
    async (messageIdArray: string[]) => {
        return await getMessageData(messageIdArray);
    })

export const messageSlice = createSlice({
    name: 'message',
    initialState: createEntityAdapter().getInitialState() as MessageState,
    reducers: {
        addMessage: (state: MessageState, action: {payload:
                {
                    channelId: string,
                    userId: string,
                    text: string,
                    year: number,
                    month: number,
                    day: number,
                    hour: number,
                    minute: number,
                    second: number
                }}) => {
            writeMessage(action.payload);
            // state.entities.id[newId] = {
            //     id: newId,
            //     ...action.payload,
            //     userId: action.payload.userId.toString(),
            //     text: action.payload.text,
            // };
            // state.entities.allIds.push(newId);
        },
    },
    extraReducers: (builder) => {
        // if fetching data from firebase is fulfilled, then we save the server data to state.entities
        builder.addCase(fetchMessageData.fulfilled,
            (state, action) => {
                state.entities = action.payload;
                state.ids = Object.keys(action.payload);
            })
    }
    }
);

export const { addMessage } = messageSlice.actions;
export { fetchMessageData }
export default messageSlice.reducer;