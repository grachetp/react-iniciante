import { useState } from "react";

function App() {
  // State(estado) é um objeto que contém dados que podem mudar ao longo do tempo.
  // O estado é um dos conceitos mais importantes do React.
  // O useState é um Hook que permite adicionar estado a um componente funcional.
  // O useState retorna um array com dois elementos
  // o State faz o componente ser atualizado toda vez que o estado muda.
  const [message, setMessage] = useState("Olá, mundo!");

  return (
    <div>
      <h1>{message}</h1>
      <button
        onClick={() => {
          setMessage("Olá, fui clicado!");
        }}
      >
        Mudar mensagem
      </button>
    </div>
  );
}

export default App;
