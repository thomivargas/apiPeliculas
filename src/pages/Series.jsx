import { useEffect, useState } from "react"
import { getSeries } from '../data/httpClient'
import SwiperCard from "../components/SwiperCard";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Series = ({imagen}) => {
  const [ series, setSeries ] = useState([])

  const fetchData = async () => {
    const data = await getSeries()
    setSeries(data.results)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <section className="my-5">
      <h1 className="text-xl mx-10 mb-5 xl:text-2xl">Series en tendencias</h1>
      <SwiperCard array={series} imagen={imagen}/>
    </section>
  )
}

export default Series

