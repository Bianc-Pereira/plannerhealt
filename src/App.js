import './App.css';
import ComponenteLogo from './components/logo'; // Certifique-se de que o caminho está correto
import BarraPesquisa from './components/header/barraPesquisa'; // Certifique-se de que o caminho está correto
import MenuNavegacao from './components/header/menuNav'; // Certifique-se de que o caminho está correto

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ComponenteLogo />
        <BarraPesquisa />
        <MenuNavegacao />
      </header>
    </div>
  );
}

export default App;
