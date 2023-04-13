import React from 'react';
import './Main.css';
import SeparatorText from '../SharedComponents/IconWithTextSeparetor/IconWithTextSeparator';
import Carousel from '../SharedComponents/Carousel/Carousel';
import Card from '../SharedComponents/Card/Cards';



function Main() {
  return (
      <div className='body-conteiner'>
        <div className='images-carousell'>
          <Carousel/>
        </div>
        <div className='images-select'>
         <SeparatorText/>
        </div>
          <Card/>
        <div>
            <h2>Ver mas tutoriales</h2>
        </div>
      </div>
  );
}

export default Main;