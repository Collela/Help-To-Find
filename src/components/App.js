import '../styles/App.css';
import Top from './Top'
import Main from './Main';

function App() {
  return (
    <div className="App">
      <Top />
      <Main /> {/* chamar outro compnent para mostrar as fotos dentro do main */}
    </div>
  );
}

export default App;