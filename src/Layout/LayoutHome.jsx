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
      <aside className="bg-[#161d2f] xl:h-[95vh] flex xl:flex-col justify-between xl:justify-start items-center xl:gap-16 p-5 rounded-2xl xl:fixed xl:left-6 2xl:left-8 xl:top-6 mx-4 mt-5 xl:m-auto">
        <img src={logo} width={45} alt="logo"/>
        <nav className="flex xl:flex-col gap-6">
          <Link to={'/'}>
            { location.pathname === '/' ? (
              <img src={homeActive} width={35} alt="homeActive"/>
              ) : (
              <img src={home} width={35} alt="home" />
            )}
          </Link>
          <Link to={'/peliculas'}>
            { location.pathname === '/peliculas' ? (
              <img src={movieActive} width={35} alt="movieActive"/>
              ) : (
              <img src={movie} width={35} alt="movie" />
            )}
          </Link>
          <Link to={'/series'}>
            { location.pathname === '/series' ? (
              <img src={serieActive} width={35} alt="serieActive"/>
              ) : (
              <img src={serie} width={35} alt="serie" />
            )}
          </Link>
        </nav>
      </aside>
      <div className="w-[8%]"></div>
      <main className="w-full xl:w-[92%] md:mx-auto xl:px-4">
        <Outlet/>
      </main>
    </div>
  )
}

export default LayoutHome
