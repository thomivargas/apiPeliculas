import { useContext } from "react";
import { PeliculasContext } from "../context/PeliculasContext"
import SwiperCard from "../components/SwiperCard";


const Home = () => {
  const { tendencias, peliculasDiscover } = useContext(PeliculasContext)

  return (
    <section className="my-8 mx-3 xl:mx-5 2xl:mx-2 flex flex-col justify-center gap-5 text-lg xl:text-2xl uppercase font-bold">
      <div>
        <h1 className="mb-2">Tendencias</h1>
        <SwiperCard array={tendencias}/>
      </div>
      <div>
        <h1 className="mb-2">Recomendadas para ti</h1>
        <SwiperCard array={peliculasDiscover}/>
      </div>
    </section>
  )
}

export default Home
