/* eslint-disable jsx-a11y/anchor-is-valid */
import './Header.css';
import Navbar from '../NavBar';

function Header() {
  window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    if(header !== null)
    header.classList.toggle("header-down", this.window.scrollY > 0);
})
  return (
    <header>
        <Navbar/>
    </header>
  );
}

export default Header;
