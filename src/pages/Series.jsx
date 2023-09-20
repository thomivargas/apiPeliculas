import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { getSeries } from '../data/httpClient'
import TendenciasCard from "../components/TendenciasCard";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Series = ({imagen}) => {
  const [ peliculas, setPeliculas ] = useState([])

  const fetchData = async () => {
    const data = await getSeries()
    setPeliculas(data.results)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <section className="my-5">
    <h1 className="text-xl mx-10 mb-5 xl:text-2xl">Series en tendencias</h1>
    <Swiper
      spaceBetween={10}
      slidesPerView={8}
      centeredSlides={false}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      Pagination={{
          clickable: true,
      }}
      navigation={false}
      modules={[Autoplay, Navigation, Pagination]}
      breakpoints={{
          '@0.00': {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          '@0.60': {
            slidesPerView: 3,
            spaceBetween: 15, 
          },
          '@0.85': {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          '@1.30': {
            slidesPerView: 5,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 6,
            spaceBetween: 50,
          },
      }}
      loop={true}
      className="mx-10"
    >
      {peliculas.map( pelicula => (
        <SwiperSlide key={pelicula.id} className="flex justify-center">
          <TendenciasCard pelicula={pelicula} imagen={imagen}/>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
  )
}

export default Series

