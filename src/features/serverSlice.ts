import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {Server} from "../types";
import {getServerData} from "../firebase";
import {useAppDispatch} from "../hooks";

interface ServerState {
    entities: {
        id: { [key: string]: Server },
        allIds: string[]
    }
}

const fetchServerData = createAsyncThunk('servers/fetchServerData',
    async () => {
    const dispatch = useAppDispatch();
    await getServerData().then(result => {
        console.log(result);
        dispatch(serverSlice.actions.serverLoaded(result));
    });
})

const initialState : any = {
    entities: {id: {
            "1" : {
                id: "1",
                name: 'Potato',
                channelIds: ["1", "2"],
                userIds: ["1", "2", "3", "4", "5"]
            },
            "2" : {
                id: "2",
                name: 'Redux',
                channelIds: ["3", "4"],
                userIds: ["3", "4", "5", "6"]
            },
            "3" : {
                id: "3",
                name: 'Svelte',
                channelIds: ["5"],
                userIds: ["1", "2"]
            },
        },
        allIds: ["1", "2", "3"]
    }
}

export const serverSlice = createSlice({
    name: 'servers',
    initialState: initialState,
    reducers: {
        // add loaded data into state
        serverLoaded: (state: ServerState, action: {payload: {[key: string]: Server}}) => {
            state.entities.id = action.payload
        },
        // adds a server to the server slice
        addServer: (state: ServerState, action: {payload: {name: string, userId: number}}) => {
            const lastId : string = state.entities.allIds[state.entities.allIds.length - 1];
            const newId : string = (parseInt(lastId) + 1).toString();

            state.entities.id[newId] = {
                id: newId,
                name: action.payload.name,
                channelIds: [],
                userIds: [action.payload.userId.toString()]
            };
            state.entities.allIds.push(newId);
        },

        updateServerChannels: (state: ServerState, action: {payload: {serverId: number, channelId: number}}) => {
            state.entities.id[action.payload.serverId].channelIds.push(action.payload.channelId.toString())
        }
    }
});

export const { addServer } = serverSlice.actions;
export { fetchServerData }

export default serverSlice.reducer;