/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Main.css';
import Header from '../SharedComponents/Header/Header';
import Footer from '../SharedComponents/Footer/index';
import Slider from '../SharedComponents/Slider/Slider';
import SocialMedia from '../SharedComponents/SocialMedia/index';
import Contact from '../SharedComponents/Contact';
import Descriptions from '../SharedComponents/TutorialDescriptions/index';
import Scripty from '../../assets/Image/Main/Scripty.png';
import Unity from '../../assets/Image/Main/Unity.png';

function Main() {
  return (
    <>
    <Header/>
          <div className='slider-conteiner'>
            <div className='slider-text'>
                  <h2>QUIERES DESARROLLAR VIDEOJUEGOS?</h2>
                  <h4>Mejora tu apredizaje viendo los mejores Tutoriales</h4>
            </div>
            <div>
              <button className='tutorial-button'>Ver Tutoriales</button>
            </div>
          </div>
          <div>
            <Descriptions/>
          </div>
          <Contact/>
          <SocialMedia/>
    <Footer/>
    </>
  );
}

export default Main;