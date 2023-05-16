import React, { useEffect} from 'react';
import './Contact.css';
import paperFlyImage from '../../../assets/Image/ContactMe/paperfly1.png';
import paperFlyImage2 from '../../../assets/Image/ContactMe/paperfly2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope,faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons';


function Contact() {
  useEffect(()=> {
    const xd = document.querySelector('.circlexd');
    const xd2 = document.querySelector('.message-inputs');
    const xd3 = document.querySelector('.msgicon');
    const xd4 = document.querySelector('.msgiconOpen');
    xd.addEventListener("click", ()=> {
      xd.classList.toggle("Animation");
      xd3.style.display='none';
      xd4.style.visibility = 'visible';
      xd.onanimationend = () => {
        xd.style.display='none'; // hide the element after animation
      };
      xd2.classList.toggle("backUp");
    });
  },[]);

  return (
    <div className='contact-me'>
        <div className='message-container'>
          <h2>ESCRIBIME UN MENSAJE</h2>
          <div className='message-text'>
              <button className='circlexd'><FontAwesomeIcon className='msgicon' icon={faEnvelope}/><FontAwesomeIcon className='msgiconOpen' icon={faEnvelopeOpen}/></button>
              <div className='message-inputs'>
                <div className='from-input-container'>
                  <input type="text" placeholder='Nombre' className='from-input'/>
                </div>
                <div className='from-input-container'>
                  <input type="text" placeholder='Email' className='from-input'/>
                </div>
                <textarea name="" id="" cols="25" rows="3" className='from-text-area'></textarea>
                <button className='from-text-button'>Enviar</button>
              </div>
            </div>
          </div>
          <div className='contact-me-image'>
            <img src={paperFlyImage2} alt="" />
            <img src={paperFlyImage} alt="" />
          </div>
      </div>
  );
}

export default Contact;