import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
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
    autoplay={{
      delay: 2500,
      disableOnInteraction: true,
    }}
    navigation={false}
    modules={[Autoplay, Navigation]}
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
    {array.map( pelicula => (
      <SwiperSlide key={pelicula.id} className="flex justify-center">
        <Card pelicula={pelicula} imagen={imagen}/>
      </SwiperSlide>
    ))}
  </Swiper>
  )
}

export default SwiperCard
