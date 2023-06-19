import React from 'react';
import './Main.css';
import Header from '../../SharedComponents/Header/Header';
import Footer from '../../SharedComponents/Footer/index';
import SocialMedia from '../../SharedComponents/SocialMedia/index';
import Contact from '../../SharedComponents/Contact';
import Descriptions from '../../SharedComponents/TutorialDescriptions/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import Button from '../../SharedComponents/Button/index';


function Main() {
  return (
    <>
    <Header/>
          <section className='slider-conteiner'>
            <div className='slider-text'>
                  <h2>¿ESTAS PENSANDO EN EMPEZAR A DESARROLLAR VIDEOJUEGOS?</h2>
                  <p>Mejora tu aprendizaje viendo los mejores tutoriales de programación.</p>
            </div>
              <Button text='VER TUTORIALES' path={'/tutorial'} size ={'big'} textSize={'medium'}/>
            <a href ="#first-section" className='change-page-button'>
              <FontAwesomeIcon id='change-page-icon' icon={faChevronDown} className='fa-xl'/>
            </a>
          </section>
          <div id ="first-section">
            <Descriptions/>
          </div>
          <div id="second-section">
            <Contact/>
          </div>
          <div id="third-section">
            <SocialMedia/>
          </div>
    <Footer/>
    </>
  );
}

export default Main;