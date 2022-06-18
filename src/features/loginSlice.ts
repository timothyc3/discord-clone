import {createAsyncThunk, createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {login} from "../firebase";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

interface MessageState {
    uid: string
    settings: {}
}

const handleLogin = createAsyncThunk('servers/fetchLoginuData',
    async (loginInfo: {email: string, password: string}) => {
    const result = await login(loginInfo.email, loginInfo.password);
    return result.user.uid;

})

export const loginSlice = createSlice({
        name: 'message',
        initialState: {uid: "", settings: {}} as MessageState,
        reducers: {

        },
        extraReducers: (builder) => {
        // if fetching data from firebase is fulfilled, then we save the server data to state.entities
            builder.addCase(handleLogin.fulfilled,
                (state, action) => {
                    state.uid = action.payload;
                });
    }
    }
);

export { handleLogin }
export default loginSlice.reducer;