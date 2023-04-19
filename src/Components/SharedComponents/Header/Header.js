import './Header.css';

function Header() {
  return (
    <header>
      <nav className='header-nav'>
        <div className='header-logo'>
          <h3>LOGO</h3>
          </div>
        <div className='header-buttons'>
          <ul>
            Inicio
          </ul>
          <ul>
            Tutoriales
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
