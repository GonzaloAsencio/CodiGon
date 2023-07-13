import React from 'react';
import './Main.css';
import SocialMedia from '../../SharedComponents/SocialMedia/index';
import Contact from '../../SharedComponents/Contact';
import Descriptions from '../../SharedComponents/TutorialDescriptions/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import Button from '../../SharedComponents/Button/index';

function Main() {
  return (
    <>
      <section className='slider-conteiner'>
        <div className='slider-text'>
          <h2>¿ESTAS PENSANDO EN EMPEZAR A DESARROLLAR VIDEOJUEGOS?</h2>
          <p>Entonces te recomiendo que mires los tutoriales que hice para mejorar tu aprendizaje.</p>
        </div>
        <Button text='VER TUTORIALES' path={'/tutorial'} size ={'big'} textSize={'medium'}/>
          <a href ="#first-section" className='change-page-button'>
            <FontAwesomeIcon id='change-page-icon' icon={faChevronDown} className='fa-xl'/>
          </a>
      </section>
      <div id ="first-section">
        <Descriptions/>
      </div>
      <div id="contact-section">
        <Contact/>
      </div>
      <div id="socialMedia-section">
        <SocialMedia/>
      </div>
    </>
  );
}

export default Main;