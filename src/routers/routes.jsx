import { createBrowserRouter } from 'react-router-dom'

import LayoutHome from '../Layout/LayoutHome'

import Home from '../pages/Home'
import Peliculas from '../pages/Peliculas'
import Series from '../pages/Series'
import MovieCard from '../components/movieCard'
import SerieCard from '../components/SerieCard'

export const router = createBrowserRouter([
    {
      path: '/',
      element: <LayoutHome/>,
      children: [
        {
          index: true,
          element: <Home/>,
        },
        {
          path: '/peliculas',
          element: <Peliculas/>
        },
        {
          path: '/peliculas/:id',
          element: <MovieCard/>
        },
        {
          path: '/series',
          element: <Series/>
        },
        {
          path: '/series/:id',
          element: <SerieCard/>
        },
        // {
        //   path: '/favoritos',
        //   element: <Favoritos/>
        // },
      ]
    },
])