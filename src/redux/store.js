import { configureStore } from "@reduxjs/toolkit"
import appStateReducer from './appState'

export default configureStore({
    reducer: {
        appState: appStateReducer
    }
})
