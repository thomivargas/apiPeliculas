import { useDispatch } from "react-redux";
import search from "../assets/search.svg"
import { setBuscar } from "../redux/generosSlice";

const BuscarInput = ({tipo}) => {
  const dispatch = useDispatch();

  const cambiarBuscar = (valor) => {
    dispatch(setBuscar(valor))
  }

  return (
    <div className="w-full flex gap-2 items-center relative">
        <img src={search} width={40} alt="buscadaor" className="absolute left-2"/>
        <input 
        type="text" 
        placeholder={`Buscar ${tipo} por su nombre`} 
        className="w-full py-3 pl-14 rounded-lg bg-[#161d2f]"
        onChange={ e => cambiarBuscar(e.target.value)}
        />
    </div>
  )
}

export default BuscarInput
