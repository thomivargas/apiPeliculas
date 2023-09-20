import { useEffect, useState } from "react"
import { getPeliculas, getGeneros } from '../data/httpClient'
import SwiperCard from "../components/SwiperCard"

const Peliculas = ({imagen}) => {
  const [ peliculas, setPeliculas ] = useState([])
  const [ dramas, setDramas ] = useState([])
  const [ terror, setTerror ] = useState([])
  const [ animation, setAnimation ] = useState([])
  const [ war, setWar ] = useState([])

  const fetchData = async () => {
    const data = await getPeliculas()
    setPeliculas(data.results)
  }

  const fetchDrama = async () => {
    const data = await getGeneros('18')
    setDramas(data.results)
  }
  const fetchTerror = async () => {
    const data = await getGeneros('53')
    setTerror(data.results)
  }

  const fetchAnimation = async () => {
    const data = await getGeneros('16')
    setAnimation(data.results)
  }

  const fetchWar = async () => {
    const data = await getGeneros('10752')
    setWar(data.results) 
  }

  useEffect(() => {
    fetchData()
    fetchDrama()
    fetchTerror()
    fetchAnimation()
    fetchWar()
  }, [])
  return (
    <>
      <section className="my-5">
        <h1 className="text-xl mx-10 mb-5 xl:text-2xl">Peliculas en tendencias</h1>
        <SwiperCard array={peliculas} imagen={imagen}/>
      </section>
      <section className="my-5">
        <h1 className="text-xl mx-10 mb-5 xl:text-2xl">Peliculas de drama</h1>
        <SwiperCard array={dramas} imagen={imagen}/>
      </section>
      <section className="my-5">
        <h1 className="text-xl mx-10 mb-5 xl:text-2xl">Peliculas de Terror</h1>
        <SwiperCard array={terror} imagen={imagen}/>
      </section>
      <section className="my-5">
        <h1 className="text-xl mx-10 mb-5 xl:text-2xl">Peliculas de Animacion</h1>
        <SwiperCard array={animation} imagen={imagen}/>
      </section>
      <section className="my-5">
        <h1 className="text-xl mx-10 mb-5 xl:text-2xl">Peliculas de Guerras</h1>
        <SwiperCard array={war} imagen={imagen}/>
      </section>
    </>
  )
}

export default Peliculas