import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";

import "./Styles.css";

import BG from "../../assets/image/foto@2x.png";
import varint from "../../assets/image/variant-1default-varint-2new-value.svg";
import bgIcon from "../../assets/image/bg@2x.png";
import NauberPro from "../../assets/image/nauber-pro-1@2x.png";
import Revenda from "../../assets/image/logo-revenda-pro-2@2x.png";
import LogoRevenda from "../../assets/image/logo-revenda-pro-3@2x.png";
import BgIcon from "../../assets/image/bg1@2x.png";
import LogoIcon from "../../assets/image/logo@2x.png";
import Bg2 from "../../assets/image/bg2@2x.png";
import Vetor119 from "../../assets/image/vector-119.svg";
import Line from "../../assets/image/line-3.svg";
import Vector5 from "../../assets/image/vector5.svg";
import Vector6 from "../../assets/image/vector6.svg";
import Check from "../../assets/image/check.svg";
import Vector1 from "../../assets/image/vector1.svg";
import Vector2 from "../../assets/image/vector2.svg";
import Edita from "../../assets/image/p1070842--editado-original-1@2x.png";
import Foto3 from "../../assets/image/foto-3-2@2x.png";
import Foto26 from "../../assets/image/26-2@2x.png";
import Foto2 from "../../assets/image/foto-2-2@2x.png";
import Foto4 from "../../assets/image/foto-4-1@2x.png";
import Foto4_2 from "../../assets/image/foto-4-2@2x.png";

