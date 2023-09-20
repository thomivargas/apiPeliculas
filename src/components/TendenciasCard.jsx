import { useState } from "react";
import { Link } from "react-router-dom";

const TendenciasCard = ({pelicula, imagen}) => {
  const [hovered, setHovered] = useState(false);
  const [ favorito, setFavorito ] = useState(false)
  const fecha = pelicula.release_date ? pelicula.release_date : pelicula.first_air_date;
  const year = fecha ? fecha.split('-')[0] : '';
  
  const TipoImagen = () => {
    if(imagen === 'backdrop_path'){
      const imageURL = "https://image.tmdb.org/t/p/w200"+pelicula.backdrop_path;
      return imageURL
    } else{
      const imageURL = "https://image.tmdb.org/t/p/w200"+pelicula.poster_path;
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
    <div className="relative w-[250px]" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={TipoImagen()} className="rounded-xl" width={250} alt={pelicula.title} />
      {hovered && (
        <div className="absolute rounded-xl inset-0 flex flex-col justify-start bg-black bg-opacity-75 p-2">
          <ul className="flex gap-3 p-1 my-1 items-center text-sm ">
            <li>{year}</li>
            <li className="bg-gray-800 rounded-md font-semibold py-0.5 px-1.5">{`${pelicula.adult ? '+18' : '+13'}`}</li>
          </ul>
          <Link to={`${pelicula.media_type === 'movie' ? '/peliculas/' : '/series/'}${pelicula.id}`} className="font-semibold hover:underline">{pelicula.title || pelicula.name}</Link>
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
      )}
    </div>
  )
}

export default TendenciasCard