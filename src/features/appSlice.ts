import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { store } from "../store/store";


interface AppSliceState {
    roomId: string
}

const initialState: AppSliceState = {
    roomId: ''
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    // Actions are defined inside of the reducer
    reducers: {
        enterRoom: (state, action: PayloadAction<AppSliceState>) => { state.roomId = action.payload.roomId }
    },
})

export const { enterRoom } = appSlice.actions;

type RootState = ReturnType<typeof store.getState>;

export const selectRoomId = (state: RootState) => state.app.roomId;

export default appSlice.reducer;
