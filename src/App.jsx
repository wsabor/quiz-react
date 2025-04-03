import { useState } from "react";
import questions from "./questions";
import Pergunta from "./Pergunta";
import Resultado from "./Resultado";
import "./App.css";

function App() {
  function embaralharRespostas(perguntas) {
    return perguntas.map((pergunta) => {
      const respostasEmbaralhadas = [...pergunta.opcoes].sort(
        () => Math.random() - 0.5
      );
      return {
        ...pergunta,
        opcoes: respostasEmbaralhadas,
      };
    });
  }

  const [perguntas, setPerguntas] = useState(() =>
    embaralharRespostas(questions)
  );
  const [atual, setAtual] = useState(0);
  const [pontos, setPontos] = useState(0);
  const [finalizado, setFinalizado] = useState(false);

  function responder(opcaoSelecionada) {
    if (opcaoSelecionada === perguntas[atual].resposta) {
      setPontos(pontos + 1);
    }

    if (atual + 1 < perguntas.length) {
      setAtual(atual + 1);
    } else {
      setFinalizado(true);
    }
  }

  return (
    <div>
      <h1>Quiz React</h1>
      {!finalizado ? (
        <Pergunta dados={perguntas[atual]} responder={responder} />
      ) : (
        <>
          <Resultado total={perguntas.length} acertos={pontos} />
          <button
            onClick={() => {
              setPerguntas(embaralharRespostas([...questions]));
              setAtual(0);
              setPontos(0);
              setFinalizado(false);
            }}
          >
            Reiniciar Quiz
          </button>
        </>
      )}
    </div>
  );
}

export default App;
