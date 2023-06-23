import React from 'react';
import animation from './TutorialDescriptionAnimation.module.css';
import './TutorialDescription.css';
import Scripty from '../../../assets/Image/Main/Scripty.png';
import Unity from '../../../assets/Image/Main/Unity.png';
import { useInView } from 'react-intersection-observer';
import Button from '../../SharedComponents/Button/index';

function TutorailDescription() {
    const {ref: firstRef, inView: myElementIsVisible} = useInView();
    const {ref: firstTitleRef, inView: firstTitleVisible} = useInView();
    const {ref: firstDescriptionRef, inView: firstDescriptionVisible} = useInView();
    const {ref: firstButtonRef, inView: firstButtonVisible} = useInView();
    const {ref: secondRef, inView: mySecondElementIsVisible} = useInView();
    const {ref: secondTitleRef, inView: secondTitleVisible} = useInView();
    const {ref: secondDescriptionRef, inView: secondDescriptionVisible} = useInView();
    const {ref: secondButtonRef, inView: secondButtonVisible} = useInView();

    return (
    <section className='introduction'>
        <div className='introduction-image'>
            <img src={Scripty} alt="" ref={firstRef} className={`${myElementIsVisible ? animation.spawnLeftAnimation :''}`} style={{ 'animationDelay': `1.2s` }} />
            <div className='introduction-description'>
                <h2 ref={firstTitleRef} className={`introduction-description-text ${firstTitleVisible ?  animation.spawnFrontAnimaiton:''}`}  style={{ 'animationDelay': `1s`}} >
                     Aprende las bases en C#
                </h2>
                <p ref={firstDescriptionRef} className={`introduction-description-subText ${firstDescriptionVisible ?  animation.spawnFrontAnimaiton:''}`}  style={{ 'animationDelay': `1.5s` }}>
                    En esta sección aprenderas la lógica basica necesaria para convertirte en un desarrollador profesional.
                </p>
                <div  ref={firstButtonRef} className={`${firstButtonVisible ?  animation.spawnRightAnimation:''}`}  style={{ 'animationDelay': `2s` ,'opacity':`0`,'paddingTop':`1rem`}}>
                <Button text='Hola C#' path={'/tutorial'} size ={'medium'} textSize={'medium'} />
                </div>
            </div>
        </div>
        <div className='introduction-image'>
            <img src={Unity} alt="" ref={secondRef} className={`${mySecondElementIsVisible ? animation.spawnRightAnimation :''}`} style={{ 'animationDelay': `3s` }}/>
            <div className='introduction-description'>
                <h2 ref={secondTitleRef} className={`introduction-description-text ${secondTitleVisible ?  animation.spawnFrontAnimaiton:''}`}  style={{ 'animationDelay': `2.2s`}}>
                    Para desarrollar Videojuegos en Unity
                </h2>
                <p ref={secondDescriptionRef} className={`introduction-description-subText ${secondDescriptionVisible ?  animation.spawnFrontAnimaiton:''}`}  style={{ 'animationDelay': `2.7s` }}>
                   Descubre todo lo necesario para convertirte en un desarrollador de Videojuegos.
                </p>
                <div  ref={secondButtonRef} className={`${secondButtonVisible ?  animation.spawnLeftAnimation:''}`}  style={{ 'animationDelay': `2.8s` ,'opacity':`0` ,'paddingTop':`1rem` }}>
                    <Button text='Ir a Unity' path={'/tutorial'} size ={'medium'} textSize={'medium'} />
                </div>
            </div>
        </div>
    </section>
    );
}
export default TutorailDescription;
