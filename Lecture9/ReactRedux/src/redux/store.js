import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import authReducer from './slices/authSlice'
import sidebarReducer from "./slices/sidebarSlice";
import itemsReducer from "./slices/itemsSlice";

export default configureStore({
    reducer: {
        items: itemsReducer,
        user: userReducer,
        auth: authReducer,
        sidebar: sidebarReducer
    },
//    middleware: getDefaultMiddleware({serializableCheck: false})
})
