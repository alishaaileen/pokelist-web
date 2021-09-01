import './App.css';
import { BrowserRouter as Router} from 'react-router-dom'
import { PokemonProvider } from './Context/PokemonContext'
import { MyPokemonProvider } from './Context/MyPokemonContext'

import styled from '@emotion/styled'
import { Navbar } from './components/Navbar'
import { router as Route} from './pages/router'
import { mq } from './assets/styling/breakpoints';


const Container = styled.div`
    width: 100%;
    padding: 100px 0;
    margin: 0 auto;
    aspect-ratio: 100 / 29;

    ${mq('m')} {
      width: 80%;
    }
  `

function App() {
  return (
    <div className="app">
      <Router>
      <Navbar />
        <PokemonProvider>
          <MyPokemonProvider>
          <Container>
            <Route />
          </Container>
          </MyPokemonProvider>
        </PokemonProvider>
      </Router>
    </div>
  );
}

export default App;
