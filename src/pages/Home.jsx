import { useEffect, useState } from "react"
import { getTendencias, getDiscover } from '../data/httpClient'
import SwiperCard from "../components/SwiperCard";


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
      <section className="my-5">
        <h1 className="text-xl mx-10 mb-5 xl:text-2xl">Tendencias</h1>
        <SwiperCard array={peliculas}/>
      </section>
      <section className='my-5'>
        <h1 className="text-xl lg:text-2xl">Recomendadas para ti</h1>
        <SwiperCard array={peliculasDiscover}/>
    </section>
    </>
  )
}

export default Home
