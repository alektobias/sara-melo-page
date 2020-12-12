import styled from 'styled-components';

export const MenuContainer = styled.header`
  position: fixed;
  top: 0;
  left:0;
  display: flex;
  width: 100%;
  background-color: #fff;
  nav {
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    width: 100%;
    display: flex;
    max-width: 1440px;
    align-items: center;
    div {
      display: flex;
      align-items: center;
      svg {
        margin-right: 8px;
        height: 32px;
        width: auto;
      }
      h1 {
        color: #222;
        font-family: 'Sacramento', cursive;
      }
    }
    ul {
      display: flex;
      list-style: none;
      justify-content: flex-end;
      li {
        padding: 16px 0px;
        border: 2px solid transparent;
        transition: 1s all;
        a {
          padding: 16px 24px;
          color: ${props => props.theme.colors.primary};
          text-decoration: none;
        }
        &:hover {
          border-bottom: 2px solid ${props => props.theme.colors.primary};
        }
      }
    }
  }
`;
