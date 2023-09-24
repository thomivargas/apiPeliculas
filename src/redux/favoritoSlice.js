import { createSlice } from "@reduxjs/toolkit";

const favoritoSlice = createSlice({
    name: 'favoritos',
    initialState: {
        favoritos: [],
        estadoCard: {},
    },
    reducers: {
        setFavoritos: (state, action) => {
            state.favoritos = [...state.favoritos, action.payload]
        },
        filterFavoritos: (state, action) => {
            state.favoritos = action.payload;
        },
        setEstadoCard: (state, action) => {
            state.estadoCard[action.payload.id] = action.payload.estadoCard;
        }
    },
})

export const { setFavoritos, filterFavoritos, setEstadoCard } = favoritoSlice.actions

export const { initialState: favoritoInitialState } = favoritoSlice;
export default favoritoSlice.reducer;