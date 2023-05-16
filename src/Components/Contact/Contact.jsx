import React, { useEffect, useState } from 'react';
import './Contact.css';
import image from '../../assets/Image/Holder/614e5365a3d18.jpg';
import paperFlyImage from '../../assets/Image/ContactMe/paperfly1.png';
import paperFlyImage2 from '../../assets/Image/ContactMe/paperfly2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  handImage from '../../assets/Image/SocialMedia/hand.png';
import  handLeft from '../../assets/Image/SocialMedia/izq.png';
import  completeHand from '../../assets/Image/SocialMedia/picComplete.png';
import {faEnvelope,faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faTwitter, faGithub, faGooglePlay} from '@fortawesome/free-brands-svg-icons';
import Header from '../SharedComponents/Header/Header';
import Footer from '../SharedComponents/Footer';
import Testeo from '../SharedComponents/Contact/index';


function Contact() {
  return (
    <>
    <Header/>
    <div className='contact-conteinter'>
      <div className='information-conteiner'>
        <div className='circle-image'>
          <img src={image} alt="" />
        </div>
        <div className='contact-text-cointainer'>
            <h2>Nombre y Apellido</h2>
            <h2>My profesion</h2>
            <h2>Puto el que lee</h2>
        </div>
      </div>
      <Testeo/>
      <div className='social-media'>
        <div className='social-media-conteiner'>
          <div className='social-media-image-conteiner'>
            <img src={handImage} className='base-image' alt="" />
            <img src={handLeft} className= 'second-image'alt="" />
            <img src={completeHand} className= 'third-image'alt="" />
          </div>
          <div className='social-media-icons'>
            <div className='social-media-text'>
              <h2>SIGUEME EN MIS REDES</h2>
            </div>
            <div className='warpper'>
              <div className='icon'>
                <div className='toolTip'>Twitter</div>
                <div className='social-icon-conteiner'>
                    <FontAwesomeIcon className='iconn' icon={faTwitter}/>
                </div>
              </div>
              <div className='icon'>
                <div className='toolTip'>LinkedIn</div>
                <div className='social-icon-conteiner'>
                    <FontAwesomeIcon className='iconn' icon={faLinkedinIn}/>
                </div>
              </div>
              <div className='icon'>
                <div className='toolTip'>GitHub</div>
                <div className='social-icon-conteiner'>
                    <FontAwesomeIcon className='iconn' icon={faGithub}/>
                </div>
              </div>
              <div className='icon'>
                <div className='toolTip'>PlayStore</div>
                <div className='social-icon-conteiner'>
                    <FontAwesomeIcon className='iconn' icon={faGooglePlay }/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </>
  );
}

export default Contact;