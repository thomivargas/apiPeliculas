import { useState, useEffect, useContext } from "react"
import BuscarCard from "../components/BuscarCard"
import BuscarInput from "../components/BuscarInput"
import Categoria from "../components/Categoria"
import { PeliculasContext } from "../context/PeliculasContext"

const Series = () => {
  const [ seriesSearch, setSeriesSearch ] = useState([])
  const [ seriesCategorias, setSeriesCategorias ] = useState([])
  const { categoria, setCategoria, buscar, setBuscar, fetchDataSearch, fetchDataGenero, } = useContext(PeliculasContext)


  useEffect(() => {
    fetchDataSearch('tv', buscar, setSeriesSearch)
    fetchDataGenero('tv', categoria, setSeriesCategorias)
  }, [buscar, categoria])

  return (
    <section className="my-8 mx-3 xl:mx-5 2xl:mx-2 flex flex-col justify-center gap-5 text-lg xl:text-2xl uppercase font-bold">
      <BuscarInput setBuscar={setBuscar} tipo={'serie'}/>
      <div className="w-full h-full flex gap-2 xl:gap-10">
        <Categoria setCategoria={setCategoria} tipo='tv'/>
        <div className="w-full h-[75vh] xl:h-[85vh] overflow-auto">
          { buscar && buscar.length > 0 ? 
          ( <BuscarCard array={seriesSearch}/> ) : 
          ( <BuscarCard array={seriesCategorias}/> )}
        </div>
      </div>
    </section>
  )
}

export default Series

