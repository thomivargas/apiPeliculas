const BASE_URL = 'https://api.themoviedb.org/3'
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTVhZTg4NmRhYmJhZDkwYzFiZjg2MGJlZmJlNzg0MiIsInN1YiI6IjY0ZTAxZmIzMzcxMDk3MDBmZmI5ZjQ0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.92eVJFke5AgtC75Xm0rjb4lcIA1TbjG84BOMfDuoLzM'
  }
};
export async function getTendenciasTipo(tipo){
  const url = `${BASE_URL}/trending/${tipo}/day?language=en-US`;
  try {
    const res = await fetch(url, options);
    const data = await res.json();
    return data
  } catch (err) {
    return console.error('error:' + err);
  }
}
export async function getDetalles(tipo, id){
  const url = `${BASE_URL}/${tipo}/${id}?language=en-US`
  try{
    const res = await fetch(url, options);
    const data = await res.json()
    return data
  } catch (err){
    console.error('error: ' +err)
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