import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getBuscador = createAsyncThunk('search/getBuscador',
async ({tipo, buscar}) => {
    const BASE_URL = 'https://api.themoviedb.org/3'
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTVhZTg4NmRhYmJhZDkwYzFiZjg2MGJlZmJlNzg0MiIsInN1YiI6IjY0ZTAxZmIzMzcxMDk3MDBmZmI5ZjQ0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.92eVJFke5AgtC75Xm0rjb4lcIA1TbjG84BOMfDuoLzM'
      }
    };
    const url = `${BASE_URL}/search/${tipo}?query=${buscar}&include_adult=false&language=en-US&page=1`
    try {
      const res = await fetch(url, options);
      if(!res.ok){
        throw new Error(`error al buscar ${tipo}`)
      }
      const data = await res.json();
      return data.results
    } catch (err) {
      throw err;
    }
})

const buscadorSlice = createSlice({
    name: 'buscador',
    initialState: {
        data: [],
        loadingSearch: false,
        error: null,
        buscar: ''
    },
    reducers: {
      setBuscar: (state, action) => {
        state.buscar = action.payload;
      },
    },
    extraReducers: (builder) => {
        builder
          .addCase(getBuscador.pending, (state) => {
            state.loadingSearch = true;
            state.error = null;
          })
          .addCase(getBuscador.fulfilled, (state, action) => {
            state.loadingSearch = false;
            state.data = action.payload;
          })
          .addCase(getBuscador.rejected, (state, action) => {
            state.loadingSearch = false;
            state.error = action.error.message;
          })
  }
})

export const { setBuscar } = buscadorSlice.actions
export const { initialState: buscadorInitialState } = buscadorSlice;
export default buscadorSlice.reducer;