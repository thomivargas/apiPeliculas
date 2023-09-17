import { useEffect, useState } from "react"
import { getDiscover } from '../data/httpClient'
import RecomendarCard from "./RecomendarCard"

const Recomendar = () => {
    const [ peliculas, setPeliculas ] = useState([])

    useEffect(() => {
      const fetchData = async () => {
        const data = await getDiscover()
        setPeliculas(data.results)
      }
      fetchData()
    }, [])
    console.log(peliculas)
  return (
    <section className='my-10'>
      <h1 className="text-2xl">Recomendadas para ti</h1>
      <div className="my-5 grid grid-cols-5 gap-y-6">
        {peliculas.map( pelicula => (
          <RecomendarCard key={pelicula.id} pelicula={pelicula} />
        ))}
      </div>
    </section>
  )
}

export default Recomendar
