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
          margin-bottom: 16px;
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
      .first {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-gap: 48px;
      }
      .second {
        padding: 24px 256px;
      }
      .third {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 48px;
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

      }
    }
  }
`
