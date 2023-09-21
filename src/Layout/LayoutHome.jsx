import { Outlet, Link, useLocation } from "react-router-dom"

import logo from '../assets/logo.svg'

import home from '../assets/home.svg'
import homeActive from '../assets/homeactive.svg'

import movie from '../assets/movie.svg'
import movieActive from '../assets/movieActive.svg'

import serie from '../assets/serie.svg'
import serieActive from '../assets/serieActive.svg'

const LayoutHome = () => {
  const location = useLocation()

  return (
    <div className="flex flex-col xl:flex-row w-full">
      <aside className="bg-[#161d2f] xl:h-[95vh] flex xl:flex-col justify-between xl:justify-start items-center xl:gap-16 px-5 py-4 rounded-2xl xl:fixed xl:left-4 xl:top-6 mx-3 mt-5 xl:m-0">
        <img src={logo} width={40} alt="logo"/>
        <nav className="flex xl:flex-col gap-6">
          <Link to={'/'}>
            { location.pathname === '/' ? (
              <img src={homeActive} width={30} alt="homeActive"/>
              ) : (
              <img src={home} width={30} alt="home" />
            )}
          </Link>
          <Link to={'/peliculas'}>
            { location.pathname === '/peliculas' ? (
              <img src={movieActive} width={30} alt="movieActive"/>
              ) : (
              <img src={movie} width={30} alt="movie" />
            )}
          </Link>
          <Link to={'/series'}>
            { location.pathname === '/series' ? (
              <img src={serieActive} width={30} alt="serieActive"/>
              ) : (
              <img src={serie} width={30} alt="serie" />
            )}
          </Link>
        </nav>
      </aside>
      <div className="w-[5%]"></div>
      <main className="w-full xl:w-[92%] md:mx-auto">
        <Outlet/>
      </main>
    </div>
  )
}

export default LayoutHome
