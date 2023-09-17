import { useState } from "react";

const TendenciasCard = ({pelicula}) => {
  const [hovered, setHovered] = useState(false);
  const [ favorito, setFavorito ] = useState(false)
  const imageURL = "https://image.tmdb.org/t/p/w200"+pelicula.poster_path;

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
    <div className="cursor-pointer relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={imageURL} className="rounded-xl" width={280} alt={pelicula.title} />
      {hovered && (
        <div className="absolute inset-0 flex flex-col justify-end bg-black bg-opacity-75 p-2">
          <ul className="flex gap-3 p-1 my-1 items-center text-sm ">
            <li>{pelicula.release_date}</li>
            <li className="bg-gray-800 rounded-md font-semibold py-0.5 px-1.5">{`${pelicula.adult ? '+18' : '+13'}`}</li>
          </ul>
          <h1 className="font-semibold">{pelicula.title}</h1>
          <div onClick={changeFavorito} className="p-2 bg-gray-800 rounded-full absolute top-2 right-2 opacity-75 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${favorito && 'fill-white'} w-4 h-4`}
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
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