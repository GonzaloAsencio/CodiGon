import React from 'react';
import animation from './TutorialDescriptionAnimation.module.css';
import './TutorialDescription.css';
import Scripty from '../../../assets/Image/Main/Scripty.png';
import Unity from '../../../assets/Image/Main/Unity.png';
import { useInView } from 'react-intersection-observer';



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
    <div className='introduction'>
        <div className='introduction-image'>
            <img src={Scripty} alt="" ref={firstRef} className={`${myElementIsVisible ? animation.spawnLeftAnimation :''}`} style={{ 'animationDelay': `1.2s` }} />
            <div className='introduction-description'>
                <h2 ref={firstTitleRef} className={`${firstTitleVisible ?  animation.spawnFrontAnimaiton:''}`}  style={{ 'animationDelay': `1s`}} >
                     Aprende las bases en C#
                </h2>
                <h2 ref={firstDescriptionRef} className={`${firstDescriptionVisible ?  animation.spawnFrontAnimaiton:''}`}  style={{ 'animationDelay': `1.5s` }}>
                    Si no sabes las bases de programacion aun, entonces estudia esto.
                </h2>
                <button ref={firstButtonRef} className={`${firstButtonVisible ?  animation.spawnRightAnimation:''}`}  style={{ 'animationDelay': `2s` }}>Hola C#</button>
            </div>
        </div>
        <div className='introduction-image'>
            <img src={Unity} alt="" ref={secondRef} className={`${mySecondElementIsVisible ? animation.spawnRightAnimation :''}`} style={{ 'animationDelay': `3s` }}/>
            <div className='introduction-description'>
                <h2 ref={secondTitleRef} className={`${secondTitleVisible ?  animation.spawnFrontAnimaiton:''}`}  style={{ 'animationDelay': `2.2s`}}>
                    Para desarrollar Videojuegos en Unity
                </h2>
                <h2 ref={secondDescriptionRef} className={`${secondDescriptionVisible ?  animation.spawnFrontAnimaiton:''}`}  style={{ 'animationDelay': `2.7s` }}>
                    Si ya sabes las bases de programacion, entonces ya estas listo para desarrollar en Unity.
                </h2>
                <button ref={secondButtonRef} className={`${secondButtonVisible ?  animation.spawnLeftAnimation:''}`}  style={{ 'animationDelay': `2.8s` }}>Ir a Unity</button>
            </div>
        </div>
    </div>
    );
}
export default TutorailDescription;
