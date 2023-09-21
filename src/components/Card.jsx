import { useState } from "react";
import { Link } from "react-router-dom";

const TendenciasCard = ({pelicula, imagen}) => {
  const [hovered, setHovered] = useState(false);
  const [ favorito, setFavorito ] = useState(false)
  const fecha = pelicula.release_date ? pelicula.release_date : pelicula.first_air_date;
  const year = fecha ? fecha.split('-')[0] : '';
  
  const TipoImagen = () => {
    if(imagen === 'backdrop_path'){
      const imageURL = "https://image.tmdb.org/t/p/w500"+pelicula?.backdrop_path;
      return imageURL
    } else{
      const imageURL = "https://image.tmdb.org/t/p/w300"+pelicula?.poster_path;
      return imageURL
    }
  }

  const handleMouseEnter = () => {
    setHovered(true);
  };
  
  const handleMouseLeave = () => {
    setHovered(false);
  };

  const changeFavorito = () => {
    setFavorito(!favorito)
  }

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={TipoImagen()} className="rounded-xl" alt={pelicula.title} />
      {hovered && (
        <>
          <Link to={`${pelicula.media_type === 'movie' || pelicula.original_title ? '/peliculas/' : '/series/'}${pelicula.id}`} className="absolute rounded-xl inset-0 flex flex-col justify-end md:justify-between bg-black bg-opacity-50 p-1">
            <ul className="hidden lg:flex gap-1 lg:gap-4 p-1 my-0.5 items-center text-sm ">
              <li className="">{year}</li>
              <li className="bg-gray-800 rounded-md font-semibold py-0.5 px-1.5">{`${pelicula.adult ? '+18' : '+13'}`}</li>
            </ul>
            <h1 className="text-sm font-semibold mb-3 px-0.5">{pelicula.title || pelicula.name}</h1>
          </Link>
            <div onClick={changeFavorito} className="lg:p-1.5 lg:bg-gray-800 rounded-full absolute top-2 right-2 cursor-pointer">
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
        </>
      )}
    </div>
  )
}

export default TendenciasCard