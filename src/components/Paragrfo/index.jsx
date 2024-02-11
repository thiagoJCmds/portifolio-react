import styled from "styled-components";


export const Paragrafo = styled.p`
margin-top: 16px;
font-size: 14px;
color: ${(props) => props.tipo ?  props.tipo : props.theme.corPrincipal };
font-weight: ${(prop) => prop.bold};
`