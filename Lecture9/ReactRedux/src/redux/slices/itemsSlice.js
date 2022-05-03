import { createSlice } from '@reduxjs/toolkit'

export const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        value: [],
    },
    reducers: {
        getItems: (state, action) => {
            state.value = action.payload;
        },
    },
})

export const { getItems } = itemsSlice.actions

export default itemsSlice.reducer