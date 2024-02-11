
import { Paragrafo } from "../Paragrfo"
import { TitleSection } from "../TitleSection"
import { SecSobre, StyledDIv } from "./Styles"
const Sobre = () => (
   
   <SecSobre>
    <TitleSection>Sobre</TitleSection>
    <Paragrafo>Me chamo Thiago, sou casado, tenho 36 anos, 2 filhos, sou uma pessoa determina e tenho foco em meus objetivos, tenho experiência em lidar com situações adversas, entender minhas limitações e trabalhar encima delas, gosto de estudar e aprender para evoluir. Desejo uma oportunidade para ingressar nessa carreira promissora de Desenvolvedor Front-End colocar em praticas minhas habilidades, somar com a equipe e evoluir me tornando um profissional melhor podendo agregar mais a empresa a aos colegas de trabalho.</Paragrafo>
    <StyledDIv>
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=thiagoJCmds&layout=compact&langs_count=7&theme=dracula"/>
        <img src="https://github-readme-stats.vercel.app/api?username=thiagoJCmds&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
    </StyledDIv>
    </SecSobre>
)

export default Sobre