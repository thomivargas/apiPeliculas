import { useSelector } from 'react-redux';
import SwiperCard from '../components/SwiperCard';

const Favoritos = () => {
  const favoritos = useSelector((state) => state.favoritos.favoritos);

  return (
    <section className="my-8 mx-3 xl:mx-5 2xl:mx-2 flex flex-col justify-center gap-5 text-lg xl:text-2xl uppercase font-bold">
      <div>
        <h1 className="mb-2">Favoritos</h1>
        <SwiperCard array={favoritos} />
      </div>
      {/* <div className="flex gap-10">
      { arreglo?.map( elemento => (
        <div key={elemento.id} className="p-16 cursor-pointer hover:bg-slate-600 bg-slate-500" onClick={() => agregarAFavoritos(elemento)}>
          <h1>{elemento.texto}</h1>
        </div>
      ))}
      </div>
      <h1 className="mt-24">favoritos</h1>
      <div className="mt-4 flex gap-10">
      { favoritos?.map( fav => (
        <div key={fav.id} className="p-16 cursor-pointer hover:bg-sky-600 bg-sky-500" onClick={() => agregarAFavoritos(fav)}>
          <h1>{fav.texto}</h1>
        </div>
      ))}
      </div> */}
    </section>
  )
}

export default Favoritos
