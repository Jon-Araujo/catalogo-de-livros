import Navbar from './Navbar'
import Cabecalho from './Cabecalho';
import Principal from './Principal';
import Catalogo from './Catalogo';
import Novo from './Novo';

function App() {
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = <Catalogo />
      break
    case "/Novo":
      Component = <Novo />
      break
  }
  return (
    <div className="App">
      <Navbar />
      {Component}
    </div>
  );
}

export default App;
