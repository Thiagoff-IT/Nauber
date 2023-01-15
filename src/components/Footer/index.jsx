import { Link } from "react-router-dom";
import "./Styles.css";
import Pin from '../../assets/image/pin.svg'
import Phone from '../../assets/image/phone.svg'
import Social from '../../assets/image/redes-sociais-icon.svg'
import Nauber from '../../assets/image/logo-nauber@2x.png'

function Footer() {
  return (
    <>
      <div className="frame-div4">
      <div className="group-div">
        <div className="group-div">
          <div className="nauber-pro-div">
            <div className="bg-div" />
            <img 
                className="phone-icon" 
                alt="" 
                src={Phone} 
            />
            <div className="siga-nas-redes-sociais">
              Siga nas redes sociais
            </div>
            <div className="nauber-2022-todos-os-direito">
              Nauber © 2022 Todos os direitos reservados.
            </div>
            <div className="politicas-de-privacidade-ter">
              Politicas de Privacidade | Termos de Uso
            </div>
            <div className="nauber-maquinas-e-equipamentos">
              20.633.257/0001-98 | NAUBER MAQUINAS E EQUIPAMENTOS
            </div>
            <img
              className="redes-sociais-icon"
              alt=""
              src={Social}
            />
            <div className="dvidas-div">
              <div className="converse-com-um-especialista">
                Converse com um especialista
              </div>
              <div className="envie-um-e-mail">Envie um e-mail</div>
              <div className="voltar-ao-incio">Voltar ao início</div>
              <div className="ficou-com-dvidas">Ficou com dúvidas?</div>
            </div>
            <div className="produtos-div1">
              <Link to='/Categorias' className="construo-civil-div">Construção civil</Link>
              <Link to='' className="linha-industrial-div">Linha industrial</Link>
              <div className="ficou-com-dvidas">Produtos</div>
            </div>
            <div className="nossa-sede-div">
              <div className="rua-mal-castelo-branco-2477">
                <p className="conhea-o-sistema">
                  Rua Mal. Castelo Branco, 2477 Centro
                </p>
                <p className="revenda-p">Schroeder - SC.</p>
              </div>
              <div className="div">+55 (47) 3374-5969</div>
              <div className="div1">+55 (11) 96364-6599</div>
              <div className="div2">+55 (47) 98821-2725</div>
              <div className="nossa-sede-div1">Nossa sede</div>
            </div>
            <img 
                className="pin-icon" 
                alt="" 
                src={Pin} 
            />
            <div className="line-div1" />
            <img
              className="logo-nauber-icon"
              alt=""
              src={Nauber}
            />
            <div className="rectangle-div6" />
          </div>
        </div>
      </div>
    </div>
    </>

);
};
export default Footer;
