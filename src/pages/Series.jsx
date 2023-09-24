import { useEffect } from "react"

import BuscarCard from "../components/BuscarCard"
import BuscarInput from "../components/BuscarInput"
import Categoria from "../components/Categoria"

import { useDispatch, useSelector } from "react-redux"
import { getGeneros, getBuscador, setData, setPage } from "../redux/generosSlice"
import Card from "../components/Card";

const Series = () => {
  const dispatch = useDispatch();
  const totalPages = useSelector((state) => state.generos.totalPage);
  const page = useSelector((state) => state.generos.page)
  const buscar = useSelector((state) => state.generos.buscar);
  const categoria = useSelector((state) => state.generos.categoria);
  const buscador = useSelector((state) => state.generos.data);
  const categorias = useSelector((state) => state.generos.data);
  const loadingGeneros = useSelector((state) => state.generos.loadingGeneros);

  useEffect(() => {
    dispatch(getBuscador({tipo: 'tv', buscar}))
    dispatch(getGeneros({tipo: 'tv', categoria}))
    dispatch(setData([]))
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight
        ) {
          dispatch(setPage());
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [buscar, categoria, dispatch])

  const cargarMasResultados = () => {
    dispatch(setPage());
    dispatch(getGeneros({ tipo: 'movie', page: page + 1, categoria}));
  };

  return (
    <section className="my-8 mx-3 xl:mx-5 2xl:mx-2 flex flex-col justify-center gap-5 text-lg xl:text-2xl uppercase font-bold">
      <BuscarInput tipo={'serie'}/>
      <div className="w-full h-full flex gap-2 xl:gap-10">
        <Categoria tipo='tv'/>
        <div className="w-full h-[75vh] xl:h-[85vh] overflow-auto">
        {buscar && buscar.length > 0 ?  (
          <BuscarCard array={buscador}/>   
        ) : (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-2 place-items-center">
            {categorias.map( elemento => (
              <div key={elemento.id} className="lg:w-[calc(250px - 10px)]">
                <Card pelicula={elemento}/> 
              </div>
            ))}
            </div>
            <div className="w-full flex justify-center mt-5">
            {loadingGeneros ? (<p>loading...</p>) : categorias.length > 0 &&  page < totalPages && (
              <button onClick={cargarMasResultados} className="w-60 bg-sky-500 hover:bg-sky-600 py-2 rounded-2xl text-sm">Ver más resultados</button>
            )}
            </div>
          </div>)}
        </div>
      </div>
    </section>
  )
}

export default Series