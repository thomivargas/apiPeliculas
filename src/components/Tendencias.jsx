import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { getTendencias } from '../data/httpClient'
import TendenciasCard from "./TendenciasCard"

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Tendencias = ({imagen, titulo}) => {
    const [ peliculas, setPeliculas ] = useState([])
    const [slidesPerView, setSlidesPerView] = useState(
      window.innerWidth > 1500 ? 8 :
      window.innerWidth > 1280 ? 6 :
      window.innerWidth > 1000 ? 5 :
      window.innerWidth > 710 ? 4 :
      3
    );
    

    useEffect(() => {
      const fetchData = async () => {
        const data = await getTendencias()
        setPeliculas(data.results)
      }
      fetchData()
    
      const handleResize = () => {
        if (window.innerWidth <= 710) {
          setSlidesPerView(3);
        } else if(window.innerWidth <= 1000){
          setSlidesPerView(4);
        } else if(window.innerWidth <= 1280) {
          setSlidesPerView(5);
        } else if(window.innerWidth <= 1500){
          setSlidesPerView(6);
        } else {
          setSlidesPerView(8);
        }
      };
    
      window.addEventListener("resize", handleResize);
    
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    
    }, [])

  return (
  <section className="my-5 mx-3 xl:mx-8">
    <h1 className="text-xl xl:text-2xl">{titulo}</h1>
    <Swiper
      spaceBetween={10}
      slidesPerView={slidesPerView}
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