import React, { useState} from 'react';
import './Tutorial.css';
import Card from '../../SharedComponents/Card/Cards';
import  '../../SharedComponents/Card/Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


export const Tutorial = ({searchText}) => {
  
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
          <div className='border-cards'>
           <Card search={searchText} language ={languageText}/>
          </div>
        </div>
  </>
  );
}

export default Tutorial;