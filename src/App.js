import React from 'react';
import './components/board.css';
import Board from './components/board';
import Header from './components/header';
import { Container } from 'reactstrap';



function App() {
  return (
    <Container>
      <Header />
      <Board />
    </Container>
  );
}


export default App;
