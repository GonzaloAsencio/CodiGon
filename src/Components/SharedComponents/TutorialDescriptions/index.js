import React from 'react';
import animation from './TutorialDescriptionAnimation.module.css';
import './TutorialDescription.css';
import Scripty from '../../../assets/Image/Main/Scripty.png';
import Unity from '../../../assets/Image/Main/Unity.png';
import { useInView } from 'react-intersection-observer';
import Button from '../../SharedComponents/Button/index';

function TutorailDescription() {

    const {ref: firstRef, inView: myElementIsVisible} = useInView({triggerOnce: true,threshold: 0.1});
    const {ref: firstTitleRef, inView: firstTitleVisible} = useInView({triggerOnce: true,threshold: 0.1});
    const {ref: firstDescriptionRef, inView: firstDescriptionVisible} = useInView({triggerOnce: true,threshold: 0.1});
    const {ref: firstButtonRef, inView: firstButtonVisible} = useInView({triggerOnce: true,threshold: 0.1});
    const {ref: secondRef, inView: mySecondElementIsVisible} = useInView({triggerOnce: true,threshold: 0.1});
    const {ref: secondTitleRef, inView: secondTitleVisible} = useInView({triggerOnce: true,threshold: 0.1});
    const {ref: secondDescriptionRef, inView: secondDescriptionVisible} = useInView({triggerOnce: true,threshold: 0.1});
    const {ref: secondButtonRef, inView: secondButtonVisible} = useInView({triggerOnce: true,threshold: 0.1});

 
    return (
    <section className='introduction'>
        <div className='introduction-image'>
            <img src={Scripty} alt="" ref={firstRef} className={`${myElementIsVisible ? animation.spawnLeftAnimation :''}`} style={{ 'animationDelay': `1s` }} />
            <div className='introduction-description'>
                <h2 ref={firstTitleRef} className={`introduction-description-text ${firstTitleVisible ?  animation.spawnFrontAnimaiton:''}`}  style={{ 'animationDelay': `0.8s`}} >
                     Aprende las bases en C#
                </h2>
                <p ref={firstDescriptionRef} className={`introduction-description-subText ${firstDescriptionVisible ?  animation.spawnFrontAnimaiton:''}`}  style={{ 'animationDelay': `1.3s` }}>
                    Si no tienes experiencia en programación. Esta sección te puede ayudarte a dar los primeros pasos.
                </p>
                <div  ref={firstButtonRef} className={`${firstButtonVisible ?  animation.spawnRightAnimation:''}`}  style={{ 'animationDelay': `1.5s` ,'opacity':`0`,'paddingTop':`1rem`}}>
                <Button text='Hola C#' path={'/tutorial'} size ={'medium'} textSize={'medium'} />
                </div>
            </div>
        </div>
        <div className='introduction-image'>
            <img src={Unity} alt="" ref={secondRef} className={`${ mySecondElementIsVisible? animation.spawnRightAnimation :''}`} style={{ 'animationDelay': `1.7s` }}/>
            <div className='introduction-description'>
                <h2 ref={secondTitleRef} className={`introduction-description-text ${ secondTitleVisible?  animation.spawnFrontAnimaiton:''}`}  style={{ 'animationDelay': `1.9s`}}>
                    Para desarrollar Videojuegos en Unity
                </h2>
                <p ref={secondDescriptionRef} className={`introduction-description-subText ${secondDescriptionVisible ?  animation.spawnFrontAnimaiton:''}`}  style={{ 'animationDelay': `2.2s` }}>
                   Aprende todo lo necesario para convertirte en un desarrollador de Videojuegos profesional.
                </p>
                <div  ref={secondButtonRef} className={`${secondButtonVisible ?  animation.spawnLeftAnimation:''}`}  style={{ 'animationDelay': `2.4s` ,'opacity':`0` ,'paddingTop':`1rem` }}>
                    <Button text='Ir a Unity' path={'/tutorial'} size ={'medium'} textSize={'medium'} />
                </div>
            </div>
        </div>
    </section>
    );
}
export default TutorailDescription;
