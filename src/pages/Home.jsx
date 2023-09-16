import { useEffect, useState } from "react"
import { getTendencias } from '../data/httpClient'

const Home = () => {
  const [ peliculas, setPeliculas ] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTendencias()
      setPeliculas(data.results)
    }
    fetchData()
  }, [])

  return (
    <>
      <header>
        <h1 className='text-red-500'>Peliculas</h1>
      </header>
      <ul>
        {peliculas.map( pelicula => (
          <li>{pelicula.title}</li>
        ))}
      </ul>
    </>
  )
}

export default Home
