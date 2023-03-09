import { Icon } from '@iconify/react';
import Header from '../../components/Header'
import "./Styles.css";

import Vetor from '../../assets/image/vector-117.svg'
import Vetor1 from '../../assets/image/vector-116.svg'
import Search from '../../assets/image/seach.svg'
import Ellipse from '../../assets/image/ellipse-6.svg'
import Global from '../../assets/image/global1-1@2x.png'
import Phone2 from '../../assets/image/phone2.svg'
import Seta from '../../assets/image/seta.svg'

import Phone from '../../assets/image/phone32.svg'
import Social from '../../assets/image/redes-sociais-icon7.svg'
import Pin from '../../assets/image/pin11.svg'
import Nauber from '../../assets/image/logo-nauber@2x.png'


function Assistencia(){
  return (
    <div className="assistncia-div">
      <Header />
      <div className="footer-div2">
        <div className="footer-div3">
          <div className="bg-div2" />
          
          <div className="siga-nas-redes-sociais1">Siga nas redes sociais</div>
          <div className="nauber-2022-todos-os-direito1">
            Nauber © 2022 Todos os direitos reservados.
          </div>
          <div className="politicas-de-privacidade-ter1">
            Politicas de Privacidade | Termos de Uso
          </div>
          <div className="nauber-maquinas-e-equipamentos1">
            20.633.257/0001-98 | NAUBER MAQUINAS E EQUIPAMENTOS
          </div>
          <div className="redes-sociais-icon2">
          <a href="https://www.facebook.com/naubermaquinas"><Icon icon="ic:baseline-facebook" className="ItemSocial" color="#fff" /></a>
          <a href="https://www.instagram.com/naubermaquinas/"><Icon icon="mdi:instagram" className="ItemSocial" color="#fff" /></a>
          <a href="https://www.youtube.com/@naubermaquinas2080"><Icon icon="mdi:youtube" className="ItemSocial" color="#fff" /></a>
          <a href="https://www.tiktok.com/@naubermaquinas"><Icon icon="ic:baseline-tiktok" className="ItemSocial" color="#fff" /></a>
          </div>
          <div className="dvidas-div1">
            <div className="converse-com-um-especialista1">
              Converse com um especialista
            </div>
            <div className="envie-um-e-mail1">Envie um e-mail</div>
            <div className="voltar-ao-incio1">Voltar ao início</div>
            <div className="ficou-com-dvidas1">Ficou com dúvidas?</div>
          </div>
          <div className="produtos-div4">
            <div className="construo-civil-div1">Construção civil</div>
            <div className="linha-industrial-div1">Linha industrial</div>
            <div className="ficou-com-dvidas1">Produtos</div>
          </div>
          <div className="nossa-sede-div2">
            <div className="rua-mal-castelo-branco-24771">
              <p className="rua-mal-castelo1">
                Rua Mal. Castelo Branco, 2477 Centro
              </p>
              <p className="schroeder-sc1">Schroeder - SC.</p>
            </div>
            <div className="div3">+55 (47) 3374-5969</div>
            <div className="div4">+55 (11) 96364-6599</div>
            <div className="div5">+55 (47) 98821-2725</div>
            <div className="nossa-sede-div3">Nossa sede</div>
          </div>
          
          <div className="line-div3" />
          <img
            className="logo-nauber-icon1"
            alt=""
            src={Nauber}
          />
          <div className="rectangle-div27" />
        </div>
      </div>
      <div className="headline-div">
        <img className="vector-icon15" alt="" src={Vetor} />
        <img className="vector-icon16" alt="" src={Vetor1} />
        <b className="assistncias-b2">assistências</b>
      </div>
      <div className="card-endereo-div">
        <div className="rectangle-div29" />
        <b className="localize-a-assistncia-mais-pr">
          Localize a assistência mais próximo de você
        </b>
        <div className="ou-div">ou</div>
        <div className="ou-div1">ou</div>
        <div className="virificar-endereo-div">
          <div className="cep-div">
            <div className="rectangle-div30" />
            <img className="seach-icon" alt="" src={Search} />
            <input type="text" className="informe-seu-cep" placeholder="Informe seu CEP" />
          </div>
          <div className="cidade-div">
            <div className="rectangle-div30" />
            <img className="seach-icon" alt="" src={Search} />
            <input type="text" className="informe-seu-cep" placeholder="Informe a sua Cidade"/>
          </div>
        </div>
        <div className="localizao-div">
          <div className="concordo-em-compartilhar-a-min">
            concordo em compartilhar a minha localização geográfica atual.
          </div>
          <div className="rectangle-div32" />
          <img className="ellipse-icon" alt="" src={Ellipse} />
          <img className="global-1-1-icon" alt="" src={Global} />
          <input type="text" className="usar-minha-localizao" placeholder="Usar minha localização" />
          <div className="verificado-div">
            <div className="rectangle-div33" />
            <input type="checkbox" class="vector-icon17"/>
          </div>
        </div>
      </div>
      <b className="assistncias-mais-prximas">assistências mais próximas</b>
      <div className="linha-1-div">
        <div className="assistncia-div1">
          <div className="rectangle-div34" />
          <div className="rectangle-div35" />
          <div className="cidade-que-atende-nome-da-cid">
            <span className="cidade-que-atende">Cidade que atende:</span>
            <span>{` Nome da cidade `}</span>
          </div>
          <div className="div6">(41) 90000-0000</div>
          <b className="nome-da-assistncia">Nome da assistência</b>
          <div className="localizao-rua-bla-bla-bla-">
            Localização: Rua bla bla bla - n°000
          </div>
          <div className="email-assistencialojacombr-div">
            Email: assistencia@loja.com.br
          </div>
          <img className="phone-icon2" alt="" src={Phone2} />
          <img className="seta-icon" alt="" src={Seta} />
        </div>
        <div className="assistncia-div2">
          <div className="rectangle-div34" />
          <div className="rectangle-div35" />
          <div className="cidade-que-atende-nome-da-cid">
            <span className="cidade-que-atende">Cidade que atende:</span>
            <span>{` Nome da cidade `}</span>
          </div>
          <div className="div6">(41) 90000-0000</div>
          <b className="nome-da-assistncia">Nome da assistência</b>
          <div className="localizao-rua-bla-bla-bla-">
            Localização: Rua bla bla bla - n°000
          </div>
          <div className="email-assistencialojacombr-div">
            Email: assistencia@loja.com.br
          </div>
          <img className="phone-icon2" alt="" src={Phone2} />
          <img className="seta-icon" alt="" src={Seta} />
        </div>
        <div className="assistncia-div3">
          <div className="rectangle-div34" />
          <div className="rectangle-div35" />
          <div className="cidade-que-atende-nome-da-cid">
            <span className="cidade-que-atende">Cidade que atende:</span>
            <span>{` Nome da cidade `}</span>
          </div>
          <div className="div6">(41) 90000-0000</div>
          <b className="nome-da-assistncia">Nome da assistência</b>
          <div className="localizao-rua-bla-bla-bla-">
            Localização: Rua bla bla bla - n°000
          </div>
          <div className="email-assistencialojacombr-div">
            Email: assistencia@loja.com.br
          </div>
          <img className="phone-icon2" alt="" src={Phone2} />
          <img className="seta-icon" alt="" src={Seta} />
        </div>
      </div>
      <div className="linha-2-div">
        <div className="assistncia-div1">
          <div className="rectangle-div34" />
          <div className="rectangle-div35" />
          <div className="cidade-que-atende-nome-da-cid">
            <span className="cidade-que-atende">Cidade que atende:</span>
            <span>{` Nome da cidade `}</span>
          </div>
          <div className="div6">(41) 90000-0000</div>
          <b className="nome-da-assistncia">Nome da assistência</b>
          <div className="localizao-rua-bla-bla-bla-">
            Localização: Rua bla bla bla - n°000
          </div>
          <div className="email-assistencialojacombr-div">
            Email: assistencia@loja.com.br
          </div>
          <img className="phone-icon2" alt="" src={Phone2} />
          <img className="seta-icon" alt="" src={Seta} />
        </div>
        <div className="assistncia-div2">
          <div className="rectangle-div34" />
          <div className="rectangle-div35" />
          <div className="cidade-que-atende-nome-da-cid">
            <span className="cidade-que-atende">Cidade que atende:</span>
            <span>{` Nome da cidade `}</span>
          </div>
          <div className="div6">(41) 90000-0000</div>
          <b className="nome-da-assistncia">Nome da assistência</b>
          <div className="localizao-rua-bla-bla-bla-">
            Localização: Rua bla bla bla - n°000
          </div>
          <div className="email-assistencialojacombr-div">
            Email: assistencia@loja.com.br
          </div>
          <img className="phone-icon2" alt="" src={Phone2} />
          <img className="seta-icon" alt="" src={Seta} />
        </div>
        <div className="assistncia-div3">
          <div className="rectangle-div34" />
          <div className="rectangle-div35" />
          <div className="cidade-que-atende-nome-da-cid">
            <span className="cidade-que-atende">Cidade que atende:</span>
            <span>{` Nome da cidade `}</span>
          </div>
          <div className="div6">(41) 90000-0000</div>
          <b className="nome-da-assistncia">Nome da assistência</b>
          <div className="localizao-rua-bla-bla-bla-">
            Localização: Rua bla bla bla - n°000
          </div>
          <div className="email-assistencialojacombr-div">
            Email: assistencia@loja.com.br
          </div>
          <img className="phone-icon2" alt="" src={Phone2} />
          <img className="seta-icon" alt="" src={Seta} />
        </div>
      </div>
      <div className="linha-3-div">
        <div className="assistncia-div1">
          <div className="rectangle-div34" />
          <div className="rectangle-div35" />
          <div className="cidade-que-atende-nome-da-cid">
            <span className="cidade-que-atende">Cidade que atende:</span>
            <span>{` Nome da cidade `}</span>
          </div>
          <div className="div6">(41) 90000-0000</div>
          <b className="nome-da-assistncia">Nome da assistência</b>
          <div className="localizao-rua-bla-bla-bla-">
            Localização: Rua bla bla bla - n°000
          </div>
          <div className="email-assistencialojacombr-div">
            Email: assistencia@loja.com.br
          </div>
          <img className="phone-icon2" alt="" src={Phone2} />
          <img className="seta-icon" alt="" src={Seta} />
        </div>
        <div className="assistncia-div2">
          <div className="rectangle-div34" />
          <div className="rectangle-div35" />
          <div className="cidade-que-atende-nome-da-cid">
            <span className="cidade-que-atende">Cidade que atende:</span>
            <span>{` Nome da cidade `}</span>
          </div>
          <div className="div6">(41) 90000-0000</div>
          <b className="nome-da-assistncia">Nome da assistência</b>
          <div className="localizao-rua-bla-bla-bla-">
            Localização: Rua bla bla bla - n°000
          </div>
          <div className="email-assistencialojacombr-div">
            Email: assistencia@loja.com.br
          </div>
          <img className="phone-icon2" alt="" src={Phone2} />
          <img className="seta-icon" alt="" src={Seta} />
        </div>
        <div className="assistncia-div3">
          <div className="rectangle-div34" />
          <div className="rectangle-div35" />
          <div className="cidade-que-atende-nome-da-cid">
            <span className="cidade-que-atende">Cidade que atende:</span>
            <span>{` Nome da cidade `}</span>
          </div>
          <div className="div6">(41) 90000-0000</div>
          <b className="nome-da-assistncia">Nome da assistência</b>
          <div className="localizao-rua-bla-bla-bla-">
            Localização: Rua bla bla bla - n°000
          </div>
          <div className="email-assistencialojacombr-div">
            Email: assistencia@loja.com.br
          </div>
          <img className="phone-icon2" alt="" src={Phone2} />
          <img className="seta-icon" alt="" src={Seta} />
        </div>
      </div>
    </div>
  );
};

export default Assistencia;
