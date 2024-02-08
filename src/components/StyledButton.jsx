import styled from "styled-components";

const Botao = styled.button`

background-color : ${(prop) => prop.primeiro ? prop.primeiro : 'red'};

`

function StyledButton(){
    return(
    <div>
    <Botao primeiro="aquamarine">Clique aki</Botao>
    <Botao primeiro="blue">Clique aki</Botao>
    <Botao>Clique aki</Botao>
    <Botao>Clique aki</Botao>
    <Botao>Clique aki</Botao>
   </div>
    )

}

export default StyledButton