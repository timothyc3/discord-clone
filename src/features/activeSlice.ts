import {createSlice} from "@reduxjs/toolkit";

interface ActiveState {
    levelOne: string,
    levelTwo: string
}

const initialState : ActiveState = {
    levelOne: "discover",
    levelTwo: "1"
}

export const activeSlice = createSlice(
    {
        name: "active",
        initialState: initialState,
        reducers: {
            updateLevelOne: (state, action: {payload: string}) => {
                state.levelOne = action.payload
            },
            updateLevelTwo: (state, action: {payload: string}) => {
                state.levelTwo = action.payload
            }
        }
    }
);

export const { updateLevelOne, updateLevelTwo } = activeSlice.actions;

export default activeSlice.reducer;