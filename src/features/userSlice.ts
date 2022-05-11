import {createSlice} from "@reduxjs/toolkit";
import {User} from "../types"

interface UserState {
    status: 'idle' | 'loading',
    entities: {
        id: { [key: string]: User },
        allIds: string[]
    }
}

const initialState : UserState = {
    status: 'idle',
    entities: {id: {
            "1" : {
                id: "1",
                avatar: "",
                name: "George"
            },
            "2" : {
                id: "2",
                avatar: "",
                name: "Samantha"
            },
            "3" : {
                id: "3",
                avatar: "",
                name: "Tiffany"
            },
            "4" : {
                id: "4",
                avatar: "",
                name: "Matilda"
            },
            "5" : {
                id: "5",
                avatar: "",
                name: "Sam"
            },
            "6" : {
                id: "6",
                avatar: "",
                name: "Frank"
            },
        },
        allIds: ["1", "2", "3", "4", "5", "6"]
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
    }
});

// export const { } = userSlice.actions;

export default userSlice.reducer;