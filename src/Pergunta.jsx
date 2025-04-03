function Pergunta({ dados, responder }) {
  return (
    <div>
      <h2>{dados.pergunta}</h2>
      {dados.opcoes.map((opcao, index) => (
        <button key={index} onClick={() => responder(opcao)}>
          {opcao}
        </button>
      ))}
    </div>
  );
}

export default Pergunta;
