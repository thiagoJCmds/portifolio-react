import styled from "styled-components";

export const Container2 = styled.div`
display: block;
text-align: center;
@media (max-width:1031px) and (orientation:landscape){
  margin-left: 30px;
  text-align: center;
}
@media (min-width:1024px){
  position: sticky;  
  top: 80px;
  
}
@media (max-width:900px) and (orientation:landscape){


}

@media (max-width:480px){
  display: block;
  max-width: 100vw;
  width: 100%;
}  
`
export const Img = styled.img`

max-width: 100%;
border-radius: 50%;
border: solid #000 2px;
    @media (max-width:768px){
       max-width:200px ;
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
@media (max-width:768px) and (orientation:landscape){
  display: flex;
  align-items:center ;
  justify-content: center;
}
`
export const DivLogo = styled.img`

margin: 0 auto;
width: ${(prop) => prop.tamanho ? prop.tamanho : "100px" };
border-radius: none;
border: 4 px black;
display: block;
float: center;
@media (max-width:768px) and (orientation:landscape){
  margin: 5px;
}
`
