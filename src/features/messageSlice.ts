import {createSlice} from "@reduxjs/toolkit";
import {Message} from "../types";

interface MessageState {
    status: 'idle' | 'loading',
    entities: {
        id: { [key: string]: Message },
        allIds: string[]
    }
}

const initialState : MessageState = {
    status: 'idle',
    entities: {id: {
            "1" : {
                id: "1",
                userId: "1",
                text: "this is my first message at the first user of the platform!",
                date: new Date(2022, 4, 10, 22, 10, 13, 5)
            },
            "2" : {
                id: "2",
                userId: "2",
                text: "Cool, I am new here as well! Nice to meet you.",
                date: new Date(2022, 4, 13, 22, 12, 30, 30)
            },
            "3" : {
                id: "3",
                userId: "4",
                text: "What is this channel about?",
                date: new Date(2022, 4, 13, 23, 15, 3, 5)
            },
            "4" : {
                id: "4",
                userId: "3",
                text: "It is about redux.",
                date: new Date(2022, 4, 14, 1, 5, 12, 59)
            },
            "5" : {
                id: "5",
                userId: "1",
                text: "I love Vue",
                date: new Date(2022, 4, 17, 1, 20, 31, 10)
            },
            "6" : {
                id: "6",
                userId: "5",
                text: "React is also pretty good",
                date: new Date(2022, 4, 18, 10, 3, 30, 1)
            },
            "7" : {
                id: "7",
                userId: "5",
                text: "Why use Vue when you can just use React?",
                date: new Date(2022, 4, 18, 11, 5, 20 ,3)
            },
            "8" : {
                id: "8",
                userId: "4",
                text: "Angular is terrible",
                date: new Date(2022, 4, 20, 21, 3, 5, 1)
            },
            "9" : {
                id: "9",
                userId: "6",
                text: "Angular is good if you know how to use it.",
                date: new Date(2022, 4, 21, 22, 10, 3, 5)
            },
            "10" : {
                id: "10",
                userId: "2",
                text: "No one using Scala",
                date: new Date(2022, 4, 21, 23, 10, 49, 21)
            }
        },
        allIds: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    }
}

export const messageSlice = createSlice({
        name: 'message',
        initialState: initialState,
        reducers: {
            // add a channel
            addMessage: (state: MessageState, action: {payload: {userId: number, text: string, date: Date}}) => {
                const lastId : string = state.entities.allIds[state.entities.allIds.length - 1];
                const newId : string = (parseInt(lastId) + 1).toString();

                state.entities.id[newId] = {
                    id: newId,
                    userId: action.payload.userId.toString(),
                    text: action.payload.text,
                    date: action.payload.date
                };
                state.entities.allIds.push(newId);
            },
        }
    }
);

export const { addMessage } = messageSlice.actions;

export default messageSlice.reducer;