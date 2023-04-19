import React from 'react';
import './Main.css';
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
          <div className='tutorials'>
            <h2>TUTORIALES</h2>
        </div>
        </div>
          <Card/>
        <div className='see-more-tutorials'>
            <ul>
              <li>
                <a href='' data-text="&nbsp;Ver&nbsp;mas">&nbsp;ver mas&nbsp;</a>
              </li>
            </ul>
        </div>
        <IconSeparetor amount={iconAmount().amount}/>
      </div>
  );
}

export default Main;