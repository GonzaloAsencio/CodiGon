import React, { useState,useEffect,useRef } from 'react';
import './Tutorial.css';
import Card from '../../SharedComponents/Card/Cards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../SharedComponents/Footer';


function Tutorial() {
  const [searchText,setSeach] = useState('');
  const [languageText,setLanguage] = useState('');
  const buttonList = document.querySelectorAll('.btn');
    
  const handleClick = (event, message) => {
    if (!event.currentTarget.classList.contains('selected-button')) { 
          buttonList.forEach((item) =>
          item.classList.remove('selected-button'));
          event.currentTarget.classList.add('selected-button');
          setLanguage(message);
      } else {
        event.currentTarget.classList.remove('selected-button');
        setLanguage('');
      }
    };


  return (
    <>
      <div className='tutorial-conteiner'>
         <div className='buttons'>
            <button  className='btn'  onClick={(event) => handleClick(event, "unity")}>UNITY</button>
            <button className='btn'  onClick={(event) => handleClick(event, "csharp")}>C#</button>
          </div>
          <div className='search-bar'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input type="text" placeholder="Buscar.." onChange ={(info) => setSeach(info.target.value)}/>
          </div>
          <Card search={searchText} language ={languageText}/>
        </div>
    <Footer/>
  </>
  );
}

export default Tutorial;