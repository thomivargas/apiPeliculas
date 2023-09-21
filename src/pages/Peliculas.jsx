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
    <>
      <section className="my-5">
        <h1 className="text-lg mx-2 lg:mx-0 mt-10 mb-5 xl:text-2xl">Peliculas en tendencias</h1>
        <SwiperCard array={peliculasTendencias}/>
      </section>
      <section className="my-5">
        <h1 className="text-lg mx-2 lg:mx-0 mb-5 xl:text-2xl">Peliculas de drama</h1>
        <SwiperCard array={dramas}/>
      </section>
      <section className="my-5">
        <h1 className="text-lg mx-2 lg:mx-0 mb-5 xl:text-2xl">Peliculas de Terror</h1>
        <SwiperCard array={terror}/>
      </section>
      <section className="my-5">
        <h1 className="text-lg mx-2 lg:mx-0 mb-5 xl:text-2xl">Peliculas de Animacion</h1>
        <SwiperCard array={animation}/>
      </section>
      <section className="my-5">
        <h1 className="text-lg mx-2 lg:mx-0 mb-5 xl:text-2xl">Peliculas de Guerras</h1>
        <SwiperCard array={war}/>
      </section>
    </>
  )
}

export default Peliculas