import { useState, useEffect, createContext } from "react";
import { getGeneros, getSearch, getTendenciasTipo } from "../data/httpClient";

export const PeliculasContext = createContext();

const PeliculasProvider = ({children}) => {
    const [ categoria, setCategoria ] = useState(0)
    const [ buscar, setBuscar ] = useState('')
    const [ loading, setLoading ] = useState(false)
    const [ busqueda, setBusqueda ] = useState([])
    const [ peliculasTendencias, setPeliculasTendencias ] = useState([])
    const [ seriesTendencias, setSeriesTendencias ] = useState([])
    const [ dramas, setDramas ] = useState([])
    const [ war, setWar ] = useState([])

    const fetchTendencias = async (tipo, setter) => {
      setLoading(true)
      try {
        const data = await getTendenciasTipo(tipo)
        setter(data.results)
      } catch (error) {
        console.error(error)
      }
      setLoading(false)
    }

    const fetchDataSearch = async (tipo, buscar, setter) => {
      setLoading(true)
      try{
        const data = await getSearch(tipo, buscar)
        setter(data.results)
      } catch (error) {
        console.error(error)
      }
      setLoading(false)
    }
    
    const fetchDataGenero = async (tipo, id, setter) => {
      setLoading(true)
      try{
        const data = await getGeneros(tipo, id)
        setter(data.results)
      } catch (error) {
        console.error(error)
      }
      setLoading(false)
    }

    useEffect(() => {
      fetchTendencias('movie', setPeliculasTendencias)
      fetchTendencias('tv', setSeriesTendencias)
      fetchDataGenero('movie', '18', setDramas)
      fetchDataGenero('movie', '10752', setWar)
    }, [buscar, categoria])

    return (
        <PeliculasContext.Provider value={{
            peliculasTendencias,
            seriesTendencias,
            dramas,
            war,
            buscar,
            categoria,
            setCategoria,
            fetchDataGenero,
            fetchDataSearch,
            setBuscar,
            busqueda,
            setBusqueda,
            loading
        }}>
            {children}
        </PeliculasContext.Provider>
    )
}

export default PeliculasProvider