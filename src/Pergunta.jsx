function Pergunta({ dados, responder }) {
    return (
      <div>
        <h2>{dados.pergunta}</h2>
        {dados.alternativas.map((alt, index) => (
          <button
            key={index}
            onClick={() => responder(index)}
            style={{ display: "block", margin: "5px" }}
          >
            {alt}
          </button>
        ))}
      </div>
    );
  }
  
  export default Pergunta;