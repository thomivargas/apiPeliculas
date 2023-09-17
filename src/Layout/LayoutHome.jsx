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
    <div className="flex w-[96%] mx-auto my-8 ">
      <aside className="bg-[#161d2f] min-h-screen flex flex-col items-center gap-16 px-5 py-4 rounded-2xl">
        <div >
          <img src={logo} width={40} alt="logo"/>
        </div>
        <nav className="flex flex-col gap-6">
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
      <main className="w-[92%] mx-auto">
        <Outlet/>
      </main>
    </div>
  )
}

export default LayoutHome
