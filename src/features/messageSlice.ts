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
                year: 2022,
                month: 4,
                day: 10,
                hour: 22,
                minute: 10,
                second: 13
            },
            "2" : {
                id: "2",
                userId: "2",
                text: "Cool, I am new here as well! Nice to meet you.",
                year: 2022,
                month: 4,
                day: 13,
                hour: 22,
                minute: 12,
                second: 30
            },
            "3" : {
                id: "3",
                userId: "4",
                text: "What is this channel about?",
                year: 2022,
                month: 4,
                day: 13,
                hour: 23,
                minute: 15,
                second: 3
            },
            "4" : {
                id: "4",
                userId: "3",
                text: "It is about redux.",
                year: 2022,
                month: 4,
                day: 14,
                hour: 1,
                minute: 5,
                second: 12
            },
            "5" : {
                id: "5",
                userId: "1",
                text: "I love Vue",
                year: 2022,
                month: 4,
                day: 17,
                hour: 1,
                minute: 20,
                second: 31
            },
            "6" : {
                id: "6",
                userId: "5",
                text: "React is also pretty good",
                year: 2022,
                month: 4,
                day: 18,
                hour: 10,
                minute: 3,
                second: 30
            },
            "7" : {
                id: "7",
                userId: "5",
                text: "Why use Vue when you can just use React?",
                year: 2022,
                month: 4,
                day: 18,
                hour: 11,
                minute: 5,
                second: 20
            },
            "8" : {
                id: "8",
                userId: "4",
                text: "Angular is terrible",
                year: 2022,
                month: 4,
                day: 20,
                hour: 21,
                minute: 3,
                second: 5
            },
            "9" : {
                id: "9",
                userId: "6",
                text: "Angular is good if you know how to use it.",
                year: 2022,
                month: 4,
                day: 21,
                hour: 22,
                minute: 10,
                second: 3
            },
            "10" : {
                id: "10",
                userId: "2",
                text: "No one using Scala",
                year: 2022,
                month: 4,
                day: 21,
                hour: 23,
                minute: 10,
                second: 49
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
                    year: action.payload.date.getFullYear(),
                    month: action.payload.date.getMonth(),
                    day: action.payload.date.getDate(),
                    hour: action.payload.date.getHours(),
                    minute: action.payload.date.getMinutes(),
                    second: action.payload.date.getSeconds()
                };
                state.entities.allIds.push(newId);
            },
        }
    }
);

export const { addMessage } = messageSlice.actions;

export default messageSlice.reducer;