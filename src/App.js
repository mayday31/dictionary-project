import bee from "./bee.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={bee} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          Coded by Bee🐝 Lynn. Code on{" "}
          <a
            href="https://github.com/mayday31/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://dictionary-project-qkqe.onrender.com/"
            target="_blank"
            rel="noreferrer"
          >
            Render
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
