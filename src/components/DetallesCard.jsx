import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getTendencias } from "../redux/tendenciasSlice";
import { getDetalle } from "../redux/detalleSlice"
import { useParams } from "react-router-dom"
import SwiperCard from "./SwiperCard"

import votos from "../assets/votos.svg"
import start from "../assets/start.svg"
import reloj from "../assets/reloj.svg"
import personas from "../assets/personas.svg"

const MovieCard = () => {
  const [hovered, setHovered] = useState(false);
  const dispatch = useDispatch();
  const tendencias = useSelector((state) => state.tendencias.data);
  const detalle = useSelector((state) => state.detalle.data);
  const loading = useSelector((state) => state.tendencias.loading);

  const {tipo, id} = useParams()

  useEffect(() => {
    //tendencias
    if(tipo === 'peliculas'){
      dispatch(getTendencias('movie'));
    } else {
      dispatch(getTendencias('tv'))
    }
    //obtener detalle movie o serie
    if(tipo === 'peliculas'){
      dispatch(getDetalle({tipo: 'movie', id}))
    } else {
      dispatch(getDetalle('tv', id))
    }
  }, [id, tipo, dispatch])

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const imageOverlay = hovered && (
    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-75 p-2 rounded-xl">
      <img src={start} alt="start" />
    </div>
  );
  if (loading) return <p>loading...</p>
  return (
    <>
      <section className="w-full xl:h-[700px] flex flex-col md:flex-row items-center gap-10 xl:gap-24 mt-10 xl:mt-0 px-4 xl:px-0">
        <div className="w-full md:w-[40%] flex flex-col items-center gap-2 mt-5 md:mt-0">
          <a target="_blank" href={detalle.homepage} className="cursor-pointer text-center text-xl uppercase w-[400px] hover:underline">{detalle.title || detalle.name}</a>
          <a href={detalle.homepage} target={detalle.homepage && "_blank"} className="relative cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img className="rounded-xl" width={300} src={`https://image.tmdb.org/t/p/w300/${detalle?.poster_path}`} alt={detalle.name} />
            {imageOverlay}
          </a>

          <ul className="flex gap-2 mt-2">
            {detalle.genres?.map((genero, index) => (
              <div key={genero.id} className="flex gap-2 items-center">
                <li>{genero.name}</li>
                {index !== detalle.genres?.length - 1 && (
                  <div className="p-0.5 rounded-full bg-white"></div>
                )}
              </div>
            ))}
          </ul>
          <div className="flex gap-2 items-center">
            <div className="flex gap-1">
              <img src={votos} width={20} alt="votos" />
              <p>{parseFloat(detalle.vote_average).toFixed(1)}</p>
            </div>
            <p className="bg-gray-800 rounded-md font-semibold py-0.5 px-1.5">{`${detalle.adult ? '+18' : '+13'}`}</p>
          </div>
        </div>
        <div className="w-full md:w-[750px] flex flex-col items-center md:items-start gap-5">
          <h1 className="text-2xl uppercase">Compañias productoras:</h1>
          <div className="flex flex-col lg:flex-row gap-2 items-center md:items-start lg:items-center">
            {detalle.production_companies?.slice(0, 3).map((produccion, index) => (
              <div key={produccion.id} className="flex gap-3 items-center">
                <p className="text-center">{produccion.name}</p>
                {index !== detalle.production_companies?.slice(0, 3).length - 1 && (
                  <div className="p-0.5 rounded-full bg-white hidden lg:block"></div>
                )}
              </div>
            ))}
          </div>
          <h2 className="text-2xl uppercase mt-5">Sinopsis:</h2>
          <p className="text-center px-4 md:text-left md:px-0 md:pr-32">{detalle.overview}</p>
          <div className="flex gap-2">
            <h2>Idiomas:</h2>
            {detalle.spoken_languages?.map(idioma => <p key={idioma.english_name}> {idioma.english_name}.</p>)}
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <img src={reloj} width={30} alt="reloj" />
              <p>{detalle.runtime? `${detalle.runtime} minutos` : `${detalle.seasons?.length} temporadas`}.</p>
            </div>
            <div className="flex gap-2 items-center">
              <img src={personas} width={30} alt="personas" />
              <p>{detalle.popularity} de popularidad</p>
            </div>
          </div>
        </div>
      </section>
      <div className="my-5 text-xl mx-3 xl:mx-10 xl:text-2xl">
        <h1>{tipo === 'peliculas' ? 'Peliculas' : 'Series'} en tendencias</h1>
        <SwiperCard imagen={'backdrop_path'} array={tendencias} cantidad={2}/>
      </div>
    </>
  )
}

export default MovieCard
