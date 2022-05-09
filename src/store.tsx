import {configureStore} from "@reduxjs/toolkit";
import {serverSlice} from "./features/serverSlice";
import {channelSlice} from "./features/channelSlice";
import {activeSlice} from "./features/activeSlice";

export const store = configureStore({
    reducer: {
        server: serverSlice.reducer,
        channel: channelSlice.reducer,
        active: activeSlice.reducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch