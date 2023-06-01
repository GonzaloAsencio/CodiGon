import React, { useEffect, useState} from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import contactAnimation from './Contact.module.css';
import paperFlyImage from '../../../assets/Image/ContactMe/paperfly1.png';
import paperFlyImage2 from '../../../assets/Image/ContactMe/paperfly2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope,faEnvelopeOpen, faCheck} from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';




const Result = () => {
  return(
    <>
        <p>Me pondré en contacto con usted pronto.</p>
    </>
  );
};


function Contact() {
  const {ref: imageRef, inView: myImageIsVisible} = useInView();
  const [result,showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_vmonm0i', 'template_x1o4y7q', e.target, 'gZGdSovCh9WOdI9Lq')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true);
  };

  useEffect(()=> {
    const messageCircle = document.querySelector('.messageIcon');
    const messageInputs = document.querySelector('.message-inputs');
    const inputsButton = document.querySelector('.from-text-button');
    const messageIcon = document.querySelector('.msgicon');
    const messageOpenIcon = document.querySelector('.msgiconOpen');

    inputsButton.addEventListener("click", () => {
      messageInputs.style.visibility = "hidden";
    });

    messageCircle.addEventListener("click", ()=> {
      messageCircle.classList.toggle(contactAnimation.disappear);
      messageIcon.style.display='none';
      messageOpenIcon.style.visibility = 'visible';
      messageCircle.onanimationend = () => {
        messageCircle.style.display='none';
        messageInputs.classList.toggle(contactAnimation.appear);
        messageInputs.style.visibility = "visible";
      };
    });
  },[]);

  return (
    <div className='contact-me'>
        <div className='message-container'>
          <div className='message-title'>
            {result ? <h2> MUCHAS GRACIAS POR CANTACTARTE CONMIGO</h2> :  <h2>¿QUERES CONTACTARTE CONMIGO?</h2> }
            {result ? <Result/> : <p>ENVÍAME UN MENSAJE</p> }
          </div>
          <div className='message-text'>
              {result ?
                  <div className='test'>
                     <FontAwesomeIcon className='msgSuccesIcon' color="white" icon={ faCheck}/>
                  </div>
                :
                  <button className='messageIcon'>
                    <FontAwesomeIcon className='msgicon' icon={faEnvelope}/>
                    <FontAwesomeIcon className='msgiconOpen' icon={faEnvelopeOpen}/>
                  </button>
                }
              <form className='message-inputs' onSubmit={sendEmail}>
                <div className='from-input-container'>
                  <input type="text" placeholder='Nombre' className='from-input' name='fullname'/>
                </div>
                <div className='from-input-container'>
                  <input type="text" placeholder='Email' className='from-input' name='email'/>
                </div>
                <textarea name="message" id="" cols="40" rows="5" className='from-text-area'></textarea>
                <button className='from-text-button'>Enviar</button>
              </form>
            </div>
          </div>
          <div className='contact-me-image'>
            <img src={paperFlyImage2} alt="" ref={imageRef} className= {` ${myImageIsVisible ? contactAnimation.papperFlyAnimation :''}`}/>
            <img src={paperFlyImage} alt="" ref={imageRef} className= {` ${myImageIsVisible ? contactAnimation.papperFlyAnimation :''}`}/>
          </div>
      </div>
  );
}

export default Contact;