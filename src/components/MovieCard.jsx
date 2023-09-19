import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getPelicula } from "../data/httpClient"

import votos from "../assets/votos.svg"
import start from "../assets/start.svg"
import reloj from "../assets/reloj.svg"
import personas from "../assets/personas.svg"
import Tendencias from "./Tendencias"

const MovieCard = () => {
  const [pelicula, setPelicula] = useState({})
  const [hovered, setHovered] = useState(false);
  const [circulo, setCirculo] = useState(window.innerWidth >= 1024 && true);
  const { id } = useParams()
  const imageURL = "https://image.tmdb.org/t/p/w400" + pelicula.poster_path;

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPelicula(id)
      setPelicula(data)
    }
    fetchData()

    const cambiarCirculo = () => {
      if (window.innerWidth < 1024) {
        setCirculo(false)
      } else {
        setCirculo(true)
      }
    }

    window.addEventListener("resize", cambiarCirculo);

    return () => {
      window.removeEventListener("resize", cambiarCirculo);
    };

  }, [id, circulo])

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <>
      <section className="w-full xl:h-[700px] flex flex-col md:flex-row items-center gap-10 xl:gap-24 mt-10 xl:mt-0 px-4 xl:px-0">
        <div className="w-full md:w-[40%] flex flex-col items-center gap-2 mt-5 md:mt-0">
          <a target="_blank" href={pelicula.homepage} className="cursor-pointer text-center text-xl uppercase w-[400px] hover:underline">{pelicula.original_title}</a>
          <a href={pelicula.homepage} target='_blank' className="relative cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img className="rounded-xl" width={300} src={imageURL} alt={pelicula.name} />
            {hovered && (
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-75 p-2 rounded-xl">
                <img src={start} alt="start" />
              </div>
            )}
          </a>

          <ul className="flex gap-2 mt-2">
            {pelicula.genres?.map((genero, index) => (
              <div key={genero.id} className="flex gap-2 items-center">
                <li>{genero.name}</li>
                {index !== pelicula.genres?.length - 1 && (
                  <div className="p-0.5 rounded-full bg-white"></div>
                )}
              </div>
            ))}
          </ul>
          <div className="flex gap-2 items-center">
            <div className="flex gap-1">
              <img src={votos} width={20} alt="votos" />
              <p>{parseFloat(pelicula.vote_average).toFixed(1)}</p>
            </div>
            <p className="bg-gray-800 rounded-md font-semibold py-0.5 px-1.5">{`${pelicula.adult ? '+18' : '+13'}`}</p>
          </div>
        </div>
        <div className="w-full md:w-[750px] flex flex-col items-center md:items-start gap-5">
          <h1 className="text-2xl uppercase">Compañias productoras:</h1>
          <div className="flex flex-col lg:flex-row gap-2 items-center md:items-start lg:items-center">
            {pelicula.production_companies?.slice(0, 3).map((produccion, index) => (
              <div key={produccion.id} className="flex gap-3 items-center">
                <p className="text-center">{produccion.name}</p>
                {circulo ? index !== pelicula.production_companies?.slice(0, 3).length - 1 && (
                  <div className="p-0.5 rounded-full bg-white"></div>
                ) : ''}
              </div>
            ))}
          </div>
          <h2 className="text-2xl uppercase mt-5">Sinopsis:</h2>
          <p className="text-center px-4 md:text-left md:px-0 md:pr-32">{pelicula.overview}</p>
          <div className="flex gap-2">
            <h2>Idiomas:</h2>
            {pelicula.spoken_languages?.map(idioma => <p> {idioma.english_name}.</p>)}
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <img src={reloj} width={30} alt="reloj" />
              <p>{pelicula.runtime} minutos.</p>
            </div>
            <div className="flex gap-2 items-center">
              <img src={personas} width={30} alt="personas" />
              <p>{pelicula.popularity} de popularidad</p>
            </div>
          </div>
        </div>
      </section>
      <Tendencias imagen={'backdrop_path'} titulo={'Tambien te puede interesar:'} />
    </>
  )
}

export default MovieCard
