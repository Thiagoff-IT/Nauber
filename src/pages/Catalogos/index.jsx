import Header from "../../components/Header";
import "./Styles.css";

import Vetor1 from '../../assets/image/vector-1162.svg'
import Vetor from '../../assets/image/vector-1172.svg'
import Brasil from '../../assets/image/flagbrasil-2@2x.png'
import Espanha from '../../assets/image/flagespanha-2@2x.png'
import EUA from '../../assets/image/flageua-2@2x.png'

import Phone from '../../assets/image/phone32.svg'
import Social from '../../assets/image/redes-sociais-icon7.svg'
import Pin from '../../assets/image/pin11.svg'
import Nauber from '../../assets/image/logo-nauber@2x.png'

function Catalogos(){
  return (
    <div className="catlogos-div3">
      <Header />
      <div className="footer-div6">
        <div className="footer-div7">
          <div className="bg-div4" />
          <img className="phone-icon13" alt="" src={Phone} />
          <div className="siga-nas-redes-sociais3">Siga nas redes sociais</div>
          <div className="nauber-2022-todos-os-direito3">
            Nauber © 2022 Todos os direitos reservados.
          </div>
          <div className="politicas-de-privacidade-ter3">
            Politicas de Privacidade | Termos de Uso
          </div>
          <div className="nauber-maquinas-e-equipamentos3">
            20.633.257/0001-98 | NAUBER MAQUINAS E EQUIPAMENTOS
          </div>
          <img
            className="redes-sociais-icon3"
            alt=""
            src={Social}
          />
          <div className="dvidas-div3">
            <div className="converse-com-um-especialista3">
              Converse com um especialista
            </div>
            <div className="envie-um-e-mail3">Envie um e-mail</div>
            <div className="voltar-ao-incio3">Voltar ao início</div>
            <div className="ficou-com-dvidas3">Ficou com dúvidas?</div>
          </div>
          <div className="produtos-div10">
            <div className="construo-civil-div3">Construção civil</div>
            <div className="linha-industrial-div3">Linha industrial</div>
            <div className="ficou-com-dvidas3">Produtos</div>
          </div>
          <div className="nossa-sede-div6">
            <div className="rua-mal-castelo-branco-24774">
              <p className="rua-mal-castelo3">
                Rua Mal. Castelo Branco, 2477 Centro
              </p>
              <p className="schroeder-sc3">Schroeder - SC.</p>
            </div>
            <div className="div20">+55 (47) 3374-5969</div>
            <div className="div21">+55 (11) 96364-6599</div>
            <div className="div22">+55 (47) 98821-2725</div>
            <div className="nossa-sede-div7">Nossa sede</div>
          </div>
          <img className="pin-icon4" alt="" src={Pin} />
          <div className="line-div7" />
          <img
            className="logo-nauber-icon3"
            alt=""
            src={Nauber}
          />
          <div className="rectangle-div76" />
        </div>
      </div>
      <div className="headline-div2">
        <img className="vector-icon25" alt="" src={Vetor} />
        <img className="vector-icon26" alt="" src={Vetor1} />
        <b className="catlogos-virtuais-b4">catálogos virtuais</b>
      </div>
      <div className="catlogos-div5">
        <div className="linha-varejo-div">
          <div className="rectangle-div78" />
          <div className="rectangle-div79" />
          <b className="linha-varejo-b">linha varejo</b>
        </div>
        <div className="linha-varejo-div1">
          <div className="rectangle-div78" />
          <div className="rectangle-div81" />
          <b className="linha-completa-b">linha completa</b>
          <div className="bandeiras-div">
            <img
              className="flag-brasil-2-icon"
              alt=""
              src={Brasil}
            />
            <img
              className="flag-espanha-2-icon"
              alt=""
              src={Espanha}
            />
            <img className="flag-eua-2-icon" alt="" src={EUA} />
          </div>
        </div>
        <div className="linha-tcnica-div">
          <div className="rectangle-div78" />
          <div className="rectangle-div83" />
          <b className="linha-tcnica-b">linha técnica</b>
        </div>
        <div className="linha-industrial-div4">
          <div className="rectangle-div78" />
          <div className="rectangle-div85" />
          <b className="linha-industrial-b">linha industrial</b>
        </div>
      </div>
    </div>
  );
};

export default Catalogos;
