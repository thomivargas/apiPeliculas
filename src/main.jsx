import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import PeliculasProvider from './context/PeliculasContext'
import { router } from './routers/routes'
import './index.css'

import { Provider } from 'react-redux'
import store from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PeliculasProvider>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </PeliculasProvider>
  </React.StrictMode>,
)
