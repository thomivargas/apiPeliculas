import { useEffect, useState } from "react"
import { getTendencias, getDiscover } from '../data/httpClient'
import RecomendarCard from "../components/RecomendarCard";
import Tendencias from "../components/Tendencias";


const Home = () => {
  const [ peliculas, setPeliculas ] = useState([])
  const [ peliculasDiscover, setPeliculasDiscover ] = useState([])
  
  const fetchTendencias = async () => {
    const data = await getTendencias()
    setPeliculas(data.results)
  }

  const fetchDiscover = async () => {
    const data = await getDiscover()
    setPeliculasDiscover(data.results)
  }

  useEffect(() => {
    fetchTendencias()
    fetchDiscover()
  }, [])

  return (
    <>
      <Tendencias peliculas={peliculas}/>
      <section className='my-10 mx-3 xl:mx-8'>
      <h1 className="text-xl lg:text-2xl">Recomendadas para ti</h1>
      <div className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-y-6">
        {peliculasDiscover.map( pelicula => (
          <RecomendarCard key={pelicula.id} pelicula={pelicula} />
        ))}
      </div>
    </section>
    </>
  )
}

export default Home
