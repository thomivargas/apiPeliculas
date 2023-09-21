import { useState, useEffect } from "react";
import { createContext } from "react";
import { getDiscover, getGeneros, getPeliculas, getSeries, getTendencias } from "../data/httpClient";

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

    
    const fetchTendencias = async () => {
        const data = await getTendencias()
        setTendencias(data.results)
    }
    
      const fetchDiscover = async () => {
        const data = await getDiscover()
        setPeliculasDiscover(data.results)
    }

    const fetchTendenciasMovie = async () => {
      const data = await getPeliculas()
      setPeliculasTendencias(data.results)
    }

    const fetchTendenciasSeries = async () => {
        const data = await getSeries()
        setSeriesTendencias(data.results)
    }
  
    const fetchDrama = async () => {
      const data = await getGeneros('18')
      setDramas(data.results)
    }
    const fetchTerror = async () => {
      const data = await getGeneros('53')
      setTerror(data.results)
    }
  
    const fetchAnimation = async () => {
      const data = await getGeneros('16')
      setAnimation(data.results)
    }
  
    const fetchWar = async () => {
      const data = await getGeneros('10752')
      setWar(data.results) 
    }


    useEffect(() => {
        fetchTendencias()
        fetchDiscover()
        fetchTendenciasMovie()
        fetchTendenciasSeries()
        fetchDrama()
        fetchTerror()
        fetchAnimation()
        fetchWar()
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