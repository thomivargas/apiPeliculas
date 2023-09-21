import { useContext } from "react"
import { PeliculasContext } from "../context/PeliculasContext";
import SwiperCard from "../components/SwiperCard";

const Series = () => {
  const { seriesTendencias } = useContext(PeliculasContext)

  return (
    <section className="my-5">
      <h1 className="text-lg mx-2 lg:mx-0 mt-10 mb-5 xl:text-2xl">Series en tendencias</h1>
      <SwiperCard array={seriesTendencias} />
    </section>
  )
}

export default Series

