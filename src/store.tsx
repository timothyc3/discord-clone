import {configureStore} from "@reduxjs/toolkit";
import {serverSlice} from "./features/serverSlice";
import {channelSlice} from "./features/channelSlice";

export default configureStore({
    reducer: {
        server: serverSlice.reducer,
        channel: channelSlice.reducer
    }
})