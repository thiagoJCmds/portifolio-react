
import { Paragrafo } from "../Paragrfo"
import { TitleSection } from "../TitleSection"
import { StyledDIv } from "./StyledDiv"
const Sobre = () => (
   
   <section>
    <TitleSection>Sobre</TitleSection>
    <Paragrafo>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam impedit ad iure dignissimos alias velit illo, reprehenderit excepturi eum aliquid exercitationem cupiditate sapiente? Culpa sed expedita quos eaque, vero libero?</Paragrafo>
    <StyledDIv>
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=thiagoJCmds&layout=compact&langs_count=7&theme=dracula"/>
        <img src="https://github-readme-stats.vercel.app/api?username=thiagoJCmds&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
    </StyledDIv>
    </section>
)

export default Sobre