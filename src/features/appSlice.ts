import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        roomId: ''
    },
    // Actions are defined inside of the reducer
    reducers: {
        enterRoom: (state, action) => state.roomId = action.payload.roomId,
    },
})

export const { enterRoom } = appSlice.actions;

export const selectRoomId = (state: any) => state.app.roomId;

export default appSlice.reducer;
