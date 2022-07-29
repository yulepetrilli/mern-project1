import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

//Components
import Routes from './Routes';
import NavBar from './components/NavBar';

//Styled
import {Container} from './App.styled';

function App() {
  return (
    <Router>
      <Container>
        <NavBar />
        <Routes />
      </Container>  
    </Router>
  );
}

export default App;