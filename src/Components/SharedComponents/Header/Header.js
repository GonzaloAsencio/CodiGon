/* eslint-disable jsx-a11y/anchor-is-valid */
import './Header.css';
import { Link } from 'react-router-dom';
import {useEffect,useContext} from 'react';
import {UserContext} from "../../UserContext";


let  tutorialRoute ="/tutorial";
let inicioRoute ='/';
let inicioStyle;
let tutorialStyle;

function Header() {
  const {setUserInfo,userInfo} = useContext(UserContext);

  useEffect(() => {
    if(username){
      fetch('http://localhost:4000/profile', {
        credentials: 'include',
      }).then(response => {
        response.json().then(userInfo => {
           setUserInfo(userInfo);
        });
      });
    }
  }, []);

  const username = userInfo?.username;

  window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("header-down", this.window.scrollY > 0);
})

function logout() {
  fetch('http://localhost:4000/logout', {
    credentials: 'include',
    method: 'POST',
  });
  setUserInfo(null);
}
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
 window.location.pathname === tutorialRoute ? tutorialStyle = pointerStyle : tutorialStyle = nonPointerStyle;
 window.location.pathname === inicioRoute ? inicioStyle = pointerStyle : inicioStyle = nonPointerStyle;

  return (
    <header>
      <nav className='header-nav'>
        <div className='header-logo'>
          <h3>LOGO</h3>
          </div>
        <div className='header-buttons'>
          {username && (
            <>
             <Link style={inicioStyle} to="/create">CrearPost</Link>
             <a onClick={logout}>Log-out</a>
            </>
          )}
          {!username && (
          <>
            <ul>
              <Link style={inicioStyle} to="/">Inicio</Link>
            </ul>
            <ul>
              <Link style={tutorialStyle} to="/tutorial">Tutorial</Link>
            </ul>
          </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
