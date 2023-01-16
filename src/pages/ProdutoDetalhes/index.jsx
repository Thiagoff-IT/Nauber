import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./Styles.css";

import Vetor from '../../assets/image/vector-1185.svg'
import Vetor3 from '../../assets/image/vector13.svg'
import Seta from '../../assets/image/seta37.svg'
import Image from '../../assets/image/01-23@2x.png'
import Line from '../../assets/image/line-3.svg'
import Seach from '../../assets/image/seach2.svg'
import Global from '../../assets/image/global1-13@2x.png'
import ellipse from '../../assets/image/ellipse-63.svg'
import ellipse1 from '../../assets/image/ellipse-53.svg'
import Play from '../../assets/image/play.svg'
import Vetor1 from '../../assets/image/vector-1178.svg'
import Vetor2 from '../../assets/image/vector-1168.svg'
import Manual from '../../assets/image/manual-1@2x.png'
import Documents from '../../assets/image/fluentdocumentbulletlist24filled2.svg'
import EUA from '../../assets/image/flageua-33@2x.png'
import BR from '../../assets/image/flagbrasil-21@2x.png'
import ES from '../../assets/image/flagespanha-21@2x.png'

function ProdutoDetalhes(){
  return (
    <div className="produto-detalhes1">
    <Header />
    <Footer />
      <img className="vector-icon56" alt="" src={Vetor} />
      <div className="descrio-div4">
        <div className="turbina-de-aspirao-multiuso4">
          <p className="rua-mal-castelo9">
            Turbina de aspiração multiuso extremamente leve e compacta.
          </p>
          <p className="rua-mal-castelo9">
            Função aspiração: ideal para acoplamento em lixadeiras a fim
          </p>
          <p className="rua-mal-castelo9">
            de obter total desempenho em aspiração de partículas.
          </p>
          <p className="rua-mal-castelo9">
            Função sopro: com um poderoso fluxo ar aprimorado para alta
          </p>
          <p className="rua-mal-castelo9">
            eficiência de trabalho e limpeza.IMPORTANTE:Não utilizar o
          </p>
          <p className="schroeder-sc9">equipamento em contato com água</p>
        </div>
        <b className="descrio-b4">descrição</b>
      </div>
      <div className="caractersticas-div4">
        <b className="caractersticas-b4">características</b>
        <div className="acompanha-saco-coletor-capac4">
          <p className="rua-mal-castelo9">
            Acompanha: saco coletor (capacidade para até 70 litros de
          </p>
          <p className="rua-mal-castelo9">
            material), bocal de borracha, adaptador de mangueira de sucção,
          </p>
          <p className="schroeder-sc9">par de carvão e manual.</p>
        </div>
      </div>
      <div className="indicaes-de-uso12">
        <div className="construo-civil-e-industrial4">
          Construção Civil e Industrial.
        </div>
        <b className="indicaes-de-uso13">indicações de uso</b>
      </div>
      <div className="indicaes-de-uso14">
        <div className="potncia-do-motor-750w-veloc4">
          <p className="rua-mal-castelo9">
            POTÊNCIA DO MOTOR: 750W VELOCIDADE DE ROTAÇÃO: 15.000RPM PRESSÃO
            DO AR: 5,5 KPA VOLUME DE AR MÁX.: 3,5 M³/MIN. ALIMENTAÇÃO: 220V /
            50-60Hz PESO LÍQUIDO: 1,9Kg PESO BRUTO: 2,95Kg
          </p>
          <p className="schroeder-sc9">
            MEDIDAS DA EMBALAGEM: 24CM X 34CM X 20CM
          </p>
        </div>
        <b className="dados-tcnicos-b4">{`dados técnicos `}</b>
      </div>
      <div className="group-div23">
        <div className="texto-div5">
          <b className="mquinas-para-pintura10">máquinas para pintura</b>
          <b className="lixadeiras-b5">lixadeiras</b>
          <b className="aspiradores-b5">aspiradores</b>
          <b className="misturadores-b5">misturadores</b>
          <b className="fresadora-de-parede9">fresadora de parede</b>
          <b className="lixas-e-abrasivos5">lixas e abrasivos</b>
          <b className="peas-b5">peças</b>
          <b className="acessrios-b5">acessórios</b>
        </div>
        <img className="seta-icon46" alt="" src={Seta} />
      </div>
      <div className="linha-1-div6">
        <div className="produto-div5">
          <div className="rectangle-div239" />
          <div className="rectangle-div240" />
          <img className="icon26" alt="" src={Image} />
          <b className="d-30x-b25">d-3.0x</b>
        </div>
      </div>
      <div className="encontre-um-revendedor5">
        <div className="rectangle-div241" />
        <b className="mquinas-para-pintura-d-30x5">
          máquinas para pintura d-3.0x
        </b>
      </div>
      <div className="mquinas-div5">
        <img className="vector-icon57" alt="" src={Vetor1} />
        <img className="vector-icon58" alt="" src={Vetor2} />
        <b className="mquinas-para-pintura11">máquinas para pintura</b>
      </div>
      <div className="group-div24">
        <div className="rectangle-div242" />
        <div className="rectangle-div243" />
        <div className="rectangle-div244" />
        <div className="rectangle-div245" />
        <div className="rectangle-div246" />
      </div>
      <div className="video-div5">
        <div className="rectangle-div247" />
        <img className="play-icon5" alt="" src={Play} />
        <b className="apresentao-tcnica-turbina5">
          <p className="rua-mal-castelo9-on">Apresentação Técnica - Turbina</p>
          <p className="schroeder-sc9">Sopro e Aspiração Nauber TBN-750</p>
        </b>
      </div>
      <div className="downloads-div5">
        <b className="downloads-b5">Downloads</b>
        <div className="manual-div5">
          <img className="ellipse-icon18" alt="" src={ellipse1} />
          <b className="manual-de-instrues5">Manual de instruções</b>
          <img className="manual-1-icon5" alt="" src={Manual} />
          <img
            className="flag-brasil-2-icon16"
            alt=""
            src={BR}
          />
          <img
            className="flag-espanha-2-icon6"
            alt=""
            src={ES}
          />
          <img className="flag-eua-2-icon6" alt="" src={EUA} />
        </div>
        <div className="fecha-tcnica-div10">
          <img className="ellipse-icon18" alt="" src={ellipse1} />
          <b className="fecha-tcnica-b5">fecha técnica</b>
          <img
            className="flag-brasil-2-icon16"
            alt=""
            src={BR}
          />
          <img
            className="fluentdocument-bullet-list-24-icon10"
            alt=""
            src={Documents}
          />
          <img
            className="flag-espanha-2-icon6"
            alt=""
            src={ES}
          />
          <img className="flag-eua-2-icon6" alt="" src={EUA}/>
        </div>
        <div className="fecha-tcnica-div11">
          <img className="ellipse-icon18" alt="" src={ellipse1} />
          <b className="vista-explodida-b5">vista explodida</b>
          <img
            className="flag-brasil-2-icon16"
            alt=""
            src={BR}
          />
          <img
            className="fluentdocument-bullet-list-24-icon10"
            alt=""
            src={Documents}
          />
          <img
            className="flag-espanha-3-icon11"
            alt=""
            src={ES}
          />
          <img
            className="flag-eua-3-icon11"
            alt=""
            src={EUA}
          />
        </div>
      </div>
      <div className="card-endereo-div6">
        <div className="rectangle-div248" />
        <div className="concordo-em-compartilhar-a-min3">
          concordo em compartilhar a minha localização geográfica atual.
        </div>
        <b className="localize-o-revendedor-mais-pr2">
          Localize o revendedor mais próximo de você
        </b>
        <div className="ou-div6">ou</div>
        <div className="ou-div7">ou</div>
        <div className="virificar-endereo-div3">
          <div className="rectangle-div249" />
          <div className="rectangle-div250" />
          <input type="text" className="informe-seu-cep3" placeholder="Informe seu CEP"/>
              <input type="text" className="informe-a-sua-cidade4" placeholder="Informe a sua Cidade"/>
        </div>
        <div className="rectangle-div251" />
        <img className="ellipse-icon21" alt="" src={ellipse} />
        <img className="global-1-1-icon3" alt="" src={Global} />
        <div className="usar-minha-localizao3">Usar minha localização</div>
        <div className="verificado-div4">
          <div className="rectangle-div252" />
          <input type="checkbox" className="vector-icon59" />
        </div>
        <img className="seach-icon6" alt="" src={Seach} />
        <img className="seach-icon7" alt="" src={Seach} />
      </div>
      <div className="linha-4-div3">
        <div className="produto-1-div6">
          <div className="rectangle-div253" />
          <b className="d-30x-b26">{`D-3.0X `}</b>
          <div className="breve-descrio-sobre-o-produt20">
            Breve descrição sobre o produto
          </div>
          <div className="boto-div26">
            <div className="rectangle-div254" />
            <div className="saiba-mais-div24">SAIBA MAIS</div>
            <img className="seta-icon47" alt="" src={Seta} />
          </div>
          <div className="rectangle-div255" />
          <img className="icon27" alt="" src={Image} />
        </div>
        <div className="produto-2-div6">
          <div className="rectangle-div253" />
          <b className="d-30x-b26">{`D-3.0X `}</b>
          <div className="breve-descrio-sobre-o-produt20">
            Breve descrição sobre o produto
          </div>
          <div className="boto-div26">
            <div className="rectangle-div254" />
            <div className="saiba-mais-div24">SAIBA MAIS</div>
            <img className="seta-icon47" alt="" src={Seta} />
          </div>
          <div className="rectangle-div255" />
          <img className="icon27" alt="" src={Image} />
        </div>
        <div className="produto-3-div6">
          <div className="rectangle-div253" />
          <b className="d-30x-b26">{`D-3.0X `}</b>
          <div className="breve-descrio-sobre-o-produt20">
            Breve descrição sobre o produto
          </div>
          <div className="boto-div26">
            <div className="rectangle-div254" />
            <div className="saiba-mais-div24">SAIBA MAIS</div>
            <img className="seta-icon47" alt="" src={Seta} />
          </div>
          <div className="rectangle-div255" />
          <img className="icon27" alt="" src={Image} />
        </div>
        <div className="produto-4-div6">
          <div className="rectangle-div253" />
          <b className="d-30x-b26">{`D-3.0X `}</b>
          <div className="breve-descrio-sobre-o-produt20">
            Breve descrição sobre o produto
          </div>
          <div className="boto-div26">
            <div className="rectangle-div254" />
            <div className="saiba-mais-div24">SAIBA MAIS</div>
            <img className="seta-icon47" alt="" src={Seta} />
          </div>
          <div className="rectangle-div255" />
          <img className="icon27" alt="" src={Image} />
        </div>
      </div>
      <div className="tpico-lanamento-div6">
        <b className="produtos-relacionados-b5">produtos relacionados</b>
        <div className="rectangle-div265" />
        <img className="line-icon6" alt="" src={Line} />
        <div className="line-div26" />
      </div>
    </div>
  );
};

export default ProdutoDetalhes;
