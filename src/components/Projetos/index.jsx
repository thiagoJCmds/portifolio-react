import { TitleSection } from "../TitleSection"
import { Paragrafo } from "../Paragrfo"
import { StyledProject, Lista, Botao, BotaoGit } from "./Styles"

const Projetos = () => (
   <> 
   <Lista>
   <li>
      <StyledProject>
      <TitleSection>Projeto Turismo</TitleSection>
      <Paragrafo tipo="#444">Projeto ulitzando React</Paragrafo>
      <Botao href="https://turismo-react.vercel.app/" target="_blank">Visualizar</Botao>
      <BotaoGit  href="https://github.com/thiagoJCmds/turismo_react" target="_blank">Codigo no Github</BotaoGit>
      </StyledProject>
   </li>  
   <li>
      <StyledProject>
      <TitleSection>Projeto Calculadora de IMC</TitleSection>
      <Paragrafo tipo="#444">Projeto ulitzando React</Paragrafo>
      <Botao href="https://calculadora-imc-kohl-two.vercel.app/" target="_blank">Visualizar</Botao>
      <BotaoGit href="https://github.com/thiagoJCmds/calculadora_imc" target="_blank">Codigo no Github</BotaoGit>
      </StyledProject>
   </li>  
   <li>
      <StyledProject>
      <TitleSection>Projeto Portifólio</TitleSection>
      <Paragrafo tipo="#444">Projeto ulitzando React</Paragrafo>
      <Botao href="https://portifolio-react-sandy.vercel.app/" target="_blank">Visualizar</Botao>
      <BotaoGit href="https://github.com/thiagoJCmds/portifolio-react" target="_blank">Codigo no Github</BotaoGit>
      </StyledProject>
   </li>  
   <li>
      <StyledProject>
      <TitleSection>Projetos</TitleSection>
      <Paragrafo tipo="#444">Projeto ulitzando React</Paragrafo>
      <Botao>Visualizar</Botao>
      <BotaoGit href="https://github.com/thiagoJCmds/carrocel_imagens" target="_blank">Codigo no Github</BotaoGit>
      </StyledProject>
   </li>  
   <li>
      <StyledProject>
      <TitleSection>Projeto</TitleSection>
      <Paragrafo tipo="#444">Lista de projetos ulitzando React</Paragrafo>
      <Botao>Visualizar</Botao>
      <BotaoGit href="https://github.com/thiagoJCmds/site_RBS" target="_blank">Codigo no Github</BotaoGit>
      </StyledProject>
   </li>  
   <li>
      <StyledProject>
      <TitleSection>Projeto</TitleSection>
      <Paragrafo tipo="#444">Lista de projetos ulitzando React</Paragrafo>
      <Botao>Visualizar</Botao>
      <BotaoGit  href="" target="_blank">Codigo no Github</BotaoGit>
      </StyledProject>
   </li>  
   <li>
      <StyledProject>
      <TitleSection>Projetos</TitleSection>
      <Paragrafo tipo="#444">Lista de projetos ulitzando React</Paragrafo>
      <Botao>Visualizar</Botao>
      <BotaoGit  href="" target="_blank">Codigo no Github</BotaoGit>
      </StyledProject>
   </li>  
   <li>
      <StyledProject>
      <TitleSection>Projetos</TitleSection>
      <Paragrafo tipo="#444">Lista de projetos ulitzando React</Paragrafo>
      <Botao>Visualizar</Botao>
      <BotaoGit href="" target="_blank">Codigo no Github</BotaoGit>
      </StyledProject>
   </li>  
   </Lista> 
   </>
)


export default Projetos