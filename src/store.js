import { configureStore } from "@reduxjs/toolkit";
import tendenciasSlice from "./redux/tendenciasSlice"

const store = configureStore({
    reducer: {
        tendencias: tendenciasSlice
    }
})
export default store