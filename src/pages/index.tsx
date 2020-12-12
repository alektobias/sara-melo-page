import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'
import Menu from '../components/Menu'
import Logo from '../components/Logo'
import HandsBrainIcon from '../components/HandsBrainIcon'
import BrainHeartIcon from '../components/BrainHeartIcon'
import Meditation from '../components/Meditation'

const Home: React.FC = () => {
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
            <div>
              <h2>Sobre</h2>
              <p>Sou estudiosa das artes divinatórias, desde a infância, e tenho fascínio pelas ciências, técnicas e estudos relativos ao autoconhecimento. Foi em meio a essa busca de crescimento pessoal que o Tarot entrou na minha vida para ficar. Por meio da leitura do Tarot, venho orientando pessoas, proporcionando direcionamento e trazendo reflexões de forma positiva e libertadora. Permita-se!</p>
            </div>
            <p>image</p>
          </article>
          <article className="second">
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
            <div>
              <p>A minha leitura de Tarot baseia-se na técnica de interpretação simbólica das cartas e suas análises combinatórias. Para tanto, utilizo reflexões da Psicologia Analítica sobre os Arquétipos Coletivos e a Análise Sistêmica dos fatos. Assim, o consulente poderá fazer perguntas ou, simplesmente, deixar que o Tarot lhe revele o que necessita saber naquele momento da sua vida.</p>
            </div>
            <div>
              <p>image</p>
            </div>
          </article>
        </section>
        <section id="depoimentos">
          <h2>Depoimentos</h2>
          <span>Veja o que alguns depoimentos de clientes</span>
          <article>
            <div>
              <p></p>
              <strong></strong>
            </div>
            <div>
              <p></p>
              <strong></strong>
            </div>
            <div>
              <p></p>
              <strong></strong>
            </div>
          </article>
        </section>
        <section id="serviços">
          <h2>Serviços</h2>
          <article>
            <div>
              <strong>Consulta Online 30 Minutos</strong>
            </div>
          </article>
        </section>
      </main>
    </Container>
  )
}

export default Home
