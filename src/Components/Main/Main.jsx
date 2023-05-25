/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Main.css';
import Header from '../SharedComponents/Header/Header';
import Footer from '../SharedComponents/Footer/index';
import SocialMedia from '../SharedComponents/SocialMedia/index';
import Contact from '../SharedComponents/Contact';
import Descriptions from '../SharedComponents/TutorialDescriptions/index';

function Main() {
  window.addEventListener('scroll',function(){
    let animation = document.getElementById('xd');
    let positionObj = animation.getBoundingClientRect().top;
    let tamañoDePantalla = window.innerHeight/3;
    if(positionObj < tamañoDePantalla){
      animation.style.animation = "--Appear 1s";
    }
  })
  return (
    <>
    <Header/>
          <div id='xd' className='slider-conteiner'>
            <div className='slider-text'>
                  <h2>¿ESTAS PENSANDO EN EMPEZAR A DESARROLLAR VIDEOJUEGOS?</h2>
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