import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import BtnEnviar from './components/Btnrnviar.jsx'
import Home from './components/Home.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {path: "", 
        element: <Home/>
      },
      {path: "aplicacion",
        element: <BtnEnviar/>

      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
