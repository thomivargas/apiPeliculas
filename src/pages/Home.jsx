import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTendencias } from "../redux/tendenciasSlice";
import { getDramas, getWar } from "../redux/generosSlice";
import SwiperCard from "../components/SwiperCard";
import Hero from "../components/Hero";


const Home = () => {
  const dispatch = useDispatch();
  const tendencias = useSelector((state) => state.tendencias.data);
  const dramas = useSelector((state) => state.generos.dramas);
  const war = useSelector((state) => state.generos.war);
  const loading = useSelector((state) => state.tendencias.loading);
  const loadingDramas = useSelector((state) => state.generos.loadingDramas);
  const loadingWar = useSelector((state) => state.generos.loadingWar);

  useEffect(() => {
    dispatch(getTendencias('all'));
    dispatch(getDramas())
    dispatch(getWar())
  }, [dispatch]);

  return (
    <section className="my-8 mx-3 xl:mx-5 2xl:mx-2 flex flex-col justify-center gap-5 text-lg xl:text-2xl uppercase font-bold">
      <div>
        <Hero />
      </div>
      {loading ? (<p>loading tendencias...</p>):(
      <div>
        <h1 className="mb-2">Tendencias</h1>
        <SwiperCard array={tendencias} />
      </div>)}
      {loadingDramas ? (<p>loading peliculas dramas...</p>):(
      <div>
        <h1 className="mb-2">Peliculas de Dramas</h1>
        <SwiperCard array={dramas} />
      </div>)}
      {loadingWar ? (<p>loading peliculas dramas...</p>) :(
      <div>
        <h1 className="mb-2">Peliculas de Guerras</h1>
        <SwiperCard array={war} />
      </div>)}
    </section>
  )
}

export default Home
