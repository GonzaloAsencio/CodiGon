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
  const {ref: iconRef, inView: myIconIsVisible} = useInView({threshold: 0.1});
  const {ref: smImageRef, inView: mysmImageIsVisible} = useInView({threshold: 0.1});

    return (
    <section className='social-media'>
        <div className='social-media-conteiner'>
            <div ref={smImageRef} className= {`social-media-image-conteiner ${mysmImageIsVisible ? animations.socialmediaImage :''}`}>
              <img src={handImage} className='sm-base-image' alt=""  />
              <img src={handLeft} alt="" ref={smImageRef} className= {`sm-second-image ${mysmImageIsVisible ? animations.handAnimation :''}`} />
              <img src={completeHand} alt="" ref={smImageRef} className= {`sm-third-image ${mysmImageIsVisible ? animations.InstaAppear:''}`}/>
            </div>
            <div className='social-media-icons'>
              <div className='social-media-text'>
                <h2>SIGUEME EN MIS REDES</h2>
                <p>Para enterarte sobre mis últimos árticulos a tiempo.</p>
              </div>
              <div className='warpper'>
                <div ref={iconRef} className= {`icon ${myIconIsVisible ? animations.iconJump :''}`} >
                  <div className='toolTip'>Twitter</div>
                  <div className='social-icon-conteiner'>
                    <a href='https://twitter.com/SapoPlayer' style={{'color':`#0984e3`}}>
                      <FontAwesomeIcon className='iconn' icon={faTwitter}/>
                    </a>
                  </div>
                </div>
                <div ref={iconRef} className= {`icon ${myIconIsVisible ? animations.iconJump :''}`} >
                  <div className='toolTip'>LinkedIn</div>
                  <div className='social-icon-conteiner'>
                      <a href='https://www.linkedin.com/in/gonzalo-asencio/' style={{'color':`#0984e3`}}>
                      <FontAwesomeIcon className='iconn' icon={faLinkedinIn}/>
                      </a>
                  </div>
                </div>
                <div ref={iconRef} className= {`icon ${myIconIsVisible ? animations.iconJump :''}`} >
                  <div className='toolTip'>GitHub</div>
                  <div className='social-icon-conteiner'>
                      <a href='https://github.com/Codi-Gon' style={{'color':`#2d3436`}}>
                        <FontAwesomeIcon  className='iconn' icon={faGithub}/>
                      </a>
                  </div>
                </div>
                <div ref={iconRef} className= {`icon ${myIconIsVisible ? animations.iconJump :''}`} >
                  <div className='toolTip'>PlayStore</div>
                  <div className='social-icon-conteiner'>
                      <a href='https://play.google.com/store/apps/developer?id=VissArg&hl=es_419' style={{'color':`#2d3436`}}>
                      <FontAwesomeIcon className='iconn' icon={faGooglePlay }/>
                      </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}
export default SocialMedia;

