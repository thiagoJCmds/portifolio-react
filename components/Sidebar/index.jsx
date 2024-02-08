/* eslint-disable react/prop-types */
import { Titulo } from "../Titulo"
import styled from "styled-components"


const Tema = styled.button`
background-color: ${(props) => props.theme.corPrincipal} ;
color: ${(props) => props.theme.corDeFundo};
width: 80px;
height: 25px;
margin-top: 40px;
border: none;
border-radius: 8%;

`

const Sidebar = props => (
    <>
    <aside>
         <img src="https://github.com/thiagoJCmds.png" alt="" />
    </aside>
    <Titulo>Thiago</Titulo>
    <Tema onClick={props.troca}>Tema</Tema>
    </>
)


export default Sidebar