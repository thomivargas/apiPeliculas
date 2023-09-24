import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { setFavoritos, filterFavoritos, setEstadoCard } from "../redux/favoritoSlice"

const TendenciasCard = ({pelicula, imagen}) => {
  const [hovered, setHovered] = useState(false);
  const params = useParams()
  const dispatch = useDispatch()
  const favoritos = useSelector((state) => state.favoritos.favoritos);
  const estadoCard = useSelector((state) => state.favoritos.estadoCard)

  const TipoImagen = () => {
    let imageURL
    if(imagen === 'backdrop_path'){
      imageURL = "https://image.tmdb.org/t/p/w300"+pelicula?.backdrop_path;
    } else{
      imageURL = "https://image.tmdb.org/t/p/w300"+pelicula?.poster_path;
    }
    return imageURL
  }

  const ResetearFecha = () => {
    const fecha = pelicula.release_date ? pelicula.release_date : pelicula.first_air_date;
    const year = fecha ? fecha.split('-')[0] : '';
    return year
  }

  const handleMouseEnter = () => {
    setHovered(true);
  };
  
  const handleMouseLeave = () => {
    setHovered(false);
  };

  const agregarAFavoritos = (elemento) => {
    const estaEnFavoritos = favoritos.some((fav) => fav.id === elemento.id);
    if (estaEnFavoritos) {
      const nuevosFavoritos = favoritos.filter((fav) => fav.id !== elemento.id);
      dispatch(filterFavoritos(nuevosFavoritos));
    } else {
      dispatch(setFavoritos(elemento));
    }

    dispatch(
      setEstadoCard({
        id: elemento.id,
        estadoCard: !estaEnFavoritos,
      })
    );
  }

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={TipoImagen()} className="rounded-xl" alt={pelicula.title} />
      {hovered && (
        <>
          <Link to={`${pelicula.media_type === 'movie' || pelicula.original_title ? '/peliculas/' : '/series/'}${pelicula.id}`} className="absolute rounded-xl inset-0 flex flex-col justify-end md:justify-between bg-black bg-opacity-50 p-1">
            <ul className="hidden lg:flex gap-1 lg:gap-4 p-1 my-0.5 items-center text-sm ">
              <li className="">{ResetearFecha()}</li>
              <li className="bg-gray-800 rounded-md font-semibold py-0.5 px-1.5">{`${pelicula.adult ? '+18' : '+13'}`}</li>
            </ul>
            <h1 className="text-sm font-semibold mb-3 px-0.5">{pelicula.title || pelicula.name}</h1>
          </Link>
            <div onClick={() => agregarAFavoritos(pelicula)} className={`lg:p-1.5 lg:bg-gray-800 rounded-full absolute top-2 right-2 cursor-pointer ${
        params.favoritos === 'favoritos' && estadoCard[pelicula.id] && 'fill-white' 
      }`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-4 h-4 ${
                  estadoCard[pelicula.id] && 'fill-white'
                }`}
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