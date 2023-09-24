import { configureStore } from "@reduxjs/toolkit";
import tendenciasSlice from "./redux/tendenciasSlice"
import generosSlice from "./redux/generosSlice"
import detalleSlice from "./redux/detalleSlice";
import favoritoSlice from "./redux/favoritoSlice";

const store = configureStore({
    reducer: {
        tendencias: tendenciasSlice,
        generos: generosSlice,
        detalle: detalleSlice,
        favoritos: favoritoSlice
    }
})
export default store