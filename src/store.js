import { configureStore } from "@reduxjs/toolkit";
import tendenciasSlice from "./redux/tendenciasSlice"
import generosSlice from "./redux/generosSlice"
import detalleSlice from "./redux/detalleSlice";
import buscadorSlice from "./redux/buscadorSlice";

const store = configureStore({
    reducer: {
        tendencias: tendenciasSlice,
        generos: generosSlice,
        detalle: detalleSlice,
        buscador: buscadorSlice
    }
})
export default store