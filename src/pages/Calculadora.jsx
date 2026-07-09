import { Link } from "react-router-dom";
import { useState } from "react";
import "./Calculadora.css";

function Calculadora() {
  // Estado que guarda o que aparece no visor
  const [visor, setVisor] = useState("0");

  // Adiciona um número ao visor
  function adicionarNumero(numero) {
    if (visor === "0") {
      setVisor(numero);
    } else {
      setVisor(visor + numero);
    }
  }

  // Adiciona um operador (+, -, *, /)
  function adicionarOperador(operador) {
    setVisor(visor + operador);
  }

  // Limpa o visor
  function limpar() {
    setVisor("0");
  }

  // Calcula o resultado
  function calcular() {
    try {
      const resultado = eval(visor);
      setVisor(resultado.toString());
    } catch {
      setVisor("Erro");
    }
  }

  return (
    <div className="calculadora-container">
      <h1>🧮 Calculadora</h1>

      <div className="calculadora">
        <input
          type="text"
          value={visor}
          readOnly
          className="visor"
        />

        <div className="botoes">
          {/* Linha 1 */}
          <button onClick={() => adicionarNumero("7")}>7</button>
          <button onClick={() => adicionarNumero("8")}>8</button>
          <button onClick={() => adicionarNumero("9")}>9</button>
          <button onClick={() => adicionarOperador("/")}>÷</button>

          {/* Linha 2 */}
          <button onClick={() => adicionarNumero("4")}>4</button>
          <button onClick={() => adicionarNumero("5")}>5</button>
          <button onClick={() => adicionarNumero("6")}>6</button>
          <button onClick={() => adicionarOperador("*")}>×</button>

          {/* Linha 3 */}
          <button onClick={() => adicionarNumero("1")}>1</button>
          <button onClick={() => adicionarNumero("2")}>2</button>
          <button onClick={() => adicionarNumero("3")}>3</button>
          <button onClick={() => adicionarOperador("-")}>-</button>

          {/* Linha 4 */}
          <button onClick={limpar}>C</button>
          <button onClick={() => adicionarNumero("0")}>0</button>
          <button onClick={calcular}>=</button>
          <button onClick={() => adicionarOperador("+")}>+</button>
        </div>
      </div>

      <br />

      <Link to="/">
        ⬅ Voltar ao Currículo
      </Link>
    </div>
  );
}

export default Calculadora;