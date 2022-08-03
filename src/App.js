import logo from "./logo.svg";
import "./App.css";
import Nav from "./componentes/Nav";
import ItemListContainer from './componentes/ItemListContainer.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav></Nav>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Desafio Nº4 y Nº5</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ItemListContainer />
      </header>
    </div>
  );
}

export default App;
