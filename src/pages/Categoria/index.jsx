import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import Header from "../../components/Header";
import "./Styles.css";

import ConstrucaoCivil from "../../assets/image/ConstrucaoCivil.png";
import Vetor from "../../assets/image/vector-87@2x.png";
import LinhaIndustrial from "../../assets/image/LinhaIndustrial.png";
import Vetor2 from "../../assets/image/vector-89.svg";
import Vetor3 from "../../assets/image/vector-90.svg";

import Nauber from "../../assets/image/logo-nauber@2x.png";

function Categoria() {
  const { t } = useTranslation();

  const [categorias, setCategorias] = useState([]);

  async function fetchCategorias() {
    try {
      const response = await axios.get("http://www.lojanauber.com.br/app/categoria_primaria");
      setCategorias(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect(() => {
    fetchCategorias();
  }, []);

  return (
    <>
      <div className="categoria-div">
        <div className="footer-div28">
          <div className="footer-div29">
            <div className="bg-div15" />

            <div className="siga-nas-redes-sociais14">
              Siga nas redes sociais
            </div>
            <div className="nauber-2022-todos-os-direito14">
              Nauber © 2022 Todos os direitos reservados.
            </div>
            <div className="politicas-de-privacidade-ter14">
              Politicas de Privacidade | Termos de Uso
            </div>
            <div className="nauber-maquinas-e-equipamentos14">
              20.633.257/0001-98 | NAUBER MAQUINAS E EQUIPAMENTOS
            </div>
            <div className="redes-sociais-icon2">
              <a href="https://www.facebook.com/naubermaquinas">
                <Icon
                  icon="ic:baseline-facebook"
                  className="ItemSocial"
                  color="#fff"
                />
              </a>
              <a href="https://www.instagram.com/naubermaquinas/">
                <Icon
                  icon="mdi:instagram"
                  className="ItemSocial"
                  color="#fff"
                />
              </a>
              <a href="https://www.youtube.com/@naubermaquinas2080">
                <Icon icon="mdi:youtube" className="ItemSocial" color="#fff" />
              </a>
              <a href="https://www.tiktok.com/@naubermaquinas">
                <Icon
                  icon="ic:baseline-tiktok"
                  className="ItemSocial"
                  color="#fff"
                />
              </a>
            </div>
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
              <div className="ficou-com-dvidas14">{t("PRODUTOS")}</div>
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

            <div className="line-div35" />
            <img className="logo-nauber-icon14" alt="" src={Nauber} />
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
            <img className="line-icon7" alt="" src={ConstrucaoCivil} />
          </div>
          <div className="Construcao">
          {categorias.map((categoria) => (
            <div key={categoria.id}>
              <Link to={`/Categoria/Categorias/${categoria.id}`}>
                <img className="vector-icon138" alt="" src={categoria.photo} />
              </Link>
              <div className="rectangle-div302" />
              <Link to={`/Categoria/Categorias/${categoria.id}`} className="construo-civil-b">
                {categoria.name}
              </Link>
            </div>
          ))}
        </div>
          <div className="Industrial">
            <Link to="/Categoria/CategoriasDeProdutos">
              <img className="vector-icon139" alt="" src={LinhaIndustrial} />
            </Link>
            <Link to="/Categoria/CategoriasDeProdutos">
              <img className="vector-icon140" alt="" src={Vetor3} />
            </Link>
            <Link
              to="/Categoria/CategoriasDeProdutos"
              className="linha-industrial-b1"
            >
              {t("Linha Industrial")}
            </Link>
          </div>

          <div></div>
        </div>
      </div>
      <Header />
    </>
    /*      */
  );
}

export default Categoria;
