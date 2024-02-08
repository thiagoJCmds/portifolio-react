import styled from "styled-components";

export const Botao = styled.a`
color: ${(props) => props.theme.corDeFundo};
font-size: 14px;
background-color: ${(props) => props.theme.corDeFundoBotao};
text-decoration: none;
padding: 8px;
display: inline-block;
margin-top: 10px;
`