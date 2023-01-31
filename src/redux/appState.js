import { createSlice } from "@reduxjs/toolkit";

export const appStateSlice = createSlice({
    name: 'app_state',
    initialState: {
        isAuthenticated: localStorage.getItem('bearerToken') ? true : false,
        token: localStorage.getItem('bearerToken')
    },
    reducers: {
        setAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload
        },
        setToken: (state, action) => {
            state.token = action.payload
        }
    }
})

export const { setAuthenticated, setToken } = appStateSlice.actions
export default appStateSlice.reducer
