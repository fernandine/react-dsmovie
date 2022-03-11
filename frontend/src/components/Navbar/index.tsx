import {ReactComponent as GithubIcon} from 'assets/img/github.svg';
import './style.css';

function Navbar(){
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DsMovie</h1>
          <a href="https://github.com/fernandine">
          <div>
          <GithubIcon />
          <p className='dsmovie-contact-link'>/fernandine</p>
      </div>
      </a>
      </div>
      </nav>
    </header>
  );
}
export default Navbar;