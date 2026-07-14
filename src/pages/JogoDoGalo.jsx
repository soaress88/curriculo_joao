import { Link } from "react-router-dom";
import { useState } from "react";
import "./JogoDoGalo.css";

function JogoDoGalo() {
  const [tabuleiro, setTabuleiro] = useState(Array(9).fill(""));
  const [jogador, setJogador] = useState("X");
  const [vencedor, setVencedor] = useState(null);
  const [linhaVencedora, setLinhaVencedora] = useState([]);

  // Contadores
  const [vitoriasX, setVitoriasX] = useState(0);
  const [vitoriasO, setVitoriasO] = useState(0);
  const [empates, setEmpates] = useState(0);

  const combinacoes = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function verificarVencedor(tabuleiroAtual) {
    for (let combinacao of combinacoes) {
      const [a, b, c] = combinacao;

      if (
        tabuleiroAtual[a] &&
        tabuleiroAtual[a] === tabuleiroAtual[b] &&
        tabuleiroAtual[a] === tabuleiroAtual[c]
      ) {
        const vencedorAtual = tabuleiroAtual[a];

        setVencedor(vencedorAtual);
        setLinhaVencedora(combinacao);

        if (vencedorAtual === "X") {
          setVitoriasX((anterior) => anterior + 1);
        } else {
          setVitoriasO((anterior) => anterior + 1);
        }

        return true;
      }
    }

    // Empate
    if (!tabuleiroAtual.includes("")) {
      setVencedor("Empate");
      setEmpates((anterior) => anterior + 1);
      return true;
    }

    return false;
  }

  function jogar(indice) {
    if (tabuleiro[indice] !== "" || vencedor) {
      return;
    }

    const novoTabuleiro = [...tabuleiro];
    novoTabuleiro[indice] = jogador;

    setTabuleiro(novoTabuleiro);

    const fimDoJogo = verificarVencedor(novoTabuleiro);

    if (!fimDoJogo) {
      setJogador(jogador === "X" ? "O" : "X");
    }
  }

  function novaPartida() {
    setTabuleiro(Array(9).fill(""));
    setJogador("X");
    setVencedor(null);
    setLinhaVencedora([]);
  }

  function reiniciarPontuacao() {
    setVitoriasX(0);
    setVitoriasO(0);
    setEmpates(0);

    novaPartida();
  }

  return (
    <div className="jogo-container">
      <h1>❌ Jogo do Galo ⭕</h1>

      {!vencedor ? (
        <h2>Vez do jogador: {jogador}</h2>
      ) : vencedor === "Empate" ? (
        <h2>🤝 Empate!</h2>
      ) : (
        <h2>🏆 O jogador {vencedor} venceu!</h2>
      )}

      <div className="pontuacao">
        <div className="caixa-pontos">
          <h3>❌ X</h3>
          <span>{vitoriasX}</span>
        </div>

        <div className="caixa-pontos">
          <h3>⭕ O</h3>
          <span>{vitoriasO}</span>
        </div>

        <div className="caixa-pontos">
          <h3>🤝</h3>
          <span>{empates}</span>
        </div>
      </div>

      <div className="tabuleiro">
        {tabuleiro.map((valor, indice) => (
          <button
            key={indice}
            className={
              linhaVencedora.includes(indice)
                ? "casa vencedora"
                : "casa"
            }
            onClick={() => jogar(indice)}
          >
            {valor}
          </button>
        ))}
      </div>

      <button className="novo-jogo" onClick={novaPartida}>
        🔄 Nova Partida
      </button>

      <button className="reiniciar" onClick={reiniciarPontuacao}>
        🗑 Reiniciar Pontuação
      </button>

      <br />
      <br />

      <Link to="/">⬅ Voltar ao Currículo</Link>
    </div>
  );
}

export default JogoDoGalo;