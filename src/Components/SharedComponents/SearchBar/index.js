import React, {useEffect} from 'react';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass,faXmark } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({type, placeholder,onChange}) => {

useEffect(() => {
const searchBtn = document.querySelector('.search-btn');
const cancelBtn = document.querySelector('.cancel-btn');
const searchBox = document.querySelector('.search-box');
const searchInput = document.querySelector('.search-input');

searchBtn.onclick = () => {
    searchBox.classList.add('active');
    searchBtn.classList.add('active');
    searchInput.classList.add('active');
    cancelBtn.classList.add('active');
}
cancelBtn.onclick = () => {
    searchBox.classList.remove('active');
    searchBtn.classList.remove('active');
    searchInput.classList.remove('active');
    cancelBtn.classList.remove('active');
}
}, []);

return (
    <div className='search-box'>
    <input className='search-input' type={type} placeholder={placeholder} onChange ={onChange}/>
    <div className='search-btn'>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </div>
    <div className='cancel-btn'>
      <FontAwesomeIcon icon={faXmark} />
    </div>
  </div>
  );
};

export default SearchBar;