import React, { useEffect, useRef, useState} from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import contactAnimation from './Contact.module.css';
import paperFlyImage from '../../../assets/Image/ContactMe/paperfly1.png';
import paperFlyImage2 from '../../../assets/Image/ContactMe/paperfly2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope,faEnvelopeOpen, faCheck} from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';
import Button from '../../SharedComponents/Button/index';
import inputsValidatios from './inputsValidatios';
import InputField from '../../SharedComponents/Input/index';
import TextArea from '../../SharedComponents/TextArea/index';


function Contact() {
  const form = useRef();
  const {ref: imageRef, inView: myImageIsVisible} = useInView();
  const initialValues = { fullname: "", email: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [sendMessage, setSendMessage] = useState(false);
  const [target, setTarget] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    e.target.reset();
    setIsSubmit(true);
    setTarget(e.target);
    setFormErrors(inputsValidatios(formValues));
  };

  useEffect(()=> {
  if(Object.keys(formErrors).length === 0 && isSubmit){
    emailjs.sendForm('service_vmonm0i', 'template_x1o4y7q', target, 'gZGdSovCh9WOdI9Lq')
      .then((result) => {
          setSendMessage(true);
          console.log(result.text);
      }, (error) => {
          setSendMessage(false);
          console.log(error.text);
      });
    }
    setIsSubmit(false);
  },[formErrors, isSubmit, target]);



  useEffect(()=> {
    const messageCircle = document.querySelector('.messageIcon');
    const messageInputs = document.querySelector('.message-inputs');
    const messageIcon = document.querySelector('.msgicon');
    const messageOpenIcon = document.querySelector('.msgiconOpen');

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
  

  //CAMBIAR POR UN STATE PARA QUE PAREZCA

  return (
    <div className='contact-me'>
        <div className='message-container'>
          <div className='message-title'>
            {sendMessage ? <h2> MUCHAS GRACIAS POR CANTACTARTE CONMIGO</h2> :  <h2>¿QUERES CONTACTARTE CONMIGO?</h2> }
            {sendMessage ? <p>Me pondré en contacto con usted pronto.</p> : <p>ENVÍAME UN MENSAJE</p> }
          </div>
          <div className='message-text'>
              {sendMessage?
              <div className='succesMessage'>
                <div className='msgIconBackground'>
                  <FontAwesomeIcon className='msgSuccesIcon'icon={faCheck}/>
                </div>
              </div>
                :
                <>
                  <button className='messageIcon'>
                    <FontAwesomeIcon className='msgicon' icon={faEnvelope} />
                    <FontAwesomeIcon className='msgiconOpen' icon={faEnvelopeOpen} />
                  </button>
                  <form ref={form} className='message-inputs' onSubmit={handleSubmit}>
                  <div className='from-input-container'>
                    <InputField text={'text'} placeholder='Nombre' name='fullname' value={formValues.fullname} onChange={handleChange} error = {formErrors.fullname} />
                  </div>
                  <div className='from-input-container'>
                    <InputField text={'text'}  placeholder='Email' className='from-input' name='email' value={formValues.email} onChange={handleChange} error ={formErrors.email} />
                  </div>
                  <div className='from-input-container'>
                  <TextArea placeholder='Mensaje' name="message" cols="40" rows="5" value={formValues.message} onChange={handleChange} error={formErrors.message} />
                  </div>
                  <div>
                    <Button  text='Enviar' variant='secondary' size='big' />
                  </div>
                  </form>
                </>
            }
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