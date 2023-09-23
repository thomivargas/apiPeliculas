import { useEffect } from "react"
import BuscarCard from "../components/BuscarCard"
import BuscarInput from "../components/BuscarInput"
import Categoria from "../components/Categoria"
import { useDispatch, useSelector } from "react-redux"
import { getBuscador } from "../redux/buscadorSlice"
import { getGeneros } from "../redux/generosSlice"

const Peliculas = () => {
  const dispatch = useDispatch();
  const buscar = useSelector((state) => state.buscador.buscar);
  const categoria = useSelector((state) => state.generos.categoria);
  
  const buscador = useSelector((state) => state.buscador.data);
  const categorias = useSelector((state) => state.generos.data);
  
  const loadingGeneros = useSelector((state) => state.generos.loadingGeneros);
  const loadingSearch = useSelector((state) => state.buscador.loadingSearch);

  useEffect(() => {
    dispatch(getBuscador({tipo: 'movie', buscar}))
    dispatch(getGeneros({tipo: 'movie', categoria}))
  }, [buscar, categoria, dispatch])
  
  return (
    <section className="my-8 mx-3 xl:mx-5 2xl:mx-2 flex flex-col justify-center gap-5 text-lg xl:text-2xl uppercase font-bold max-h-full">
      <BuscarInput tipo={'pelicula'}/>
      <div className="w-full h-full flex gap-2 xl:gap-10">
        <Categoria tipo='movie'/>
        <div className="w-full h-[75vh] xl:h-[85vh] overflow-auto">
          { loadingGeneros || loadingSearch ? <p>loading...</p> : buscar && buscar.length > 0 ? (
            <BuscarCard array={buscador}/>   
          ) : (
            <BuscarCard array={categorias}/>
          )}
        </div>
      </div>
    </section>
  )
}

export default Peliculas