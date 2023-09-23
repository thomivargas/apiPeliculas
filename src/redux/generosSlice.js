import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getGeneros = createAsyncThunk('generos/getGeneros',
async ({tipo, categoria}) => {
    const BASE_URL = 'https://api.themoviedb.org/3'
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTVhZTg4NmRhYmJhZDkwYzFiZjg2MGJlZmJlNzg0MiIsInN1YiI6IjY0ZTAxZmIzMzcxMDk3MDBmZmI5ZjQ0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.92eVJFke5AgtC75Xm0rjb4lcIA1TbjG84BOMfDuoLzM'
      }
    };
    const url = `${BASE_URL}/discover/${tipo}?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${categoria}`
    try {
      const res = await fetch(url, options);
      if(!res.ok){
        throw new Error('error al obtener generos')
      }
      const data = await res.json();
      return data.results
    } catch (err) {
      throw err;
    }
})
export const getDramas = createAsyncThunk('dramas/getDramas', 
async () => {
  const BASE_URL = 'https://api.themoviedb.org/3'
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTVhZTg4NmRhYmJhZDkwYzFiZjg2MGJlZmJlNzg0MiIsInN1YiI6IjY0ZTAxZmIzMzcxMDk3MDBmZmI5ZjQ0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.92eVJFke5AgtC75Xm0rjb4lcIA1TbjG84BOMfDuoLzM'
    }
  };
  const url = `${BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=18`
    const res = await fetch(url, options);
    if(!res.ok){
      throw new Error('error al obtener peliculas de drama')
    }
    const data = await res.json();
    return data.results
})
export const getWar = createAsyncThunk('war/getWar', 
async () => {
  const BASE_URL = 'https://api.themoviedb.org/3'
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTVhZTg4NmRhYmJhZDkwYzFiZjg2MGJlZmJlNzg0MiIsInN1YiI6IjY0ZTAxZmIzMzcxMDk3MDBmZmI5ZjQ0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.92eVJFke5AgtC75Xm0rjb4lcIA1TbjG84BOMfDuoLzM'
    }
  };
  const url = `${BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=10752`
    const res = await fetch(url, options);
    if(!res.ok){
      throw new Error('error al obtener peliculas de guerra')
    }
    const data = await res.json();
    return data.results
})

const generosSlice = createSlice({
    name: 'generos',
    initialState: {
        data: [],
        dramas: [],
        war: [],
        categoria: 0,
        loadingGeneros: false,
        loadingDramas: false,
        loadingWar: false,
        error: null
    },
    reducers: {
      setCategoria: (state, action) => {
        state.categoria = action.payload;
      },
    },
    extraReducers: (builder) => {
        builder
          .addCase(getGeneros.pending, (state) => {
            state.loadingGeneros = true;
            state.error = null;
          })
          .addCase(getGeneros.fulfilled, (state, action) => {
            state.loadingGeneros = false;
            state.data = action.payload;
          })
          .addCase(getGeneros.rejected, (state, action) => {
            state.loadingGeneros = false;
            state.error = action.error.message;
          })
          .addCase(getDramas.pending, (state) => {
            state.loadingDramas = true;
            state.error = null;
          })
          .addCase(getDramas.fulfilled, (state, action) => {
            state.loadingDramas = false;
            state.dramas = action.payload;
          })
          .addCase(getDramas.rejected, (state, action) => {
            state.loadingDramas = false;
            state.error = action.error.message;
          })
          .addCase(getWar.pending, (state) => {
            state.loadingWar = true;
            state.error = null;
          })
          .addCase(getWar.fulfilled, (state, action) => {
            state.loadingWar = false;
            state.war = action.payload;
          })
          .addCase(getWar.rejected, (state, action) => {
            state.loadingWar = false;
            state.error = action.error.message;
          });
  }
})

export const { setCategoria } = generosSlice.actions

export const { initialState: generosInitialState } = generosSlice;
export default generosSlice.reducer;