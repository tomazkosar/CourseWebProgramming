import { createSlice } from '@reduxjs/toolkit'

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: {
        value: false,
    },
    reducers: {
        getSideBarShown: (state, action) => {
            state.value = action.payload;
        },
    },
})

export const { getSideBarShown } = sidebarSlice.actions

export default sidebarSlice.reducer