import { createBrowserRouter } from 'react-router-dom'

import LayoutHome from '../Layout/LayoutHome'

import Home from '../pages/Home'
import Peliculas from '../pages/Peliculas'
import Series from '../pages/Series'

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
          path: '/series',
          element: <Series/>
        },
        // {
        //   path: '/favoritos',
        //   element: <Favoritos/>
        // },
      ]
    },
])