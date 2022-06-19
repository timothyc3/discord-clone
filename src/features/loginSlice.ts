import {createAsyncThunk, createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {login} from "../firebase";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

interface MessageState {
    uid: string
    settings: {}
    loading: boolean
}

const handleLogin = createAsyncThunk('servers/fetchLoginuData',
    async (loginInfo: {email: string, password: string}) => {
    const result = await login(loginInfo.email, loginInfo.password);
    return result.user.uid;
})

export const loginSlice = createSlice({
        name: 'message',
        initialState: {uid: "", settings: {}, loading: false} as MessageState,
        reducers: {},
        extraReducers: (builder) => {
        // if fetching data from firebase is fulfilled, then we save the server data to state.entities
            builder.addCase(handleLogin.fulfilled,
                (state, action) => {
                    state.loading = false;
                    state.uid = action.payload;
                });
            builder.addCase(handleLogin.pending,
                (state, action) => {
                    state.loading = true;
                });
            builder.addCase(handleLogin.rejected,
                (state, action) => {
                    state.loading = false;
                });
    }
    }
);

export { handleLogin }
export default loginSlice.reducer;