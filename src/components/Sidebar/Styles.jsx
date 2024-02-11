import styled from "styled-components";

export const Container2 = styled.div`
display: block;
text-align: center;
position: sticky;  
top: 80px;
`
export const Img = styled.img`

max-width: 100%;
border-radius: 50%;
border: solid #000 2px;
      

    @media (max-width:1031px) and (orientation:landscape){
      margin-left: 30px;
    }

    @media (max-width: 768px) {

      max-width: 80%;
      width: 100%;
      display: block;
      img{
        max-width:300px;
      }
    }
    @media (max-width:480px){
      max-width: 100vw;
      width: 100%;
    }  
    `

export const Tema = styled.button`
background-color: ${(props) => props.theme.corPrincipal} ;
color: ${(props) => props.theme.corDeFundo};
width: 80px;
height: 25px;
margin-top: 40px;
margin-bottom:30px;
border: none;
border-radius: 8%;
`
export const Barra = styled.div`
@media (mim-width:950px){
position: sticky;
top: 80px;
  
}
`
export const DivLogo = styled.img`

margin-bottom: 8px;
border-radius: 0px ;
width: ${(prop) => prop.tamanho ? prop.tamanho : "100px" };
border-radius: none;
border: 4 px black;

`
