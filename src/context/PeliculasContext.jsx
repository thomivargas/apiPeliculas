import { useState, useEffect, createContext } from "react";
import { getGeneros, getTendenciasTipo } from "../data/httpClient";

export const PeliculasContext = createContext();

const PeliculasProvider = ({children}) => {
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
    
    const fetchDataGenero = async (id, setter) => {
      const data = await getGeneros(id)
      setter(data.results)
    }

    useEffect(() => {
      fetchTendencias('all', setTendencias)
      fetchTendencias('movie', setPeliculasTendencias)
      fetchTendencias('tv', setSeriesTendencias)
      fetchDataGenero('', setPeliculasDiscover)
      fetchDataGenero('18', setDramas)
      fetchDataGenero('53', setTerror)
      fetchDataGenero('16', setAnimation)
      fetchDataGenero('10752', setWar)
    }, [])

    return (
        <PeliculasContext.Provider value={{
            tendencias,
            peliculasDiscover,
            peliculasTendencias,
            seriesTendencias,
            dramas,
            terror,
            animation,
            war
        }}>
            {children}
        </PeliculasContext.Provider>
    )
}

export default PeliculasProvider