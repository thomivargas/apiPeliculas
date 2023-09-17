import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getPelicula } from "../data/httpClient"
import votos from "../assets/votos.svg"
import start from "../assets/start.svg"

const MovieCard = () => {
    const [ pelicula, setPelicula ] = useState({})
    const [hovered, setHovered] = useState(false);
    const {id} = useParams()
    const imageURL = "https://image.tmdb.org/t/p/w200"+ pelicula.poster_path;
  
    useEffect(() => {
        const fetchData = async() => {
            const data = await getPelicula(id)
            setPelicula(data)
        }
        fetchData()
    },[])

    const handleMouseEnter = () => {
      setHovered(true);
    };

    const handleMouseLeave = () => {
      setHovered(false);
    };
  

    return (
    <section className="w-[500px] min-h-[90vh] flex flex-col justify-center">
        <div className="flex flex-col items-center gap-3">
          <a href={pelicula.homepage} target='_blank' className="relative cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img className="rounded-xl" width={300} src={imageURL} alt={pelicula.name} />
            { hovered && (
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-75 p-2 rounded-xl">
                <img src={start} alt="start" />
              </div>
            )}
          </a>
            <a target="_blank" href={pelicula.homepage} className="cursor-pointer text-4xl text-center hover:underline">{pelicula.original_title}</a>
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
        <div>

        </div>
    </section>
  )
}

export default MovieCard
