import search from "../assets/search.svg"

const BuscarInput = ({setBuscar, tipo}) => {
  return (
    <div className="w-full flex gap-2 items-center relative">
        <img src={search} width={40} alt="buscadaor" className="absolute left-2"/>
        <input 
        type="text" 
        placeholder={`Buscar ${tipo} por su nombre`} 
        className="w-full py-3 pl-14 rounded-lg bg-[#161d2f]"
        onChange={ e => setBuscar(e.target.value)}
        />
    </div>
  )
}

export default BuscarInput