function Home() {
  const { t } = useTranslation();
  return (
    <>
      <div className="home-div">
        <div className="frame-div">
          <div className="hero-div">
            <div className="rectangle-div" />
            <img className="foto-icon" alt="Fundo" src={BG} />

            <div className="subtext-div">
              {t("A evolução é o que nos move o resultado é o que nos inspira")}
            </div>
            <div className="bullets-div">
              <div className="bullet-div">
                <img
                  className="variant-1default-varint-2ne"
                  alt=""
                  src={varint}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="frame-div1"></div>
        <div className="frame-div2">
          <div className="nauber-pro-div">
            <img className="bg-icon" alt="bgIcon" src={bgIcon} />
            <img className="nauber-pro-1" alt="nauberPro" src={NauberPro} />
            <div className="rectangle-div2">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/1_0jbbZlKlg"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; 
                       autoplay; 
                       clipboard-write; 
                       encrypted-media; 
                       gyroscope; 
                       picture-in-picture; 
                       web-share"
                allowFullScreen
              ></iframe>
            </div>
            <img className="logo-revenda-pro-2" alt="Revenda" src={Revenda} />

            <b className="conhea-o-sistema-de-revenda">
              <p className="conhea-o-sistema">{t("CONHEÇA O")}</p>
              <p className="conhea-o-sistema">{t("SISTEMA DE")}</p>
              <p className="revenda-p">{t("REVENDA")}</p>
            </b>
            <b className="nauber-pro1">NAUBER PRO</b>
          </div>
        </div>
        <div className="frame-div3">
          <div className="sobre-a-nauber">
            <img className="bg-icon1" alt="BgIcon" src={BgIcon} />
            <img className="logo-icon" alt="LogoIcon" src={LogoIcon} />
            <div className="boto-div">
              <Link to="/Sobre">
                <div className="rectangle-div4" />
              </Link>
              <Link to="/Sobre" className="saiba-mais">
                {t("SAIBA MAIS")}
              </Link>
            </div>
            <div className="boto-div1">
              <div className="rectangle-div5" />
              <a href="#" className="acesse-uma-revenda-nauber-pro">
                {t("acesse uma revenda nauber pro agora")}
              </a>
            </div>

            <div className="checkbox-div">
              <img className="vector-icon3" alt="" src={Vector1} />
              <img className="vector-icon4" alt="" src={Vector2} />
              <img className="vector-icon5" alt="" src={Vector1} />
              <img className="vector-icon6" alt="" src={Vector2} />
              <img className="check-icon" alt="Check" src={Check} />
              <img className="check-icon1" alt="Check" src={Check} />
              <img className="check-icon2" alt="Check" src={Check} />
              <img className="check-icon3" alt="Check" src={Check} />
              <b className="ps-venda-que-s-a-nauber-tem">
                {t("Pós venda que só a Nauber tem")}
              </b>
              <b className="qualidade-b">{t("Qualidade")}</b>
              <b className="melhor-custo-benefcio">
                {t("Melhor custo benefício")}
              </b>
              <b className="equipamentos-profissionais-b">
                {t("Equipamentos Profissionais")}
              </b>
            </div>

            <b className="subtitulo">
              {t(
                "Os equipamentos e acessórios Nauber são produzidos sob total supervisão de qualidade, sendo que 100% dos equipamentos são testados antes do envio para nossos clientes, garantindo dessa forma a qualidade final, e a satisfação de compra através de equipamentos de ponta."
              )}
            </b>
            <div className="titulo-b">{t("NÓS SOMOS PROFISSIONAIS")}</div>
            <img className="p1070842-editado-original-1" alt="" src={Edita} />
          </div>
        </div>
        <Header />
        <div className="rectangle-div7" />
        <div className="frame-div5">
          <div className="nauber-pro-div">
            <div className="nauber-pro-div">
              <div className="bg-div1" />
              <img className="bg-icon" alt="Bg2" src={Bg2} />
              <img className="vector-icon7" alt="Vetor119" src={Vetor119} />
              <div className="destaque-div">
                <div className="destaques-b">{t("DESTAQUES")}</div>
                <div className="rectangle-div8" />
                <div className="rectangle-div9" />
              </div>
              <div className="fotos-destaque-div">
                <div className="rectangle-div10" />
                <div className="rectangle-div11" />
                <div className="rectangle-div12" />
                <div className="rectangle-div13" />
              </div>
              <div className="tpico-lanamento-div">
                <b className="destaques-b1">{t("DESTAQUES")}</b>
                <div className="rectangle-div14" />
                <img className="line-icon" alt="Line" src={Line} />
                <div className="line-div2" />
              </div>
            </div>
            <div className="produtos-div3">
              <div className="produto-1-div">
                <div className="rectangle-div15" />
                <div className="fresadora-de-parede-nauber-fn">
                  <p className="conhea-o-sistema-Home">
                    {t("Fresadora De Parede Nauber")}
                  </p>
                  <p className="revenda-p-home">FN - 1650</p>
                </div>
                <div className="boto-div2">
                  <div className="rectangle-div16" />
                  <Link to="/ProdutoLogistico" className="saiba-mais-div">
                    {t("SAIBA MAIS")}
                  </Link>
                  <img className="vector-icon8" alt="" src={Vector5} />
                </div>
                <div className="rectangle-div17" />
              </div>
              <div className="produto-2-div">
                <div className="rectangle-div18" />
                <div className="fresadora-de-parede-nauber-fn1">
                  <p className="conhea-o-sistema-Home">
                    {t("Fresadora De Parede Nauber")}
                  </p>
                  <p className="revenda-p-home">FN - 1650</p>
                </div>
                <div className="boto-div2">
                  <div className="rectangle-div19" />
                  <a href="#" className="saiba-mais-div">
                    {t("SAIBA MAIS")}
                  </a>
                  <img className="vector-icon9" alt="" src={Vector6} />
                </div>
                <div className="rectangle-div17" />
              </div>
              <div className="produto-3-div">
                <div className="rectangle-div21" />
                <div className="fresadora-de-parede-nauber-fn2">
                  <p className="conhea-o-sistema-Home">
                    {t("Fresadora De Parede Nauber")}
                  </p>
                  <p className="revenda-p-home">FN - 1650</p>
                </div>
                <div className="boto-div4">
                  <div className="rectangle-div16" />
                  <a href="#" className="saiba-mais-div">
                    {t("SAIBA MAIS")}
                  </a>
                  <img className="vector-icon10" alt="" src={Vector6} />
                </div>
                <div className="rectangle-div17" />
              </div>
              <div className="produto-4-div">
                <div className="rectangle-div24" />
                <div className="fresadora-de-parede-nauber-fn3">
                  <p className="conhea-o-sistema-Home">
                    {t("Fresadora De Parede Nauber")}
                  </p>
                  <p className="revenda-p-home">FN - 1650</p>
                </div>
                <div className="boto-div5">
                  <div className="rectangle-div16" />
                  <a href="#" className="saiba-mais-div">
                    {t("SAIBA MAIS")}
                  </a>
                </div>
                <img className="vector-icon11" alt="" src={Vector5} />
                <img className="vector-icon12" alt="" src={Vector5} />
                <div className="rectangle-div26" />
              </div>
            </div>
            <img className="foto-3-2" alt="" src={Foto3} />
            <img className="icon" alt="" src={Foto26} />
            <img className="foto-2-2" alt="" src={Foto2} />
            <div className="group-div2">
              <img className="foto-4-1" alt="" src={Foto4} />
              <img className="foto-4-2" alt="" src={Foto4_2} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
