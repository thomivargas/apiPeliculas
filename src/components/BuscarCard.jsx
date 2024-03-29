import Card from "./Card";

const BuscarCard = ({array}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-2 place-items-center">
      {array?.map( elemento => (
        <div key={elemento.id} className=" lg:w-[calc(250px - 10px)]">
            <Card pelicula={elemento}/> 
        </div>
      ))}
    </div>
  )
}

export default BuscarCard
