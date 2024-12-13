import React, { useState } from 'react';

const BotaoAlternador = () => {
  const [ligado, setLigado] = useState(false);

  const alternar = () => {
    setLigado(!ligado);
  };

  return (
    <button onClick={alternar} style={{ backgroundColor: ligado ? 'green' : 'red', color: 'white' }}>
      {ligado ? 'Ligado' : 'Desligado'}
    </button>
  );
};

export default BotaoAlternador;
