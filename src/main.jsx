import React from 'react'
import ReactDOM from 'react-dom/client'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'

import Home from './pages/Home';
import Produto from './pages/Produtos';
import Assistencia from './pages/Assistencia';
import Sobre from './pages/Sobre'
import Contato from './pages/Contato';
import Catalogos from './pages/Catalogos';
import ProdutoLogistico from './pages/ProdutoLogistas1';
import ProdutoDetalhes from "./pages/ProdutoDetalhes"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Produto",
    element: <Produto />,
  },
  {
    path: "/Assistencia",
    element: <Assistencia />,
  },
  {
    path: "/Sobre",
    element: <Sobre />,
  },
  {
    path: "/Contato",
    element: <Contato />,
  },
  {
    path: "/ProdutoLogistico",
    element: <ProdutoLogistico />,
  },
  {
    path: "/Catalogos",
    element: <Catalogos />,
  },
  {
    path: "/ProdutoDetalhes",
    element: <ProdutoDetalhes />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
)
