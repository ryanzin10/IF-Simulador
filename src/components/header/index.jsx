import './src/header.css';
import Logo from './src/logo-if.png';

const Header = () => {
  return(
    <div className="mother">
      <header>
        <div className="head-side">
          <div className="hamburger"></div>
          <div className="hamburger"></div>
          <div className="hamburger"></div>
        </div>

        <div className="head-center">
          <img src={Logo} alt="Logo do IF"/>
          
          <h1>Simulador</h1>
        </div>

        <div className="head-side">
          <h5>account</h5>
        </div>
    </header>
    </div>
  );
}

export default Header;