import React from 'react';
import './Main.css';
import Header from '../SharedComponents/Header/Header';
import Footer from '../SharedComponents/Footer/index';
import SocialMedia from '../SharedComponents/SocialMedia/index';
import Contact from '../SharedComponents/Contact';
import Descriptions from '../SharedComponents/TutorialDescriptions/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';

function Main() {
  return (
    <>
    <Header/>
          <div className='slider-conteiner'>
            <div className='slider-text'>
                  <h2>¿ESTAS PENSANDO EN EMPEZAR A DESARROLLAR VIDEOJUEGOS?</h2>
                  <h4>Mejora tu aprendizaje viendo los mejores tutoriales</h4>
            </div>
            <div>
              <button className='tutorial-button'>Ver Tutoriales</button>
            </div>
            <a href ="#first-section" className='change-page-button'>
                <FontAwesomeIcon id='change-page-icon' icon={faChevronDown} className='fa-xl'/>
            </a>
          </div>
          <div id ="first-section">
            <Descriptions/>
          </div>
          <Contact/>
          <SocialMedia/>
    <Footer/>
    </>
  );
}

export default Main;