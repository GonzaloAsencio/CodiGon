/* eslint-disable jsx-a11y/anchor-is-valid */
/*BORRAR  EL CSS DEL HEADER
import './Header.css';*/
import Navbar from '../NavBar';
import React from 'react';

function Header(props) {
  return (
    <header>
        <Navbar props={props}/>
    </header>
  );
}
export default Header;
