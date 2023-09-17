import { useState } from "react";
import { Link } from "react-router-dom";

const RecomendarCard = ({pelicula}) => {
  const [ favorito, setFavorito ] = useState(false)
  const imageURL = "https://image.tmdb.org/t/p/w200"+pelicula.poster_path;

  const cambiarfecha = () => {
    const fecha = pelicula.release_date
    const partes = fecha.split('-')
    const year = partes[0]
    return year
  }

  const changeFavorito = () => {
    setFavorito(!favorito)
  }

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <img src={imageURL} className="rounded-xl" width={260} alt={pelicula.title} />
        <div onClick={changeFavorito} className="p-2 bg-gray-800 rounded-full absolute top-2 right-2 opacity-75 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${favorito && 'fill-white'} w-4 h-4`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
          </svg>
        </div>
      </div>
      <ul className="flex gap-3 p-1 my-1 items-center text-sm ">
        <li>{cambiarfecha()}</li>
        <li className="bg-gray-800 rounded-md font-semibold py-0.5 px-1.5">{`${pelicula.adult ? '+18' : '+13'}`}</li>
      </ul>
      <Link to={`/peliculas/${pelicula.id}`} className="cursor-pointer font-semibold text-lg text-center hover:underline">{pelicula.title}</Link>
    </div>
  )
}

export default RecomendarCard
