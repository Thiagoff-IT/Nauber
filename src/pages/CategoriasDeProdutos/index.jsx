import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './Styles.css';

import Vetor from '../../assets/image/vector-107@2x.png';
import Vetor1 from '../../assets/image/vector-1071.svg';

import Social from '../../assets/image/redes-sociais-icon7.svg';
import Nauber from '../../assets/image/logo-nauber@2x.png';
import { Icon } from '@iconify/react';

function CategoriasDeProdutos() {
  const { t } = useTranslation();

  const { id } = useParams();

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch(`http://www.lojanauber.com.br/app/classe/2`)
      .then((response) => response.json())
      .then((data) => {
        setProdutos(data);
      });
  }, [id]);

  return (
    <>
      <div className="categorias-de-produtos">
        <Header />
        <div className="group-div26">
          <div className="quadro-linha-1">
            {produtos && (
              <>
                <div className="projetorasDeTextura">
                  <Link to={`/Produtos/${produtos.id}`}>
                    <img
                      className="vector-icon70"
                      src={`data:image/png;base64, ${produtos.photo}`}
                      alt={produtos.name}
                    />
                    <div className="projetoras-de-textura2">
                      <img className="airless-bar" alt="" src={Vetor1} />
                      <div className="equipamentos-airless-div">{produtos.name}</div>
                    </div>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
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
              <a href="https://www.facebook.com/naubermaquinas">
                <Icon icon="ic:baseline-facebook" className="ItemSocial" color="#fff" />
              </a>
              <a href="https://www.instagram.com/naubermaquinas/">
                <Icon icon="mdi:instagram" className="ItemSocial" color="#fff" />
              </a>
              <a href="https://www.youtube.com/@naubermaquinas2080">
                <Icon icon="mdi:youtube" className="ItemSocial" color="#fff" />
              </a>
              <a href="https://www.tiktok.com/@naubermaquinas">
                <Icon icon="ic:baseline-tiktok" className="ItemSocial" color="#fff" />
              </a>
            </div>
            <div className="dvidas-div12">
              <div className="converse-com-um-especialista12">Converse com um especialista</div>
              <div className="envie-um-e-mail12">Envie um e-mail</div>
              <div className="voltar-ao-incio12">Voltar ao início</div>
              <div className="ficou-com-dvidas12">Ficou com dúvidas?</div>
            </div>
            <div className="produtos-div38">
              <div className="construo-civil-div12">Construção civil</div>
              <div className="linha-industrial-div13">Linha industrial</div>
              <div className="ficou-com-dvidas12">{t('PRODUTOS')}</div>
            </div>
            <div className="nossa-sede-div24">
              <div className="rua-mal-castelo-branco-247713">
                <p className="rua-mal-castelo12">Rua Mal. Castelo Branco, 2477 Centro</p>
                <p className="schroeder-sc12">Schroeder - SC.</p>
              </div>
              <div className="div59">+55 (47) 3374-5969</div>
              <div className="div60">+55 (47) 99621-0018</div>

              <div className="nossa-sede-div25">Nossa sede</div>
            </div>

            <div className="line-div31" />
            <img className="logo-nauber-icon12" alt="" src={Nauber} />
            <div className="rectangle-div295" />
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriasDeProdutos;
