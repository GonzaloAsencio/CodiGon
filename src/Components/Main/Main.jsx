import React from 'react';
import './Main.css';
import Separetor from '../SharedComponents/IconSeparetor/Separetor';
import Carousel from '../SharedComponents/Carousel/Carousel';
import Card from '../SharedComponents/Card/Cards';


function Main() {
  return (
      <div className='body-conteiner'>
        <div className='images-carousell'>
          <Carousel/>
        </div>
        <div className='images-select'>
          <div className='separetor'>
            <Separetor iconCounter={2}/>
            <h2>TUTORIALES</h2>
            <Separetor iconCounter={2}/>
          </div>
        </div>
          <Card/>
        <div>
            <h2>Ver mas tutoriales</h2>
        </div>
        <div>
         <Separetor iconCounter={5}/>
        </div>
      </div>
  );
}

export default Main;