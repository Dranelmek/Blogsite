import './styles/Navbar.css';
import HomeButton from './HomeButton';

const Navbar = function() {
  return (
    <nav className="navbar navbar-expand-md">
      <HomeButton />
      <button 
        className="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav" 
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className="container">
      
        
        <div className="row">
          <div className="collapse navbar-collapse col-12" id="navbarNav">
            <ul className="navbar-nav" id="navbar-content">
              <li className="nav-item">
                <a className="nav-link" href="#">Career</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Streaming</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Blog</a>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
      
    </nav>
  );
}

export default Navbar;
