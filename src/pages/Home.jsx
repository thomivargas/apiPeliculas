import { useContext } from "react";
import { PeliculasContext } from "../context/PeliculasContext"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTendencias } from "../redux/tendenciasSlice";
import SwiperCard from "../components/SwiperCard";
import Hero from "../components/Hero";


const Home = () => {
  const { dramas, war } = useContext(PeliculasContext)
  const dispatch = useDispatch();
  const tendencias = useSelector((state) => state.tendencias.data);
  const loading = useSelector((state) => state.tendencias.loading);

  useEffect(() => {
    dispatch(getTendencias('all')); 
  }, [dispatch]);

  if (loading) {
      return <p>Cargando...</p>;
  }

  return (
    <section className="my-8 mx-3 xl:mx-5 2xl:mx-2 flex flex-col justify-center gap-5 text-lg xl:text-2xl uppercase font-bold">
      <div>
        <Hero/>
      </div>
      <div>
        <h1 className="mb-2">Tendencias</h1>
        <SwiperCard array={tendencias}/>
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
