import {ThemeProvider} from 'styled-components'

import GlobalStyle, { Container} from './GlobalStyle.jsx'
import { Barra, Container2 } from './components/Sidebar/Styles.jsx';
import Projetos from './components/Projetos/index.jsx';
import Sidebar from "./components/Sidebar/index.jsx";
import Sobre from './components/Sobre/index.jsx';
import temaLigh from './themes/ligth.js';
import temaDark from './themes/dark.js';
import { useState } from 'react';



function App() {
  const [useTemaDark, setUseTemaDark] = useState(false)

  function trocaTema(){
    setUseTemaDark(!useTemaDark)
  }
return (

  <ThemeProvider theme={useTemaDark ? temaDark : temaLigh}>
  <GlobalStyle/>
    <Container>
      <Barra>
      <Container2>
        <Sidebar troca = {trocaTema}/>
      </Container2>
      </Barra>
          <main>
        <Sobre/>
        <Projetos/>
      </main>
    </Container>
    </ThemeProvider>

)
}

export default App
