import './styles/Navbar.css';
import logo from './assets/LT-logo.png'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md">
      <a className="navbar-brand home" href="#">
        <img src={logo} className="logo" alt="nope"></img>
        <div className="logo-title">
        LenTime Hub
        </div>
        </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
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
    </nav>
  );
}

export default Navbar;
