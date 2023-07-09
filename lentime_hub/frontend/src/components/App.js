import './styles/App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Hub from './Hub';

function App() {
  return (
    <div className="App">
      <div className="content">
      <header className="App-header">
        <Navbar />
      </header>
      <Hub></Hub>
      </div>
      <Footer />
    </div>
  );
}

export default App;
