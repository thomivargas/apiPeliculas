import { useState, useEffect} from 'react'
import { getGenerosID } from '../data/httpClient'

const Categoria = ({setCategoria, tipo}) => {
    const [ listaGeneros, setListaGeneros ] = useState([])

    const fetchListaGenero = async (tipo, setter) => {
        const data = await getGenerosID(tipo)
        setter(data.genres)
      }
    useEffect(() => {
        fetchListaGenero(tipo, setListaGeneros)
    }, [])

  return (
    <div className="xl:w-[300px] bg-gray-900 xl:h-[85vh] rounded-lg">
        <h1 className="text-sm xl:text-lg mt-2 text-center">Categorias</h1>
        <ul className="text-xs xl:text-sm tex mt-2 xl:mt-10 ">
        {listaGeneros?.map( genero => (
            <li key={genero.id} className="m-4 cursor-pointer hover:text-[#a1a1a1]" onClick={e => setCategoria(genero.id)}>{genero.name}</li>
        ))}
        </ul>
  </div>
  )
}

export default Categoria
