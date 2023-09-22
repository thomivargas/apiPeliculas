import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import gotlogo from '../assets/hero/gotlogo.png'
import bleachlogo from '../assets/hero/bleachlogo.svg'
import bgblogo from '../assets/hero/bgblogo.svg'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <Swiper
    spaceBetween={10}
    slidesPerView={1}
    centeredSlides={false}
    pagination={{ clickable: true }}
    autoplay={{
      delay: 4000,
      disableOnInteraction: true,
    }}
    navigation={true}
    modules={[Autoplay, Navigation, Pagination]}
    speed={3000}
    loop={true}
    className="h-[600px]"
  > 
    <SwiperSlide className='h-[600px] overflow-hidden fondoRes lg:fondo rounded-md'>
        <Link to='/series/1396'>
            <div className='hidden lg:block cursor-pointer h-full'>
                <img src={bgblogo} width={200} alt="bblogo" />
            </div>
        </Link>
    </SwiperSlide>
    <SwiperSlide className='h-[600px] overflow-hidden fondoRes2 lg:fondo2 rounded-md'>
        <Link to='/series/1399'>
            <div className='hidden lg:block cursor-pointer h-full'>
                <img src={gotlogo} width={200} alt="gotlogo" />
            </div>
        </Link>
    </SwiperSlide>
    <SwiperSlide className='h-[600px] overflow-hidden fondoRes3 lg:fondo3 rounded-md'>
        <Link to='/series/30984'>
            <div className='hidden lg:block cursor-pointer h-full'>
                <img src={bleachlogo} width={200} alt="blogo" />
            </div>
        </Link>
    </SwiperSlide>
  </Swiper>
  )
}

export default Hero
