import { useState, useEffect, createContext } from "react";
import { getGeneros, getSearch, getTendenciasTipo } from "../data/httpClient";

export const PeliculasContext = createContext();

const PeliculasProvider = ({children}) => {
    const [ categoria, setCategoria ] = useState(0)
    const [ buscar, setBuscar ] = useState('')
    const [ tendencias, setTendencias ] = useState([])
    const [ peliculasDiscover, setPeliculasDiscover ] = useState([])
    const [ peliculasTendencias, setPeliculasTendencias ] = useState([])
    const [ seriesTendencias, setSeriesTendencias ] = useState([])
    const [ dramas, setDramas ] = useState([])
    const [ terror, setTerror ] = useState([])
    const [ animation, setAnimation ] = useState([])
    const [ war, setWar ] = useState([])

    const fetchTendencias = async (tipo, setter) => {
      const data = await getTendenciasTipo(tipo)
      setter(data.results)
    }

    const fetchDataSearch = async (tipo, buscar, setter) => {
      const data = await getSearch(tipo, buscar)
      setter(data.results)
    }
    
    const fetchDataGenero = async (tipo, id, setter) => {
      const data = await getGeneros(tipo, id)
      setter(data.results)
    }

    useEffect(() => {
      fetchTendencias('all', setTendencias)
      fetchTendencias('movie', setPeliculasTendencias)
      fetchTendencias('tv', setSeriesTendencias)
      fetchDataGenero('movie', '', setPeliculasDiscover)
      fetchDataGenero('movie', '18', setDramas)
      fetchDataGenero('movie', '53', setTerror)
      fetchDataGenero('movie', '16', setAnimation)
      fetchDataGenero('movie', '10752', setWar)
    }, [buscar, categoria])

    return (
        <PeliculasContext.Provider value={{
            tendencias,
            peliculasDiscover,
            peliculasTendencias,
            seriesTendencias,
            dramas,
            terror,
            animation,
            war,
            buscar,
            categoria,
            setCategoria,
            fetchDataGenero,
            fetchDataSearch,
            setBuscar,
        }}>
            {children}
        </PeliculasContext.Provider>
    )
}

export default PeliculasProvider