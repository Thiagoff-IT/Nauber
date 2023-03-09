import {Link} from 'react-router-dom'
import { Icon } from '@iconify/react';
import Header from "../../components/Header";
import "./categorias.css";

import Vetor from '../../assets/image/vector-107@2x.png'
import Vetor1 from '../../assets/image/vector-10716.svg'
import Vetor2 from '../../assets/image/vector-10726.svg'
import Vetor3 from '../../assets/image/vector-94@2x.png'
import Vetor5 from '../../assets/image/vector-105@2x.png'
import Vetor6 from '../../assets/image/vector-106@2x.png'
import Vetor4 from '../../assets/image/vector-10722.svg'
import Vetor7 from '../../assets/image/vector-111@2x.png'
import Vetor8 from '../../assets/image/vector-10713.svg'
import Vetor9 from '../../assets/image/vector-96@2x.png'
import Vetor10 from '../../assets/image/vector-97@2x.png'

import Social from '../../assets/image/redes-sociais-icon7.svg'
import Nauber from '../../assets/image/logo-nauber@2x.png'

function CategoriasDeProdutos(){
  return (
    <div className="categorias-de-produtos">
            <div className="footer-div24">
        <div className="footer-div25">
          <div className="bg-div13" />
         
          <div className="siga-nas-redes-sociais12">Siga nas redes sociais</div>
          <div className="nauber-2022-todos-os-direito12">
            Nauber © 2022 Todos os direitos reservados.
          </div>
          <div className="politicas-de-privacidade-ter12">
            Politicas de Privacidade | Termos de Uso
          </div>
          <div className="nauber-maquinas-e-equipamentos12">
            20.633.257/0001-98 | NAUBER MAQUINAS E EQUIPAMENTOS
          </div>
          <div className="redes-sociais-icon2">
          <a href="https://www.facebook.com/naubermaquinas"><Icon icon="ic:baseline-facebook" className="ItemSocial" color="#fff" /></a>
          <a href="https://www.instagram.com/naubermaquinas/"><Icon icon="mdi:instagram" className="ItemSocial" color="#fff" /></a>
          <a href="https://www.youtube.com/@naubermaquinas2080"><Icon icon="mdi:youtube" className="ItemSocial" color="#fff" /></a>
          <a href="https://www.tiktok.com/@naubermaquinas"><Icon icon="ic:baseline-tiktok" className="ItemSocial" color="#fff" /></a>
          </div>
          <div className="dvidas-div12">
            <div className="converse-com-um-especialista12">
              Converse com um especialista
            </div>
            <div className="envie-um-e-mail12">Envie um e-mail</div>
            <div className="voltar-ao-incio12">Voltar ao início</div>
            <div className="ficou-com-dvidas12">Ficou com dúvidas?</div>
          </div>
          <div className="produtos-div38">
            <div className="construo-civil-div12">Construção civil</div>
            <div className="linha-industrial-div13">Linha industrial</div>
            <div className="ficou-com-dvidas12">Produtos</div>
          </div>
          <div className="nossa-sede-div24">
            <div className="rua-mal-castelo-branco-247713">
              <p className="rua-mal-castelo12">
                Rua Mal. Castelo Branco, 2477 Centro
              </p>
              <p className="schroeder-sc12">Schroeder - SC.</p>
            </div>
            <div className="div59">+55 (47) 3374-5969</div>
            <div className="div60">+55 (11) 96364-6599</div>
            <div className="div61">+55 (47) 98821-2725</div>
            <div className="nossa-sede-div25">Nossa sede</div>
          </div>
          
          <div className="line-div31" />
          <img
            className="logo-nauber-icon12"
            alt=""
            src={Nauber}
          />
          <div className="rectangle-div295" />
        </div>
      </div>
      <div className="group-div26">
        <div className="quadro-linha-1">
          
          <div className='projetorasDeTextura'>
          <Link to="/ProdutoCompra">
              <img className="vector-icon70" alt="" src={Vetor} />
              <div className="projetoras-de-textura2">
              <img className="vector-icon71" alt="" src={Vetor1} />
              <div className="equipamentos-airless-div">
                equipamentos airless
              </div>
            </div>
            </Link>
          </div>

          <div className='projetorasDeTextura'>
          <Link to="/ProdutoCompra">
              <img className="vector-icon69" alt="" src={Vetor} />
              <div className="projetoras-de-textura">
                <img className="vector-icon71" alt="" src={Vetor1} />
                <div className="projetoras-de-textura1">
                    projetoras de textura
                </div>
              </div>
            </Link>
          </div>

          <div className='projetorasDeTextura'>
          <Link to="/ProdutoCompra">
              <img className="vector-icon68" alt="" src={Vetor} />
              <div className="projetoras-de-textura3">
                <img className="vector-icon71" alt="" src={Vetor1} />
                <div className="demarcao-viria-div">
                    demarcação viária
                </div>
              </div>
            </Link>
          </div>
          
        </div>

        <div className="quadro-linha-2">
        
   
          <div className='projetorasDeTextura'>
          <Link to="/ProdutoCompra">
              <img className="vector-icon77" alt="" src={Vetor5} />
              <div className="aspiradores-div3">
              <img className="vector-icon79" alt="" src={Vetor2} />
              <div className="lixadeiras-div1">
              lixadeiras
              </div>
            </div>           
            </Link>
          </div>

          <div className='projetorasDeTextura'>
          <Link to="/ProdutoCompra">
              <img className="vector-icon76" alt="" src={Vetor6} />
              <div className="aspiradores-div1">
              <img className="aspiradores-bar" alt="" src={Vetor2} />
              <div className="aspiradores-div2">
              ASPIRADORES
              </div>
            </div>           
            </Link>
          </div>
        
        <div className='projetorasDeTextura'>
          <Link to="/ProdutoCompra">
              <img className="vector-icon75" alt="" src={Vetor5} />
              <div className="aspiradores-div4">
              <img className="vector-icon78" alt="" src={Vetor2} />
              <div className="misturadores-div1">
              misturadores
              </div>
            </div>           
            </Link>
          </div>

          </div>

          <div className="quadro-linha-3">

          <div className='projetorasDeTextura'>
            <Link to="/ProdutoCompra">
            <img className="vector-fresadora" alt="" src={Vetor3} />
                <div className="compressor-div2">
                <img className="vector-icon86" alt="" src={Vetor4} />
                <div className="fresadora-div">
                fresadora
                </div>
              </div>           
              </Link>
            </div>

          <div className='projetorasDeTextura'>
              <Link to="/ProdutoCompra">
              <img className="vector-compressor" alt="" src={Vetor3}/>
              <div className="compressor-div">
              <img className="vector-icon86" alt="" src={Vetor4} />
              <div className="compressor-div1">
              compressor
              </div>
            </div>           
            </Link>
          </div>


        <div className='projetorasDeTextura'>
          <Link to="/ProdutoCompra">
          <img className="vector-desempenadeiras" alt="" src={Vetor3} />
              <div className="compressor-div3">
              <img className="vector-icon87" alt="" src={Vetor4} />
              <div className="desempenadeiras-div">
              desempenadeiras
              </div>
            </div>           
            </Link>
          </div>

        </div>

        <div className="quadro-linha-4">
        <div className='projetorasDeTextura'>
        <Link to="/ProdutoCompra">
        <img className="bicos-airless" alt="" src={Vetor7} />
            <div className="bicos-airless-div">
            <img className="vector-icon78" alt="" src={Vetor2} />
            <div className="bicos-airless-div1">
            bicos airless
            </div>
          </div>           
          </Link>
        </div>

        <div className='projetorasDeTextura'>
        <Link to="/ProdutoCompra">
        <img className="airless" alt="" src={Vetor7} />
            <div className="bicos-airless-div">
            <img className="vector-icon93" alt="" src={Vetor2} />
            <img className="vector-icon94" alt="" src={Vetor2} />
            <div className="pistolas-airless-div">
            pistolas airless
            </div>
          </div>           
          </Link>
        </div>


          <div className='projetorasDeTextura'>
            <Link to="/ProdutoCompra">
            <img className="Filmes" alt="" src={Vetor7} />
                <div className="bicos-airless-div3">
                <img className="filmes-de-mascaramento-bar" alt="" src={Vetor2} />
                <div className="filmes-de-mascaramento">
                filmes de mascaramento
                </div>
              </div>           
              </Link>
            </div>

            

        </div>

        <div className="quadro-linha-5">
            <div className='projetorasDeTextura'>
              <Link to="/ProdutoCompra">
              <img className="lixadeiras" alt="" src={Vetor9} />
                  <div className="projetoras-de-textura2">
                  <img className="equipamentos-airless-bar" alt="" src={Vetor4} />
                  <div className="lixav">
                  lixadeiras e abrasivos
                  </div>
                </div>           
                </Link>
              </div>

              <div className='projetorasDeTextura'>
              <Link to="/ProdutoCompra">
              <img className="Pecas-img" alt="" src={Vetor9} />
                  <div className="Pecas">
                  <img className="Pecas-bar" alt="" src={Vetor4} />
                  <div className="Pecas-div">
                  Peças
                  </div>
                </div>           
                </Link>
              </div>
              

              <div className='projetorasDeTextura'>
              <Link to="/ProdutoCompra">
              <img className="acessorios-img" alt="" src={Vetor9} />
                  <div className="acessorios">
                  <img className="acessorios-bar" alt="" src={Vetor4} />
                  <div className="acessorios-div">
                  acessórios
                  </div>
                </div>           
                </Link>
              </div>
            </div>
          </div>
      <Header />
    </div>
  );
};

export default CategoriasDeProdutos;

