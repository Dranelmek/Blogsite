import logo from './assets/LT-logo.png';

const HomeButton = function () {

    return(
        <a className="navbar-brand home" href="#">
          <img src={logo} className="logo" alt="nope"></img>
          <div className="logo-title">
          LenTime Hub
          </div>
        </a>
    );
}

export default HomeButton;