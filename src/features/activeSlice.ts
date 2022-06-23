import {createSlice} from "@reduxjs/toolkit";

interface ActiveState {
    levelOne: string,
    levelTwo: string,
    createServer: boolean
}

const initialState: ActiveState = {
    levelOne: "Discover",
    levelTwo: "1",
    createServer: false
}

export const activeSlice = createSlice(
    {
        name: "active",
        initialState: initialState,
        reducers: {
            updateLevelOne: (state, action: { payload: string }) => {
                state.levelOne = action.payload
            },
            updateLevelTwo: (state, action: { payload: string }) => {
                state.levelTwo = action.payload
            },
            toggleCreateServer: (state, action) => {
                state.createServer = !state.createServer
            }
        }
    }
);

export const {updateLevelOne, updateLevelTwo} = activeSlice.actions;

export default activeSlice.reducer;