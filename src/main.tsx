import React from 'react'
import ReactDOM from 'react-dom/client'
import Shop from './pages/Shop.tsx'
import './globals.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { PageContextProvider } from './context/PageContext.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Shop/>,
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <PageContextProvider>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  </PageContextProvider>
)
