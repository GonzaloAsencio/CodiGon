import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';
import IconSeparetor from '../SharedComponents/IconSeparetor/IconSeparetor';
import Carousel from '../SharedComponents/Carousel/Carousel';
import Card from '../SharedComponents/Card/Cards';
import iconAmount from '../SharedComponents/IconSeparetor/IconCounter';
import Slider from '../SharedComponents/Slider/Slider'

function Main() {
  return (
      <div className='body-conteiner'>
        <div className='images-carousell'>
          <Carousel/>
        </div>
        <div className='slider-conteiner'>
            <Slider/>
          </div>
        <div className='images-select'>
          <div className='tutorials'>
            <h2>TUTORIALES</h2>
          </div>
        </div>
          <div className='card-conteiner'>
            <Card search={""}/>
          </div>
        <div className='see-more-tutorials'>
            <ul>
              <li>
                <Link to="/tutorial">
                <a data-text="&nbsp;Ver&nbsp;mas">&nbsp;ver mas&nbsp;</a>
                </Link>
              </li>
            </ul>
        </div>
        <IconSeparetor amount={iconAmount().amount}/>
      </div>
  );
}

export default Main;