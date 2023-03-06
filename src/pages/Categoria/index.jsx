import {Link} from 'react-router-dom'
import Header from '../../components/Header'  
import "./Styles.css";

import Line from '../../assets/image/line-4.svg'
import Vetor from '../../assets/image/vector-87@2x.png'
import Vetor1 from '../../assets/image/vector-88@2x.png'
import Vetor2 from '../../assets/image/vector-89.svg'
import Vetor3 from '../../assets/image/vector-90.svg'

import Phone from '../../assets/image/phone32.svg'
import Social from '../../assets/image/redes-sociais-icon7.svg'
import Pin from '../../assets/image/pin11.svg'
import Nauber from '../../assets/image/logo-nauber@2x.png'

function Categoria() {
  return (
    <>   
    <div className="categoria-div">
      <div className="footer-div28">
        <div className="footer-div29">
          <div className="bg-div15" />
          <img className="phone-icon36" alt="" src={Phone} />
          <div className="siga-nas-redes-sociais14">Siga nas redes sociais</div>
          <div className="nauber-2022-todos-os-direito14">
            Nauber © 2022 Todos os direitos reservados.
          </div>
          <div className="politicas-de-privacidade-ter14">
            Politicas de Privacidade | Termos de Uso
          </div>
          <div className="nauber-maquinas-e-equipamentos14">
            20.633.257/0001-98 | NAUBER MAQUINAS E EQUIPAMENTOS
          </div>
          <img
            className="redes-sociais-icon14"
            alt=""
            src={Social}
          />
          <div className="dvidas-div14">
            <div className="converse-com-um-especialista14">
              Converse com um especialista
            </div>
            <div className="envie-um-e-mail14">Envie um e-mail</div>
            <div className="voltar-ao-incio14">Voltar ao início</div>
            <div className="ficou-com-dvidas14">Ficou com dúvidas?</div>
          </div>
          <div className="produtos-div44">
            <div className="construo-civil-div14">Construção civil</div>
            <div className="linha-industrial-div15">Linha industrial</div>
            <div className="ficou-com-dvidas14">Produtos</div>
          </div>
          <div className="nossa-sede-div28">
            <div className="rua-mal-castelo-branco-247715">
              <p className="rua-mal-castelo14">
                Rua Mal. Castelo Branco, 2477 Centro
              </p>
              <p className="schroeder-sc14">Schroeder - SC.</p>
            </div>
            <div className="div65">+55 (47) 3374-5969</div>
            <div className="div66">+55 (11) 96364-6599</div>
            <div className="div67">+55 (47) 98821-2725</div>
            <div className="nossa-sede-div29">Nossa sede</div>
          </div>
          <img className="pin-icon15" alt="" src={Pin} />
          <div className="line-div35" />
          <img
            className="logo-nauber-icon14"
            alt=""
            src={Nauber}
          />
          <div className="rectangle-div299" />
        </div>
      </div>
      <div className="tipos-de-ferramentas">
        <div className="tpicos-feiras-div">
          <div className="tipos-de-ferramentas1">TIPOS DE FERRAMENTAS</div>
          <div className="rectangle-div300" />
        </div>
        <div className="tpico-lanamento-div7">
          <div className="tipos-de-ferramentas2">Tipos de Ferramentas</div>
          <div className="rectangle-div301" />
          <div className="line-div36" />
          <img className="line-icon7" alt="" src={Line} />
        </div>
        <div className='Construcao'>
        <Link to="/Categorias">
        <img className="vector-icon138" alt="" src={Vetor} /></Link>
        <div className="rectangle-div302" />
          
          <Link to="/Categorias">
            <img 
                className="vector-icon141" 
                alt="" 
                src={Vetor2} 
            />
          </Link>
          <Link 
               to="/Categorias" 
               className="construo-civil-b">
                Construção Civil
          </Link>
          </div>
        <div className='Industrial'>
        <Link to="/CategoriasDeProdutos">
        <img className="vector-icon139" alt="" src={Vetor1} /></Link>
        <Link to="/CategoriasDeProdutos">
        <img className="vector-icon140" alt="" src={Vetor3} /></Link>
        <Link to="/CategoriasDeProdutos" className="linha-industrial-b1">Linha Industrial</Link>
        </div>

        <div>

        </div>
      </div>
    </div>
    <Header />
    </>
    /*      */
  );
};

export default Categoria;
