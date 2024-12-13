import React from 'react';
import Contador from './components/Contador';
import BotaoAlternador from './components/BotaoAlternador';
import ListaDeTarefas from './components/ListaDeTarefas';

function App() {
  return (
    <div className="App">
      <h1>Minha Aplicação React</h1>
      <Contador />
      <BotaoAlternador />
      <ListaDeTarefas />
    </div>
  );
}

export default App;

