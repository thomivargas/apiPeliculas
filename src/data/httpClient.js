const BASE_URL = 'https://api.themoviedb.org/3'
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTVhZTg4NmRhYmJhZDkwYzFiZjg2MGJlZmJlNzg0MiIsInN1YiI6IjY0ZTAxZmIzMzcxMDk3MDBmZmI5ZjQ0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.92eVJFke5AgtC75Xm0rjb4lcIA1TbjG84BOMfDuoLzM'
  }
};
export async function getGenerosID(tipo){
  const url = `${BASE_URL}/genre/${tipo}/list?language=en`;
  try {
    const res = await fetch(url, options);
    const data = await res.json();
    return data 
  } catch (error) {
    console.error(error)
  }
}