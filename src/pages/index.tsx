import React, { useState } from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'
import Menu from '../components/Menu'
import Logo from '../components/Logo'
import HandsBrainIcon from '../components/HandsBrainIcon'
import BrainHeartIcon from '../components/BrainHeartIcon'
import Meditation from '../components/Meditation'

import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const Home: React.FC = () => {
  const [carouselIndex, setCarouselIndex] = useState(0)
  return (
    <Container>
      <Head>
        <title>Sara Melo | Taróloca Sistêmica</title>
      </Head>
      <Menu/>
      <main>
        <section id="inicio">
          <Logo/>
          <h1>Sara Melo</h1>
          <h3>Taróloga Sistêmica</h3>
        </section>
        <section id="sobre">
          <article className="first">
              <h2>Sobre</h2>
              <p>Sou estudiosa das artes divinatórias, desde a infância, e tenho fascínio pelas ciências, técnicas e estudos relativos ao autoconhecimento. Foi em meio a essa busca de crescimento pessoal que o Tarot entrou na minha vida para ficar. Por meio da leitura do Tarot, venho orientando pessoas, proporcionando direcionamento e trazendo reflexões de forma positiva e libertadora. Permita-se!</p>
              <p>O Tarot é uma ferramenta de autoconhecimento com 78 cartas, por meio da qual podemos fazer previsões. Assim, algo pode ser PRÉ-VISTO e, com isso, PRÉ-ANALISADO, para que, com nosso livre arbítrio, tenhamos CONSCIÊNCIA e possamos fazer ESCOLHAS melhores</p>
          </article>
          <article className="third">
            <div>
              <HandsBrainIcon/>
              <strong>Autoconhecimento</strong>
              <span>Se conheça mais</span>
            </div>
            <div>
              <Meditation/>
              <strong>Desenvolvimento</strong>
              <span>Esteja em constante melhoria</span>
            </div>
            <div>
              <BrainHeartIcon/>
              <strong>Consciência</strong>
              <span>Perceba e esteja presente no agora</span>
            </div>
          </article>
          <article className="fourth">
              <p>A minha leitura de Tarot baseia-se na técnica de interpretação simbólica das cartas e suas análises combinatórias. Para tanto, utilizo reflexões da Psicologia Analítica sobre os Arquétipos Coletivos e a Análise Sistêmica dos fatos. Assim, o consulente poderá fazer perguntas ou, simplesmente, deixar que o Tarot lhe revele o que necessita saber naquele momento da sua vida.</p>
          </article>
        </section>
        <section id="depoimentos">
          <h2>Depoimentos</h2>
          <strong>Veja o que alguns depoimentos de clientes</strong>
          <Carousel   plugins={['arrows']}>
            <div>
              <p>Sara, além de ser minha melhor amiga de anos, ela ainda é meu anjo da guarda sem asas, meu guia espiritual encarnado e a luz de esclarecimento do meu caminho.  Sara é taróloga e tem um dom fora do normal de lhe trazer discernimento em meio as atribuições rotineiras.</p>
              <strong>@mallorca</strong>
            </div>
            <div>
              <p>Um momento incrível, único, sensível e de muitas verdades. A experiência de refletir sobre você mesmo e sobre aquilo que está a sua volta... Sentir o universo e compreender que você não está sozinho. Somo um pedaço de um todo, e temos a responsabilidade sobre as coisas e os seres que estão a nossa volta.</p>
              <strong>@phenriquebrito</strong>
            </div>
            <div>
              <p>Não posso dizer que tinha medo, mas apesar de acreditar em astrologia e muitas outras coisas, nunca tinha experimentado o tarot. Posso dizer que foi muito revelador e que me ajudou muito a me conhecer melhor. Quero também salientar o trabalho de Sara, sua técnica, sua leitura, simplesmente perfeitas.</p>
              <strong></strong>
            </div>
            <Dots
              value={carouselIndex}
              onChange={setCarouselIndex}
            />
          </Carousel>
        </section>
        <section id="serviços">
          <h2>Serviços</h2>
          <article>
            <div>
              <p>R$ 120</p>
              <strong>Consulta Online 30 Minutos</strong>
              <span>
                30 minutos de cosulta
                <br/>
                Suporte total via Whatsapp
              </span>
            </div>
            <div>
              <p>R$ 200</p>
              <strong>Consulta Online 60 Minutos</strong>
              <span>
                60 minutos de cosulta
                <br/>
                Suporte total via Whatsapp
              </span>
            </div>
            <div>
              <p>R$ 250</p>
              <strong>Consulta Presencial 60 minutos</strong>
              <span>
                60 minutos de cosulta
                <br/>
                Atendimento presencial
              </span>
            </div>
          </article>
        </section>
        <section id="contatos">
          <h2>Entre em contato</h2>
          <ul>
            <li><a href="">329 WASHINGTON ST BOSTON, MA 02108</a></li>
            <li><a href="">(84) 9665-0333</a></li>
            <li><a href="">@asuaterapeuta</a></li>
          </ul>
        </section>
      </main>
    </Container>
  )
}

export default Home;
