import { useState } from "react";
import questions from "./questions";
import Pergunta from "./Pergunta";
import Resultado from "./Resultado";
import "./App.css";

function App() {
  const [atual, setAtual] = useState(0);
  const [pontos, setPontos] = useState(0);
  const [finalizado, setFinalizado] = useState(false);

  function responder(indice) {
    if (indice === questions[atual].correta) {
      setPontos(pontos + 1);
    }
    if (atual + 1 < questions.length) {
      setAtual(atual + 1);
    } else {
      setFinalizado(true);
    }
  }

  return (
    <div>
      <h1>Quiz React.js</h1>
      {!finalizado ? (
        <Pergunta dados={questions[atual]} responder={responder} />
      ) : (
        <Resultado total={questions.length} acertos={pontos} />
      )}
      <button
        onClick={() => {
          setAtual(0);
          setPontos(0);
          setFinalizado(false);
        }}
      >
        Reiniciar Quiz
      </button>
      <p>Acertos: {pontos}</p>
    </div>
  );
}

export default App;
