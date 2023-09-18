import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { getTendencias } from '../data/httpClient'
import TendenciasCard from "./TendenciasCard"

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Tendencias = ({imagen, titulo}) => {
    const [ peliculas, setPeliculas ] = useState([])

    useEffect(() => {
      const fetchData = async () => {
        const data = await getTendencias()
        setPeliculas(data.results)
      }
      fetchData()
    }, [])
  return (
  <section className="my-5">
    <h1 className="text-2xl">{titulo}</h1>
    <Swiper
      spaceBetween={10}
      slidesPerView={8}
      centeredSlides={false}
      autoplay={{
        delay: 1500,
        disableOnInteraction: true,
      }}
      navigation={false}
      modules={[Autoplay, Navigation]}
      loop={true}
      className='w-full my-5'
    >
      {peliculas.map( pelicula => (
        <SwiperSlide key={pelicula.id}>
          <TendenciasCard pelicula={pelicula} imagen={imagen}/>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
  )
}

export default Tendencias