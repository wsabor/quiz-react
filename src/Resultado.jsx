function Resultado({ total, acertos }) {
    return (
      <div>
        <h2>Você concluiu o quiz!</h2>
        <p>Acertos: {acertos} de {total}</p>
        <p>{acertos >= total / 2 ? "Parabéns!" : "Tente novamente!"}</p>
      </div>
    );
  }
  
  export default Resultado;