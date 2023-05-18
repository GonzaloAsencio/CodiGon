import React from 'react';
import './SocialMedia.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  handImage from '../../../assets/Image/SocialMedia/hand.png';
import  handLeft from '../../../assets/Image/SocialMedia/izq.png';
import  completeHand from '../../../assets/Image/SocialMedia/picComplete.png';

import { faLinkedinIn, faTwitter, faGithub, faGooglePlay} from '@fortawesome/free-brands-svg-icons';


function SocialMedia() {
    return (
    <div className='social-media'>
        <div className='social-media-conteiner'>
            <div className='social-media-image-conteiner'>
              <img src={handImage} className='sm-base-image' alt="" />
              <img src={handLeft} className= 'sm-second-image'alt="" />
              <img src={completeHand} className= 'sm-third-image'alt="" />
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
    );
}
export default SocialMedia;

