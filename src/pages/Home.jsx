import { useContext } from "react";
import { PeliculasContext } from "../context/PeliculasContext"
import SwiperCard from "../components/SwiperCard";
import Hero from "../components/Hero";


const Home = () => {
  const { tendencias, seriesTendencias, dramas, war } = useContext(PeliculasContext)

  return (
    <section className="my-8 mx-3 xl:mx-5 2xl:mx-2 flex flex-col justify-center gap-5 text-lg xl:text-2xl uppercase font-bold">
      <div className="">
        <Hero/>
      </div>
      <div>
        <h1 className="mb-2">Tendencias</h1>
        <SwiperCard array={tendencias}/>
      </div>
      <div>
        <h1 className="mb-2">Series en tendencias</h1>
        <SwiperCard array={seriesTendencias} />
      </div>
      <div>
        <h1 className="mb-2">Peliculas de drama</h1>
        <SwiperCard array={dramas}/>
      </div>
      <div>
        <h1 className="mb-2">Peliculas de Guerras</h1>
        <SwiperCard array={war}/>
      </div>
    </section>
  )
}

export default Home
