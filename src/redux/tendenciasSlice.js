import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getTendencias = createAsyncThunk('tendencias/getTendencias',
async (tipo) => {
    const BASE_URL = 'https://api.themoviedb.org/3'
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTVhZTg4NmRhYmJhZDkwYzFiZjg2MGJlZmJlNzg0MiIsInN1YiI6IjY0ZTAxZmIzMzcxMDk3MDBmZmI5ZjQ0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.92eVJFke5AgtC75Xm0rjb4lcIA1TbjG84BOMfDuoLzM'
      }
    };
    const url = `${BASE_URL}/trending/${tipo}/day?language=en-US`;
    try {
        const res = await fetch(url, options);
        if(!res.ok){
          throw new Error('error al obtener tendencias')
        }
        const data = await res.json();
        return data.results
      } catch (err) {
        throw err;
      }
})

const tendenciasSlice = createSlice({
  name: 'tendencias',
  initialState: {
    data: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTendencias.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTendencias.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getTendencias.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
})

export const { initialState: tendenciasInitialState } = tendenciasSlice;
export default tendenciasSlice.reducer;