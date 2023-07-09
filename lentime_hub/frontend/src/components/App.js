import './styles/App.css';
import Navbar from './Navbar';
import Hub from './Hub';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Hub></Hub>
    </div>
  );
}

export default App;
