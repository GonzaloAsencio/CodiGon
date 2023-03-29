import React from 'react';
import './Main.css';
import images from './assets/LandingPageImages';
import Separetor from './assets/Separetor';
import Carousel from './Carousel';


function Main() {
  return (
    <div className='body-conteiner'>
      <div className='images-carousell'>
        <Carousel/>
      </div>
      <div className='images-select'>
        <div className='separador'>
          <Separetor iconCounter={2}/>
          <h2>TUTORIALES</h2>
          <Separetor iconCounter={2}/>
        </div>
        <div>
          <img src={images.firstImage} alt=""/>
        </div>
        </div>
     </div>
  );
}

export default Main;