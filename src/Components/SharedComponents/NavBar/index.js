import {useEffect,useContext,useState} from 'react';
import { Link, useLocation} from 'react-router-dom';
import './NavBar.css';
import BurguerButton from './burgerButton';
import {UserContext} from "../../UserContext";
import SearchBar from '../SearchBar/index';


export const Navbar = ({props }) => {
  const { pathname } = useLocation();
  const [clicked, setClicked] = useState(false);
  const {setUserInfo,userInfo} = useContext(UserContext);
  const [searchText,setSeach] = useState('');

  useEffect(() => {
    props.setResponse(searchText);
  }, [props, searchText]);

  const handleClick = (state) => {
    setClicked(!clicked)
  }

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
          {username && pathname !== '/tutorial' && (
              <>
                  <a className='nav-links' onClick={handleClick} href="#first-section">Home</a>
                  <a className='nav-links' onClick={handleClick} href="#h">Tutorial</a>
                  <Link className='nav-links'  onClick={handleClick}  to="/create">CrearPost</Link>
                  <a className='nav-links'  onClick={handleClick} href="#h">Contact</a>
                  <a className='nav-links'  onClick={logout} href="#h">Log Out</a>
              </>
            )}
            {!username && pathname !== '/tutorial' &&(
              <div className='nav-container' onClick={() => setClicked(false)}>
                <a className='nav-links nav-links-active' href="#first-section">Inicio</a>
                <a className='nav-links'  href="#first-section">Tutoriales</a>
                <a className='nav-links'  href="#second-section">Contacto</a>
                <a className='nav-links'  href="#third-section">Mis Redes</a>
              </div>
            )}
        </div>
        <div className={`${pathname !== '/tutorial'? 'non-display' : 'search-bar'}`}>
           <SearchBar placeholder={'Buscar...'} type={'text'} onChange={(info) => setSeach(info.target.value)}/>
        </div>
        <div className={`${pathname === '/'? 'burguer' : 'non-display'}`}>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
      </nav>
    </>
  )
}

export default Navbar
