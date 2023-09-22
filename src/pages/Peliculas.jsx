import { useState, useEffect, useContext } from "react"
import BuscarCard from "../components/BuscarCard"
import BuscarInput from "../components/BuscarInput"
import Categoria from "../components/Categoria"
import { PeliculasContext } from "../context/PeliculasContext"

const Peliculas = () => {
  const [ peliculasSearch, setPeliculasSearch ] = useState([])
  const [ peliculasCategorias, setPeliculasCategorias ] = useState([])
  const { categoria, setCategoria, buscar, setBuscar, fetchDataSearch, fetchDataGenero, } = useContext(PeliculasContext)

  useEffect(() => {
    fetchDataSearch('movie', buscar, setPeliculasSearch)
    fetchDataGenero('movie', categoria, setPeliculasCategorias)
  }, [buscar, categoria])
  return (
    <section className="my-8 mx-3 xl:mx-5 2xl:mx-2 flex flex-col justify-center gap-5 text-lg xl:text-2xl uppercase font-bold max-h-full">
      <BuscarInput setBuscar={setBuscar} tipo={'pelicula'}/>
      <div className="w-full h-full flex gap-2 xl:gap-10">
        <Categoria setCategoria={setCategoria} tipo='movie'/>
        <div className="w-full h-[75vh] xl:h-[85vh] overflow-auto">
          { buscar && buscar.length > 0 ? 
          ( <BuscarCard array={peliculasSearch}/> ) : 
          ( <BuscarCard array={peliculasCategorias}/> )}
        </div>
      </div>
    </section>
  )
}

export default Peliculas