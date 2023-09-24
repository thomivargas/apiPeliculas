import { configureStore } from "@reduxjs/toolkit";
import tendenciasSlice from "./redux/tendenciasSlice"
import generosSlice from "./redux/generosSlice"
import detalleSlice from "./redux/detalleSlice";

const store = configureStore({
    reducer: {
        tendencias: tendenciasSlice,
        generos: generosSlice,
        detalle: detalleSlice,
    }
})
export default store