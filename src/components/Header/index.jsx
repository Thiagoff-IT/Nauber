import * as React from "react";
import { Link } from "react-router-dom";

import Home from "../../assets/image/logo-nauber-1@2x.png"

import "./Styles.css";

function Header() {
  return (
  <div className="header-div11">
          <div className="bg-header34" />
          <div className="bg-header35" />
          <div className="bg-header36" />
          <div className="logo-div11">
            <img
              className="nauber-logo-1-icon11"
              alt="Home"
              src={Home}
            />
            <Link to="/">
            <img
              className="logo-nauber-111"
              alt="Home"
              src={Home}
            />
            </Link>
          </div>
          <div className="menu-div11">
            <img className="vector-icon64" 
                 alt="" 
                 src="src\assets\image\vector-83.svg" 
            />
            <div className="home-div12">
              <Link to="/" className="home-b11">HOME</Link>
              <img className="home-icon11" 
                   alt="" 
                   src="src\assets\image\home11.svg" 
              />
            </div>
            <div className="empresa-div11">
              <img className="empresa-icon11" 
                   alt="" 
                   src="src\assets\image\empresa.svg" 
              />
              <Link to="/Sobre" className="empresa-b11">EMPRESA</Link>
            </div>
            <div className="produtos-div37">
              <Link to="/Produto" className="produtos-b11">PRODUTOS</Link>
              <img className="box-icon11" 
                   alt="" 
                   src="src\assets\image\box11.svg" 
              />
            </div>
            <div className="assistencia-div11">
              <Link to="/Assistencia" className="assistncias-b12">ASSISTÊNCIAS</Link>
              <img className="home-icon11" 
                   alt="" 
                   src="src\assets\image\assistencias2.svg" 
              />
            </div>
            <div className="catlogos-div13">
              <Link to="/Catalogos" className="catlogos-virtuais-b12">CATÁLOGOS VIRTUAIS</Link>
              <img className="home-icon11" 
                   alt="" 
                   src="src\assets\image\catalagos1.svg" 
              />
            </div>
            <div className="contato-div12">
              <Link to="/Contato" className="contato-b12">CONTATO</Link>
              <img className="home-icon11" 
                   alt="" 
                   src="src\assets\image\contato5.svg" />
            </div>
            <div className="login-div11">
              <Link to="#" className="login-b11">login</Link>
              <img className="logim-icon11" 
                   alt="" 
                   src="src\assets\image\logim.svg" 
              />
            </div>
          </div>
          <div className="flags-div11">
      
            <img
              className="flag-brasil-1-icon11"
              alt=""
              src="src\assets\image\flagbrasil-11@2x.png"
            />
            <img
              className="flag-espanha-1-icon11"
              alt="Espanha"
              src="src\assets\image\flagespanha-1@2x.png"
            />
            <img className="flag-eua-1-icon11" 
                 alt="Espanha" 
                 src="src\assets\image\flageua-1@2x.png" 
            />
            <img
              className="flag-arabia-1-icon11"
              alt=""
              src="src\assets\image\flagarabia-11@2x.png"
            />
          </div>
          <div className="line-div30" />
          <img
            className="base-de-conhecimento-111"
            alt=""
            src="src\assets\image\base-de-conhecimento-1@2x.png"
          />
          <img
            className="logo-revenda-pro-111"
            alt=""
            src="src\assets\image\logo-revenda-pro-1@2x.png"
          />
          <div className="conhea-o-sistema-de-revnda-n11">
            <p className="rua-mal-castelo11">
              <span className="conhea-o-sistema23">
                <span>CONHEÇA O SISTEMA</span>
              </span>
            </p>
            <p className="rua-mal-castelo11">
              <span className="conhea-o-sistema23">
                <span>DE REVÊNDA</span>
              </span>
            </p>
            <p className="nauber-pro13">
              <span>
                <b>NAUBER PRO</b>
              </span>
            </p>
          </div>
            <input type="text" className="seach-div11 seach" placeholder="busque aqui seu produto"/>
            <img className="frame-icon10" 
                 alt="" 
                 src="src\assets\image\frame-24.svg" 
            />
        </div>
  );
};
export default Header;
