import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'isAuthenticated',
    initialState: {
        value: false,
    },
    reducers: {
        getAuthentication: (state, action) => {
            state.value = action.payload;
        },
    },
})

export const { getAuthentication } = authSlice.actions

export default authSlice.reducer