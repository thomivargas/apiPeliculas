import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Card from "./Card";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SwiperCard = ({array, imagen}) => {
  return (
    <Swiper
    spaceBetween={10}
    slidesPerView={8}
    centeredSlides={false}
    pagination={{ clickable: true }}
    autoplay={{
      delay: 3000,
      disableOnInteraction: true,
    }}
    navigation={true}
    modules={[Autoplay, Navigation, Pagination]}
    breakpoints={{
      '@0.00': {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      '@0.90': {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      '@1.25': {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      '@1.50': {
        slidesPerView: 7,
        spaceBetween: 10,
      },
    }}
    speed={2000}
    loop={true}
    className="mx-2 lg:mx-0"
  >
    {array.map( pelicula => (
      <SwiperSlide key={pelicula.id} className="flex justify-center">
          <Card pelicula={pelicula} imagen={imagen}/>
      </SwiperSlide>
    ))}
  </Swiper>
  )
}

export default SwiperCard
