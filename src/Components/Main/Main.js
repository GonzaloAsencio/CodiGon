import React from 'react';
import './Main.css';
import Separetor from '../SharedComponents/IconSeparetor/Separetor';
import Carousel from '../SharedComponents/Carousel/Carousel';
import Slider from '../SharedComponents/Slider/Slider';


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
          <div>
            <Slider/>
          </div>
        </div>
        <div>
            <h2>Ver mas tutoriales</h2>
        </div>
        <div>
         <Separetor iconCounter={6}/>
        </div>
      </div>
  );
}

export default Main;