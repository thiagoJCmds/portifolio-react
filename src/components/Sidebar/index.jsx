/* eslint-disable react/prop-types */
import { Titulo } from "../Titulo"
import { DivLogo, Tema, Img, Barra,} from "./Styles" 
import { Paragrafo } from "../Paragrfo"
import Logo from "../image/hcj.png"
import Logo1 from "../image/jquery.png"
import Logo2 from "../image/react.png"


const Sidebar = props => (
    <>
    
    <aside>
         <Img src="https://github.com/thiagoJCmds.png" alt="html" />
    </aside>
    <Titulo>Thiago</Titulo>
    <Paragrafo bold="bold">Desenvolvedor Front-End</Paragrafo>
    <Tema onClick={props.troca}>Tema</Tema>
    <Barra>
    <DivLogo src={Logo}/>
    <DivLogo src={Logo2}/>
    <DivLogo tamanho='60px' src={Logo1}/>
    </Barra>
    </>
)


export default Sidebar