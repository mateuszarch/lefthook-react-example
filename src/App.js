import logo from "./logo.svg";
import "./App.css";

function App() {
  // const a = ""; // triggers an eslint warning which fails the commit hook
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="A logo." />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
