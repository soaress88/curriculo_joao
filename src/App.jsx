import "./App.css";
import Beams from "./components/Beams";

function App() {
  return (
    <>
      {/* Fundo animado */}
      <div className="background">
        <Beams />
      </div>

      <div className="container">
        <header className="hero">
          <img
            src="https://i.pravatar.cc/200"
            alt="Foto de João Soares"
            className="foto"
          />

          <h1>João Soares</h1>

          <h2>💻 Gestão e Programação de Sistemas Informáticos</h2>

          <p>
            Olá! Chamo-me João Soares, tenho 16 anos e frequento a Escola Básica
            de Vila Verde. Atualmente estou a estagiar na Santa Casa da
            Misericórdia de Vila Verde, onde tenho desenvolvido novas
            competências na área da informática.
          </p>

          <div className="buttons">
            <a
              href="https://instagram.com/soaress.88"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>

            <a
              href="https://github.com/soaress88"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </header>

        <section className="card">
          <h2>👨‍💻 Sobre Mim</h2>

          <p>
            Sou um jovem apaixonado por tecnologia e programação. Gosto de
            aprender coisas novas e enfrentar desafios. Nos meus tempos livres
            jogo videojogos, pratico futebol e gosto de sair com os meus amigos.
          </p>
        </section>

        <section className="card">
          <h2>🎓 Educação</h2>

          <p>
            <strong>Escola Básica de Vila Verde</strong>
          </p>

          <p>
            Curso Profissional de Gestão e Programação de Sistemas Informáticos
          </p>
        </section>

        <section className="card">
          <h2>💼 Experiência</h2>

          <p>
            <strong>Estágio</strong>
          </p>

          <p>Santa Casa da Misericórdia de Vila Verde</p>

          <p>
            Durante o estágio tenho aprendido a trabalhar num ambiente
            profissional, prestando apoio informático e desenvolvendo as minhas
            competências técnicas.
          </p>
        </section>

        <div className="grid">
          <section className="card">
            <h2>🚀 Competências</h2>

            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Git & GitHub</li>
              <li>Trabalho em equipa</li>
            </ul>
          </section>

          <section className="card">
            <h2>❤️ Interesses</h2>

            <ul>
              <li>🎮 Videojogos</li>
              <li>⚽ Futebol</li>
              <li>👥 Sair com amigos</li>
              <li>🦅 Adepto do Benfica</li>
            </ul>
          </section>
        </div>

        <section className="card">
          <h2>📱 Contactos</h2>

          <p>
            📷 Instagram:
            <a
              href="https://instagram.com/soaress.88"
              target="_blank"
              rel="noreferrer"
            >
              @soaress.88
            </a>
          </p>

          <p>
            💻 GitHub:
            <a
              href="https://github.com/soaress88"
              target="_blank"
              rel="noreferrer"
            >
              github.com/soaress88
            </a>
          </p>
        </section>

        <footer>
          <p>© 2026 João Soares</p>
        </footer>
      </div>
    </>
  );
}

export default App;