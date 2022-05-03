import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: '',
    },
    reducers: {
        getUserSuccess: (state, action) => {
            state.value = action.payload;
        },
    },
})

export const { getUserSuccess } = userSlice.actions

export default userSlice.reducer