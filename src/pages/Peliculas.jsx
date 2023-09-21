import { useContext } from "react"
import { PeliculasContext } from "../context/PeliculasContext"
import SwiperCard from "../components/SwiperCard"

const Peliculas = () => {
  const {
    peliculasTendencias,
    dramas,
    terror,
    animation,
    war 
  } = useContext(PeliculasContext)

  return (
    <section className="my-8 mx-3 xl:mx-5 2xl:mx-2 flex flex-col justify-center gap-5 text-lg xl:text-2xl uppercase font-bold">
      <div>
        <h1 className="mb-2">Peliculas en tendencias</h1>
        <SwiperCard array={peliculasTendencias}/>
      </div>
      <div>
        <h1 className="mb-2">Peliculas de drama</h1>
        <SwiperCard array={dramas}/>
      </div>
      <div>
        <h1 className="mb-2">Peliculas de Terror</h1>
        <SwiperCard array={terror}/>
      </div>
      <div>
        <h1 className="mb-2">Peliculas de Animacion</h1>
        <SwiperCard array={animation}/>
      </div>
      <div>
        <h1 className="mb-2">Peliculas de Guerras</h1>
        <SwiperCard array={war}/>
      </div>
    </section>
  )
}

export default Peliculas