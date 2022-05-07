import {configureStore} from "@reduxjs/toolkit";
import {serverSlice} from "./features/serverSlice";

export default configureStore({
    reducer: {
        server: serverSlice.reducer
    }
})