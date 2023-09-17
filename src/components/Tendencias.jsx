import { useEffect, useState } from "react"
import { getTendencias } from '../data/httpClient'
import TendenciasCard from "./TendenciasCard"


const Tendencias = () => {
    const [ peliculas, setPeliculas ] = useState([])

    useEffect(() => {
      const fetchData = async () => {
        const data = await getTendencias()
        setPeliculas(data.results)
      }
      fetchData()
    }, [])

  return (
    <section className="my-5">
      <h1 className="text-2xl">Tendencias</h1>
      <div className="mt-5 flex overflow-x-scroll overflow-y-hidden w-full">
        <div className="flex gap-10">
            {peliculas.map( pelicula => (
                <div key={pelicula.id} className="w-[250px]">
                    <TendenciasCard pelicula={pelicula} />
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Tendencias