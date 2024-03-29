import React, {useEffect,useState,useRef} from 'react';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass,faXmark } from '@fortawesome/free-solid-svg-icons';


const SearchBar = ({type, placeholder,onChange}) => {
  
  const searchBtn = useRef();
  const searchBox = useRef();
  const searchInput = useRef();
  const [clicked, setClicked] = useState(false);
  
// eslint-disable-next-line react-hooks/exhaustive-deps
const handleClick = () => {
    setClicked(!clicked);
}

useEffect(() => {
      if(clicked){
        searchBox.current.classList.add('active');
        searchBtn.current.classList.add('active');
        searchInput.current.classList.add('active');
      }else {
        searchBox.current.classList.remove('active');
        searchBtn.current.classList.remove('active');
        searchInput.current.classList.remove('active');
      };
}, [clicked, handleClick]);


useEffect(() => {
searchInput.current.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    handleClick();
  }
});
}, [clicked, handleClick]);

return (
    <div className='search-box' ref={searchBox}>
    <input className='search-input'ref={searchInput} type={type} placeholder={placeholder} onChange ={onChange}/>
    <div className='search-btn ' ref={searchBtn} onClick={handleClick}>
      <FontAwesomeIcon  icon={!clicked ? faMagnifyingGlass :faXmark} />
    </div>
  </div>
  );
};

export default SearchBar;