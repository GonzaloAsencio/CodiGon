import React, { useState } from 'react';
import './Tutorial.css';
import Card from '../SharedComponents/Card/Cards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


function Tutorial() {
  const [searchText,setSeach] = useState('');
  return (
      <div className='tutorial-conteiner'>
            <div className='buttons'>
         <button className='unityButton' onClick={()=> setSeach('unity')}>UNITY</button>
         <button className='csharpButton' onClick={()=> setSeach('csharp')}>C#</button>
        </div>
        <div className='search-bar'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type="text" placeholder="Buscar.." onChange ={(info) => setSeach(info.target.value)}/>
        </div>
        <Card search={searchText}/>
      </div>
  );
}

export default Tutorial;