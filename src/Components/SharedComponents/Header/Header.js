/* eslint-disable jsx-a11y/anchor-is-valid */
import './Header.css';
import { Link } from 'react-router-dom';


let  tutorialRoute ="/tutorial";
let inicioRoute ='/';
let inicioStyle;
let tutorialStyle;

function Header() {
  const pointerStyle = {
    fontWeight: 'bold',
    color:'white',
    textDecoration: 'none',
    borderBottom: '5px solid #fdcb6e'
  };
  const nonPointerStyle = {
    color:'#dfe6e9',
    textDecoration: 'none'
  };


  window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    console.log(this.window.scrollY);
    header.classList.toggle("header-down", this.window.scrollY > 0);
  })

 window.location.pathname === tutorialRoute ? tutorialStyle = pointerStyle : tutorialStyle = nonPointerStyle;
 window.location.pathname === inicioRoute ? inicioStyle = pointerStyle : inicioStyle = nonPointerStyle;

  return (
    <header>
      <nav className='header-nav'>
        <div className='header-logo'>
          <h3>LOGO</h3>
          </div>
        <div className='header-buttons'>
          <ul>
          <Link style={inicioStyle} to="/">Inicio</Link>
          </ul>
          <ul>
          <Link style={tutorialStyle} to="/tutorial">Tutorial</Link>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
