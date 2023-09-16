import { createBrowserRouter } from 'react-router-dom'

import Home from '../pages/Home'
import Peliculas from '../pages/Peliculas'
import Series from '../pages/Series'

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/peliculas',
      element: <Peliculas/>
    },
    {
      path: '/series',
      element: <Series/>
    },
    // {
    //   path: '/favoritos',
    //   element: <Favoritos/>
    // },
])