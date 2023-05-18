import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./i18n";

import App from "./App";
import Home from "./pages/Home";
import Produto from "./pages/Produtos";
import Assistencia from "./pages/Assistencia";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Catalogos from "./pages/Catalogos";
import Categoria from "./pages/Categoria";
import Categorias from "./pages/Categorias";
import ProdutoCompras from "./pages/ProdutoCompra";
import ProdutoLogistico from "./pages/ProdutoLogistas";
import ProdutoDetalhes from "./pages/ProdutoDetalhes";
import CategoriasDeProdutos from "./pages/CategoriasDeProdutos";
import Login from "./pages/Login";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App>
        <Route exact path="/" component={Home} />
        <Route path="/Produto" component={Produto} />
        <Route path="/Assistencia" component={Assistencia} />
        <Route path="/Sobre" component={Sobre} />
        <Route path="/Contato" component={Contato} />
        <Route path="/Catalogos" component={Catalogos} />
        <Route path="/Categoria" component={Categoria} />
        <Route path="/Categoria/CategoriasDeProdutos" component={CategoriasDeProdutos} />
        <Route path="/Categoria/Categorias" component={Categorias} />
        <Route path="/ProdutoLogistico" component={ProdutoLogistico} />
        <Route path="/ProdutoDetalhes" component={ProdutoDetalhes} />
        <Route path="/ProdutoCompra" component={ProdutoCompras} />
        <Route path="/Login" component={Login} />
      </App>
    </Router>
  </React.StrictMode>,
);
