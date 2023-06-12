import {useEffect,useContext,useState,useRef} from 'react';
import { Link} from 'react-router-dom';
import './NavBar.css';
import BurguerButton from './burgerButton';
import {UserContext} from "../../UserContext";

function Navbar() {
    const [clicked, setClicked] = useState(false)
    const handleClick = (state) => {
    setClicked(!clicked)
  }

  const pointerStyle = {
    fontWeight: 'bold',
    color:'pink',
  };


const {setUserInfo,userInfo} = useContext(UserContext);

  useEffect(() => {
    const list = document.querySelectorAll('.nav-links');
  console.log(list);
  function activeLink(){

    list.forEach((item) =>
      item.classList.remove('nav-links-active'));
      this.classList.add('nav-links-active');
  }
  list.forEach((item) =>
  item.addEventListener('click',activeLink));

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

  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  return (
    <>
      <nav className='nav-style'>
        <h2>Logo</h2>
        <div className={`links ${clicked ? 'active' : ''}`}>
        {username && (
            <>
                <a className='nav-links' onClick={handleClick} href="#first-section">Home</a>
                <a className='nav-links' onClick={handleClick} href="#h">Tutorial</a>
                <Link className='nav-links'  onClick={handleClick}  to="/create">CrearPost</Link>
                <a className='nav-links'  onClick={handleClick} href="#h">Contact</a>
                <a className='nav-links'  onClick={logout} href="#h">Log Out</a>
            </>
          )}
          {!username && (
            <div className='nav-container' onClick={() => setClicked(false)}>
                <a className='nav-links nav-links-active' href="#first-section">Inicio</a>
                <a className='nav-links'  href="#first-section">Tutoriales</a>
                <a className='nav-links'  href="#second-section">Contacto</a>
                <a className='nav-links'  href="#third-section">Mis Redes</a>
            </div>
          )}
        </div>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
      </nav>
    </>
  )
}

export default Navbar