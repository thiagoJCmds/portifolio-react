import styled, { createGlobalStyle } from "styled-components";



const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
body{
    background-color: ${(props) => props.theme.corDeFundo };
    margin-top: 80px;
}
`
export default GlobalStyle

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 128px auto;
  column-gap: 56px;
  font-family: 'Inter', sans-serif;
  @media (max-width: 768px) {
    max-width: 80%;
    display: block;
  }

  `