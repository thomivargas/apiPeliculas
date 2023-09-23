import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getDetalle = createAsyncThunk('detalle/getDetalle',
async ({tipo, id}) => {
    const BASE_URL = 'https://api.themoviedb.org/3'
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTVhZTg4NmRhYmJhZDkwYzFiZjg2MGJlZmJlNzg0MiIsInN1YiI6IjY0ZTAxZmIzMzcxMDk3MDBmZmI5ZjQ0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.92eVJFke5AgtC75Xm0rjb4lcIA1TbjG84BOMfDuoLzM'
      }
    };
    const url = `${BASE_URL}/${tipo}/${id}?language=en-US`
    try {
      const res = await fetch(url, options);
      if(!res.ok){
        throw new Error(`error al obtener ${tipo}`)
      }
      const data = await res.json();
      return data
    } catch (err) {
      throw err;
    }
})

const detalleSlice = createSlice({
    name: 'detalle',
    initialState: {
        data: [],
        loadingDetalle: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(getDetalle.pending, (state) => {
            state.loadingDetalle = true;
            state.error = null;
          })
          .addCase(getDetalle.fulfilled, (state, action) => {
            state.loadingDetalle = false;
            state.data = action.payload;
          })
          .addCase(getDetalle.rejected, (state, action) => {
            state.loadingDetalle = false;
            state.error = action.error.message;
          })
  }
})

export const { initialState: detalleInitialState } = detalleSlice;
export default detalleSlice.reducer;