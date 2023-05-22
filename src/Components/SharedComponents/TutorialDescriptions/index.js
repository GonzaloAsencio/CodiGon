import React from 'react';
import './TutorialDescription.css';
import Scripty from '../../../assets/Image/Main/Scripty.png';
import Unity from '../../../assets/Image/Main/Unity.png';



function TutorailDescription() {
    return (
    <div className='introduction'>
        <div className='introduction-image'>
            <img src={Scripty} alt="" />
            <div className='introduction-description'>
                <h2>
                     Aprende las bases en C#
                </h2>
                <h2>
                    Si no sabes las bases de programacion aun, entonces estudia esto.
                </h2>
                <button>Hola C#</button>
            </div>
        </div>
        <div className='introduction-image'>
            <img src={Unity} alt="" />
            <div className='introduction-description'>
                <h2>
                    Para desarrollar Videojuegos en Unity
                </h2>
                <h2>
                    Si ya sabes las bases de programacion, entonces ya estas listo para desarrollar en Unity.
                </h2>
                <button>Ir a Unity</button>
            </div>
        </div>
    </div>
    );
}
export default TutorailDescription;
