import { useContext } from "react";
import { PeliculasContext } from "../context/PeliculasContext"
import SwiperCard from "../components/SwiperCard";


const Home = () => {
  const { tendencias, peliculasDiscover } = useContext(PeliculasContext)

  return (
    <>
      <section className="my-5">
        <h1 className="text-lg mx-2 lg:mx-0 mt-10 mb-5 xl:text-2xl">Tendencias</h1>
        <SwiperCard array={tendencias}/>
      </section>
      <section className='my-5'>
        <h1 className="text-lg mx-2 lg:mx-0 mb-5 xl:text-2xl">Recomendadas para ti</h1>
        <SwiperCard array={peliculasDiscover}/>
    </section>
    </>
  )
}

export default Home
