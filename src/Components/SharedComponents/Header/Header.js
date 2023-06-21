/* eslint-disable jsx-a11y/anchor-is-valid */
import './Header.css';
import Navbar from '../NavBar';
import React from 'react';

function Header(props) {
  window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    if(header !== null)
    header.classList.toggle('header-down', this.window.scrollY > 0);
})
  return (
    <header>
        <Navbar props={props}/>
    </header>
  );
}
export default Header;
