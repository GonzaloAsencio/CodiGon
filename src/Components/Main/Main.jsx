import React from 'react';
import './Main.css';
import SeparatorText from '../SharedComponents/IconWithTextSeparetor/index';
import IconSeparetor from '../SharedComponents/IconSeparetor/IconSeparetor';
import Carousel from '../SharedComponents/Carousel/Carousel';
import Card from '../SharedComponents/Card/Cards';
import iconAmount from '../SharedComponents/IconSeparetor/IconCounter';



function Main() {
  return (
      <div className='body-conteiner'>
        <div className='images-carousell'>
          <Carousel/>
        </div>
        <div className='images-select'>
         <SeparatorText text={"TUTORIALES"}/>
        </div>
          <Card/>
        <div>
            <h2>Ver mas tutoriales</h2>
        </div>
        <IconSeparetor amount={iconAmount().amount}/>
      </div>
  );
}

export default Main;