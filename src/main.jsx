import React from 'react'
import ReactDOM from 'react-dom/client'
import './i18n';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Home from './pages/Home';
import Produto from './pages/Produtos';
import Assistencia from './pages/Assistencia';
import Sobre from './pages/Sobre'
import Contato from './pages/Contato';
import Catalogos from './pages/Catalogos';
import Categoria from './pages/Categoria';
import Categorias from './pages/Categorias';
import ProdutoCompras from './pages/ProdutoCompra';
import ProdutoLogistico from './pages/ProdutoLogistas';
import ProdutoDetalhes from "./pages/ProdutoDetalhes"
import CategoriasDeProdutos from "./pages/CategoriasDeProdutos"
import Login from './pages/Login'

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
    path: "/Catalogos",
    element: <Catalogos />,
  },
  {
    path: "/Categoria",
    element: <Categoria />,
  },
  {
    path: "/Categoria/CategoriasDeProdutos",
    element: <CategoriasDeProdutos />,
  },
  {
    path: "/Categoria/Categorias",
    element: <Categorias />,
  },
  {
    path: "/ProdutoLogistico",
    element: <ProdutoLogistico />,
  },
  {
    path: "/ProdutoDetalhes",
    element: <ProdutoDetalhes />,
  },
  {
    path: "/ProdutoCompra",
    element: <ProdutoCompras />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
)
