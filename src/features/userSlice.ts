import {createAsyncThunk, createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {User} from "../types"
import { getUserData } from "../firebase";

interface UserState {
    entities: { [key: string]: User },
    ids: string[]
}

const fetchUserData = createAsyncThunk('users/fetchUserData',
    async () => {
        return await getUserData();
    });

const sendUserData = createAsyncThunk('users/sendUserData', async() => {
    
})

export const userSlice = createSlice({
    name: 'user',
    initialState: createEntityAdapter().getInitialState() as UserState,
    reducers: {
    },
    extraReducers: (builder) => {
        // if fetching data from firebase is fulfilled, then we save the server data to state.entities
        builder.addCase(fetchUserData.fulfilled, (state, action) => {
            state.entities = action.payload;
            state.ids = Object.keys(action.payload);
        })
    }
});

// export const { } = userSlice.actions;
export { fetchUserData }
export default userSlice.reducer;