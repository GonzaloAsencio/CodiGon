import React from 'react';
import './SocialMedia.css';
import { useInView } from 'react-intersection-observer';
import animations from  './SocialMediaAnimations.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  handImage from '../../../assets/Image/SocialMedia/hand.png';
import  handLeft from '../../../assets/Image/SocialMedia/izq.png';
import  completeHand from '../../../assets/Image/SocialMedia/picComplete.png';

import { faLinkedinIn, faTwitter, faGithub, faGooglePlay} from '@fortawesome/free-brands-svg-icons';


function SocialMedia() {
  const {ref: iconRef, inView: myIconIsVisible} = useInView();
  const {ref: smImageRef, inView: mysmImageIsVisible} = useInView();

    return (
    <div className='social-media'>
        <div className='social-media-conteiner'>
            <div ref={smImageRef} className= {`social-media-image-conteiner ${mysmImageIsVisible ? animations.socialmediaImage :''}`}>
              <img src={handImage} className='sm-base-image' alt=""  />
              <img src={handLeft} alt="" ref={smImageRef} className= {`sm-second-image ${mysmImageIsVisible ? animations.handAnimation :''}`} />
              <img src={completeHand} alt="" ref={smImageRef} className= {`sm-third-image ${mysmImageIsVisible ? animations.InstaAppear:''}`}/>
            </div>
            <div className='social-media-icons'>
              <div className='social-media-text'>
                <h2>SIGUEME EN MIS REDES</h2>
              </div>
              <div className='warpper'>
                <div ref={iconRef} className= {`icon ${myIconIsVisible ? animations.iconJump :''}`} >
                  <div className='toolTip'>Twitter</div>
                  <div className='social-icon-conteiner'>
                      <FontAwesomeIcon className='iconn' icon={faTwitter}/>
                  </div>
                </div>
                <div ref={iconRef} className= {`icon ${myIconIsVisible ? animations.iconJump :''}`} >
                  <div className='toolTip'>LinkedIn</div>
                  <div className='social-icon-conteiner'>
                      <FontAwesomeIcon className='iconn' icon={faLinkedinIn}/>
                  </div>
                </div>
                <div ref={iconRef} className= {`icon ${myIconIsVisible ? animations.iconJump :''}`} >
                  <div className='toolTip'>GitHub</div>
                  <div className='social-icon-conteiner'>
                      <FontAwesomeIcon className='iconn' icon={faGithub}/>
                  </div>
                </div>
                <div ref={iconRef} className= {`icon ${myIconIsVisible ? animations.iconJump :''}`} >
                  <div className='toolTip'>PlayStore</div>
                  <div className='social-icon-conteiner'>
                      <FontAwesomeIcon className='iconn' icon={faGooglePlay }/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}
export default SocialMedia;

