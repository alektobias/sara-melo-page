import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  main {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    section {
      h1 {
        font-size: 96px;
        color: #222;
        font-family: 'Sacramento', cursive;
      }
      h2 {
          color: ${props => props.theme.colors.primary};
          font-weight: 700;
          font-size: 48px;
          max-width:650px;
          margin: 0 auto 24px; 
        }
      h3 {
        font-size: 32px;
        font-weight: 300; 
        color: ${props => props.theme.colors.primary};
      }
      p {
        color: ${props => props.theme.colors.text};
        font-weight: 1.3rem;
      }
    }
    #inicio {
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      
    }
    #sobre {
      article {
        padding: 24px 0;
      }
      h2{
        
      }
      .first {
      
        p {
          margin-bottom: 16px;
          max-width: 650px;
          line-height: 1.5em;
          margin: 0 auto 16px;
        }
      }

      .third {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 48px;
        max-width:1100px;
        margin: 0 auto;
        div {  
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          svg {
            fill:  ${props => props.theme.colors.primary}; 
            height: 64px;
            width: auto;
            margin-bottom: 16px;
          }
          strong {
            color: ${props => props.theme.colors.primary}; 
            font-size: 24px;
          }
        }
      }
      .fourth {
        max-width: 650px;
        margin: 0 auto 16px;
        line-height: 1.5em;
      }
    }
    #depoimentos {
      max-width: 650px;
      margin: 0 auto;
      strong {
        margin-bottom: 100px;
      }
      article {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 16px;
        margin-top: 16px;
        div {
          padding: 16px;
          p {
            margin-bottom: 8px;
            color: #333;
            text-align: justify;
          }
          strong {
            color: ${props => props.theme.colors.primary}
          }
        }

      }
    }
    #serviços {
      padding: 48px 0;
      article {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        max-width: 1100px;
        margin: 0 auto;
        div {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          strong {}
          p {}
          span {}
        }
      }
    }
    #contatos {
      max-width: 650px;
      margin: 0 auto;

      ul {
        list-style: none;
        li {
          padding: 8px 16px;
          a {
            color: #000;
            text-decoration: none;
          }
        }
      
      }
    }
  }
`
