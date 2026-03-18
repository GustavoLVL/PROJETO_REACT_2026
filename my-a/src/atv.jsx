import { useState } from "react";

function App() {
  // estado do contador
  const [contador, setContador] = useState(0);

  // funções
  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Contador Interativo</h1>

      <h2>{contador}</h2>

      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar} style={{ marginLeft: "10px" }}>
        Decrementar
      </button>
    </div>
  );
}

export default App;