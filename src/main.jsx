import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './i18n';

import './Styles/global.css';
import Home from './pages/Home';
import Produto from './pages/Produtos';
import Assistencia from './pages/Assistencia';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Catalogos from './pages/Catalogos';
import Categoria from './pages/Categoria';
import Categorias from './pages/Categorias';
import ProdutoCompras from './pages/ProdutoCompra';
import ProdutoLogistico from './pages/ProdutoLogistas';
import ProdutoDetalhes from './pages/ProdutoDetalhes';
import CategoriasDeProdutos from './pages/CategoriasDeProdutos';
import Classes from './pages/Classes';
import Login from './pages/Login';
import Produtos from './pages/Produtos';
import ErrorPage from './pages/error/error-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/Produto/:id',
    element: <Produto />,
  },
  {
    path: '/Assistencia',
    element: <Assistencia />,
  },
  {
    path: '/Sobre',
    element: <Sobre />,
  },
  {
    path: '/Contato',
    element: <Contato />,
  },
  {
    path: '/Catalogos',
    element: <Catalogos />,
  },
  {
    path: '/Categoria',
    element: <Categoria />,
  },
  {
    path: '/Classes/linhas/id',
    element: <Classes />,
  },
  {
    path: '/Categoria/Civil',
    element: <CategoriasDeProdutos />,
  },
  {
    path: '/Categoria/Linha',
    element: <Categorias />,
  },
  {
    path: '/Produtos/:id',
    element: <Produtos />,
  },
  {
    path: '/ProdutoLogistico/:id',
    element: <ProdutoLogistico />,
  },
  {
    path: '/ProdutoDetalhes/:id',
    element: <ProdutoDetalhes />,
  },
  {
    path: '/ProdutoCompra/:id',
    element: <ProdutoCompras />,
  },
  {
    path: '/Login',
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
