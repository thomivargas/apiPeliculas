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
  return (
    <section className='my-10 mx-3 xl:mx-8'>
      <h1 className="text-xl lg:text-2xl">Recomendadas para ti</h1>
      <div className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-y-6">
        {peliculas.map( pelicula => (
          <RecomendarCard key={pelicula.id} pelicula={pelicula} />
        ))}
      </div>
    </section>
  )
}

export default Recomendar
