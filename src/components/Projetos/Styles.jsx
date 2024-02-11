import styled from "styled-components";


export const StyledProject = styled.div`
border: 1px solid #c1c1c1;
padding: 16px;
`
export const Lista = styled.ul`
display: grid;
grid-template-columns: 1fr 1fr;
column-gap: 36px;
row-gap: 40px;
list-style: none;

@media (max-width: 1031px) and (orientation:landscape){
   grid-template-columns: 1fr 1fr;
   column-gap: 10px;
   row-gap: 10px;
   margin-right: 30px;
}
@media (max-width: 768px) {
   grid-template-columns: 1fr;
   column-gap: 0;
   row-gap: 16px;
}

`
export const Botao = styled.a`
color: ${(props) => props.theme.corDeFundo};
font-size: 14px;
background-color: ${(props) => props.theme.corDeFundoBotao};
text-decoration: none;
padding: 8px;
display: inline-block;
margin-top: 10px;
margin-right: 20px;
`
export const BotaoGit = styled.a`
color: ${(props) => props.theme.corDeFundo};
font-size: 14px;
background-color: ${(props) => props.theme.corDeFundoBotaoGit};
text-decoration: none;
padding: 8px;
display: inline-block;
margin-top: 10px;
margin-right: 20px;
`