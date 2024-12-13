import React, { useState } from 'react';

const Contador = () => {
  const [contagem, setContagem] = useState(0);

  const incrementar = () => {
    setContagem(contagem + 1);
  };

  const decrementar = () => {
    if (contagem > 0) {
      setContagem(contagem - 1);
    }
  };

  return (
    <div>
      <h1>Contador: {contagem}</h1>
      <button onClick={incrementar}>+1</button>
      <button onClick={decrementar}>-1</button>
    </div>
  );
};

export default Contador;
