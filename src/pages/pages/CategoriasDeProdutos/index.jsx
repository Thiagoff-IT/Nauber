import {Link} from 'react-router-dom'
import Header from "../../components/Header";
import "./Styles.css";

import Vetor from '../../assets/image/vector-107@2x.png'
import Vetor1 from '../../assets/image/vector-1071.svg'
import Vetor2 from '../../assets/image/vector-1074.svg'
import Vetor3 from '../../assets/image/vector-94@2x.png'
import Vetor5 from '../../assets/image/vector-105@2x.png'
import Vetor6 from '../../assets/image/vector-106@2x.png'
import Vetor4 from '../../assets/image/vector-1077.svg'
import Vetor7 from '../../assets/image/vector-111@2x.png'
import Vetor8 from '../../assets/image/vector-10713.svg'
import Vetor9 from '../../assets/image/vector-96@2x.png'
import Vetor10 from '../../assets/image/vector-97@2x.png'

function CategoriasDeProdutos(){
  return (
    <div className="categorias-de-produtos">
      <div className="footer-div24">
        <div className="footer-div25">
          <div className="bg-div13" />
          <img className="phone-icon34" alt="" src="src\assets\image\phone34.svg" />
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
          <img
            className="redes-sociais-icon12"
            alt=""
            src="src\assets\image\redes-sociais-icon1.svg"
          />
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
          <img className="pin-icon13" alt="" src="src\assets\image\pin13.svg" />
          <div className="line-div31" />
          <img
            className="logo-nauber-icon12"
            alt=""
            src="src\assets\image\logo-nauber@2x.png"
          />
          <div className="rectangle-div295" />
        </div>
      </div>
      <div className="group-div26">
        <div className="quadro-linha-1">
          <img className="vector-icon68" alt="" src={Vetor} />
          <img className="vector-icon69" alt="" src={Vetor} />
          <img className="vector-icon70" alt="" src={Vetor} />
          <div className="projetoras-de-textura">
            <img className="vector-icon71" alt="" src={Vetor1}/>
            <div className="projetoras-de-textura1">projetoras de textura</div>
          </div>
          <div className="projetoras-de-textura2">
            <img className="vector-icon71" alt="" src={Vetor1} />
            <div className="equipamentos-airless-div">equipamentos airless</div>
          </div>
          <div className="projetoras-de-textura3">
            <img className="vector-icon71" alt="" src={Vetor1} />
            <div className="demarcao-viria-div">demarcação viária</div>
          </div>
        </div>
        <div className="quadro-linha-2">
          <img className="vector-icon74" alt="" src={Vetor7}/>
          <img className="vector-icon75" alt="" src={Vetor5} />
          <img className="vector-icon76" alt="" src={Vetor5} />
          <img className="vector-icon77" alt="" src={Vetor6} />
          <div className="aspiradores-div1">
            <img className="vector-icon78" alt="" src={Vetor2} />
            <div className="aspiradores-div2">
              <Link to="/ProdutoCompra">
                ASPIRADORES
              </Link>
            </div>
          </div>
          <div className="aspiradores-div3">
            <img className="vector-icon79" alt="" src={Vetor2} />
            <div className="lixadeiras-div1">lixadeiras</div>
          </div>
          <div className="aspiradores-div4">
            <img className="vector-icon78" alt="" src={Vetor2} />
            <div className="misturadores-div1">misturadores</div>
          </div>
        </div>
        <div className="quadro-linha-3">
          <img className="vector-icon81" alt="" src={Vetor3} />
          <img className="vector-icon70" alt="" src={Vetor3}/>
          <img className="vector-icon83" alt="" src={Vetor3} />
          <img className="vector-icon84" alt="" src={Vetor3} />
          <div className="compressor-div">
            <img className="vector-icon85" alt="" src={Vetor4}/>
            <div className="compressor-div1">compressor</div>
          </div>
          <div className="compressor-div2">
            <img className="vector-icon86" alt="" src={Vetor4} />
            <div className="fresadora-div">fresadora</div>
          </div>
          <div className="compressor-div3">
            <img className="vector-icon87" alt="" src={Vetor4} />
            <div className="desempenadeiras-div">desempenadeiras</div>
          </div>
        </div>
        <div className="quadro-linha-4">
          <img className="vector-icon76" alt="" src={Vetor7} />
          <div className="bicos-airless-div">
            <img className="vector-icon78" alt="" src={Vetor2} />
            <div className="bicos-airless-div1">bicos airless</div>
          </div>
          <div className="bicos-airless-div2">
            <img className="vector-icon70" alt="" src={Vetor7} />
            <img className="vector-icon83" alt="" src={Vetor7} />
            <img className="vector-icon83" alt="" src={Vetor7} />
            <img className="vector-icon93" alt="" src={Vetor2} />
            <img className="vector-icon94" alt="" src={Vetor2} />
            <div className="pistolas-airless-div">pistolas airless</div>
          </div>
          <div className="bicos-airless-div3">
            <img className="vector-icon78" alt="" src={Vetor2} />
            <div className="filmes-de-mascaramento">filmes de mascaramento</div>
          </div>
        </div>
        <div className="quadro-linha-5">
          <img className="vector-icon70" alt="" src={Vetor9} />
          <img className="vector-icon97" alt="" src={Vetor10} />
          <div className="projetoras-de-textura2">
            <img className="vector-icon98" alt="" src={Vetor8} />
            <div className="equipamentos-airless-div">
              lixadeiras e abrasivos
            </div>
          </div>
        </div>
      </div>
      <Header />
    </div>
  );
};

export default CategoriasDeProdutos;
