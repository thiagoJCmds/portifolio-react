import { TitleSection } from "../TitleSection"
import styled from "styled-components"
import { Botao } from "./StyledBotao"
import { Paragrafo } from "../Paragrfo"


const StyledProject = styled.div`
border: 1px solid #c1c1c1;
padding: 16px;
`
const Lista = styled.ul`
display: grid;
grid-template-columns: 1fr 1fr;
column-gap: 36px;
row-gap: 40px;
list-style: none;

@media (max-width: 768px) {
   grid-template-columns: 1fr;
   column-gap: 0;
   row-gap: 16px;
}
`


const Projetos = () => (
   <> 
   <Lista>
   <li>
      <StyledProject>
      <TitleSection>Projetos</TitleSection>
      <Paragrafo tipo="#444">Lista de projetos ulitzando React</Paragrafo>
      <Botao>Visualizar</Botao>
      </StyledProject>
   </li>  
   <li>
      <StyledProject>
      <TitleSection>Projetos</TitleSection>
      <Paragrafo tipo="#444">Lista de projetos ulitzando React</Paragrafo>
      <Botao>Visualizar</Botao>
      </StyledProject>
   </li>  
   <li>
      <StyledProject>
      <TitleSection>Projetos</TitleSection>
      <Paragrafo tipo="#444">Lista de projetos ulitzando React</Paragrafo>
      <Botao>Visualizar</Botao>
      </StyledProject>
   </li>  
   <li>
      <StyledProject>
      <TitleSection>Projetos</TitleSection>
      <Paragrafo tipo="#444">Lista de projetos ulitzando React</Paragrafo>
      <Botao>Visualizar</Botao>
      </StyledProject>
   </li>  
   <li>
      <StyledProject>
      <TitleSection>Projetos</TitleSection>
      <Paragrafo tipo="#444">Lista de projetos ulitzando React</Paragrafo>
      <Botao>Visualizar</Botao>
      </StyledProject>
   </li>  
   <li>
      <StyledProject>
      <TitleSection>Projetos</TitleSection>
      <Paragrafo tipo="#444">Lista de projetos ulitzando React</Paragrafo>
      <Botao>Visualizar</Botao>
      </StyledProject>
   </li>  
   <li>
      <StyledProject>
      <TitleSection>Projetos</TitleSection>
      <Paragrafo tipo="#444">Lista de projetos ulitzando React</Paragrafo>
      <Botao>Visualizar</Botao>
      </StyledProject>
   </li>  
   <li>
      <StyledProject>
      <TitleSection>Projetos</TitleSection>
      <Paragrafo tipo="#444">Lista de projetos ulitzando React</Paragrafo>
      <Botao>Visualizar</Botao>
      </StyledProject>
   </li>  
   <li>
      <StyledProject>
      <TitleSection>Projetos</TitleSection>
      <Paragrafo tipo="#444">Lista de projetos ulitzando React</Paragrafo>
      <Botao>Visualizar</Botao>
      </StyledProject>
   </li>  
   <li>
      <StyledProject>
      <TitleSection>Projetos</TitleSection>
      <Paragrafo tipo="#444">Lista de projetos ulitzando React</Paragrafo>
      <Botao>Visualizar</Botao>
      </StyledProject>
   </li>  
   <li>
      <StyledProject>
      <TitleSection>Projetos</TitleSection>
      <Paragrafo tipo="#444">Lista de projetos ulitzando React</Paragrafo>
      <Botao>Visualizar</Botao>
      </StyledProject>
   </li>  
   <li>
      <StyledProject>
      <TitleSection>Projetos</TitleSection>
      <Paragrafo tipo="#444">Lista de projetos ulitzando React</Paragrafo>
      <Botao>Visualizar</Botao>
      </StyledProject>
   </li>  
   </Lista> 
   </>
)


export default Projetos