import {createSlice} from "@reduxjs/toolkit";
import {Channel} from "../types"

interface ChannelState {
    status: 'idle' | 'loading',
    entities: {
        id: { [key: string]: Channel },
        allIds: string[]
    }
}

const initialState : ChannelState = {
    status: 'idle',
    entities: {id: {
            "1" : {
                id: "1",
                name: 'React',
                messageIds: ["1", "2"],
                userIds: ["1", "2", "3", "4", "5"]
            },
            "2" : {
                id: "2",
                name: 'Redux',
                messageIds: ["3", "4"],
                userIds: ["3", "4", "5", "6"]
            },
            "3" : {
                id: "3",
                name: 'Vue',
                messageIds: ["5", "6", "7"],
                userIds: []
            },
            "4" : {
                id: "4",
                name: 'Angular',
                messageIds: ["8", "9"],
                userIds: []
            },
            "5" : {
                id: "5",
                name: 'Scala',
                messageIds: ["10"],
                userIds: []
            }
        },
        allIds: ["1", "2", "3", "4", "5"]
    }
}

export const channelSlice = createSlice({
        name: 'channels',
        initialState: initialState,
        reducers: {
            // add a channel
            addChannel: (state: ChannelState, action: {payload: {name: string, userId: number}}) => {
                const lastId : string = state.entities.allIds[state.entities.allIds.length - 1];
                const newId : string = (parseInt(lastId) + 1).toString();

                state.entities.id[newId] = {
                    id: newId,
                    name: action.payload.name,
                    messageIds: [],
                    userIds: [action.payload.userId.toString()]
                };
                state.entities.allIds.push(newId);
            },
            updateChannelMessages: (state: ChannelState, action: {payload:
                    {channelId: number, messageId: number}}) => {
                state.entities.id[action.payload.channelId].messageIds.push(action.payload.messageId.toString())
            }
        }
    }
);

export const { addChannel, updateChannelMessages } = channelSlice.actions;

export default channelSlice.reducer;