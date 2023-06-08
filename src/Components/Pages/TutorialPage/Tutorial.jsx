import React, { useState } from 'react';
import './Tutorial.css';
import Card from '../../SharedComponents/Card/Cards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../SharedComponents/Footer';


function Tutorial() {
  const [searchText,setSeach] = useState('');
  const buttonList = document.querySelectorAll('.btn');

  buttonList.forEach(element => {
    element.addEventListener('click',() => {
      document.querySelector('.selected-button')?.classList.add('btn');
      document.querySelector('.selected-button')?.classList.remove('selected-button');
      element.classList.remove('btn');
      element.classList.add('selected-button');
    })
  });

  return (
    <>
      <div className='tutorial-conteiner'>
         <div className='buttons'>
            <button  class='btn' onClick={()=> setSeach('unity')}>UNITY</button>
            <button class='btn' onClick={()=> setSeach('csharp')}>C#</button>
          </div>
          <div className='search-bar'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input type="text" placeholder="Buscar.." onChange ={(info) => setSeach(info.target.value)}/>
          </div>
          <Card search={searchText}/>
        </div>
    <Footer/>
  </>
  );
}

export default Tutorial;