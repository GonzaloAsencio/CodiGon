import React, { useState } from 'react';
import './Tutorial.css';
import Card from '../SharedComponents/Card/Cards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Header from '../SharedComponents/Header/Header';
import Footer from '../SharedComponents/Footer';


function Tutorial() {
  const [searchText,setSeach] = useState('');
  const btnElList = document.querySelectorAll('.btn');

  btnElList.forEach(element => {
    element.addEventListener('click',() => {
      document.querySelector('.special')?.classList.remove('special');
      element.classList.add('special');
    })
  });

  return (
    <>
    <Header/>
      <div className='tutorial-conteiner'>
         <div className='buttons'>
            <button className='unityButton' class='btn' onClick={()=> setSeach('unity')}>UNITY</button>
            <button className='csharpButton'class='btn' onClick={()=> setSeach('csharp')}>C#</button>
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