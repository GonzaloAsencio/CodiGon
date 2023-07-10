import React, {  useState,useRef} from 'react';
import './Tutorial.css';
import Card from '../../SharedComponents/Card/Cards';
import  '../../SharedComponents/Card/Card.css';

export const Tutorial = ({searchText}) => {


  const [languageText,setLanguage] = useState('');
  const unityButton = useRef();
  const csharpButton = useRef();

  const handleClick = (event, message) => {
    if (!event.currentTarget.classList.contains('selected-button')) {
      unityButton.current.classList.remove('selected-button');
      csharpButton.current.classList.remove('selected-button');
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
            <button  className='btn' ref={unityButton} onClick={(event) => handleClick(event, "unity")}>UNITY</button>
            <button className='btn'  ref={csharpButton} onClick={(event) => handleClick(event, "csharp")}>C#</button>
          </div>
          <div className='all-cards-containter'>
           <Card search={searchText} language ={languageText}/>
          </div>
        </div>
  </>
  );
}

export default Tutorial;