import React, {useState} from 'react';
import './App.css';
import MyRoutes from './routes';
import { ThemeProvider } from 'styled-components';
import SwitcherTema from './components/SwitcherTheme/Switcher';
import {Global, ContainerPrincipal} from './styles/global';
import { temaClaro, temaEscuro, ButtonTheme } from '../src/styles/temas';


function App() {

  const [tema, setTema] = useState(true);
  const toggleTema = () => {
    console.log(tema);
    setTema((tema) => !tema);
  };

  return (
      <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
          <ContainerPrincipal>
            <Global/>
            <ButtonTheme onClick={toggleTema}>
              <SwitcherTema tema={tema}/>
            </ButtonTheme>
            <MyRoutes/>
          </ContainerPrincipal>
      </ThemeProvider>
  );
}

export default App;
