import { useContext } from "react"
import { PeliculasContext } from "../context/PeliculasContext";
import SwiperCard from "../components/SwiperCard";

const Series = () => {
  const { seriesTendencias } = useContext(PeliculasContext)

  return (
    <section className="my-8 mx-3 xl:mx-5 2xl:mx-2 flex flex-col justify-center gap-5 text-lg xl:text-2xl uppercase font-bold">
      <div>
        <h1 className="mb-2">Series en tendencias</h1>
        <SwiperCard array={seriesTendencias} />
      </div>
    </section>
  )
}

export default Series

