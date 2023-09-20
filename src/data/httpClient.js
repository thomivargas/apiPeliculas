const BASE_URL = 'https://api.themoviedb.org/3'
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTVhZTg4NmRhYmJhZDkwYzFiZjg2MGJlZmJlNzg0MiIsInN1YiI6IjY0ZTAxZmIzMzcxMDk3MDBmZmI5ZjQ0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.92eVJFke5AgtC75Xm0rjb4lcIA1TbjG84BOMfDuoLzM'
  }
};
export async function getTendencias() {
  const url = `${BASE_URL}/trending/all/day?language=en-US`;
  try {
    const res = await fetch(url, options);
    const data = await res.json();
    return data
  } catch (err) {
    return console.error('error:' + err);
  }
}
export async function getDiscover(){
  const url = `${BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
  try{
    const res = await fetch(url, options);
    const data = await res.json();
    return data;
  } catch(err){
    return console.error('error:' + err);
  }
}
export async function getPelicula(id){
  const url = `${BASE_URL}/movie/${id}?language=en-US`
  try{
    const res = await fetch(url, options);
    const data = await res.json()
    return data
  } catch (err){
    console.error('error: ' +err)
  }
}
export async function getSerie(id){
  const url = `${BASE_URL}/tv/${id}?language=en-US`;
  try {
    const res = await fetch(url, options);
    const data = await res.json();
    return data
  } catch (error) {
    console.error(error)
  }
}
export async function getPeliculas(){
  const url = `${BASE_URL}/trending/movie/day?language=en-US`;
  try {
    const res = await fetch(url, options);
    const data = await res.json();
    return data
  } catch (error) {
    console.error(error)
  }
}
export async function getSeries(){
  const url = `${BASE_URL}/trending/tv/day?language=en-US`;
  try {
    const res = await fetch(url, options);
    const data = await res.json();
    return data
  } catch (error) {
    console.error(error)
  }
} 
export async function getGeneros(genero){
  const url = `${BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genero}`
  try {
    const res = await fetch(url, options);
    const data = await res.json();
    return data 
  } catch (error) {
    console.error(error)
  }
}