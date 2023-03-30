import React from 'react';
import './Separetor.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUnity,faGithub,faGooglePlay,faItchIo,faYoutube} from '@fortawesome/free-brands-svg-icons';

function Separetor(iconCounter) {

    const number = iconCounter;
    const emtyList  =[];
    const listOfIcons  =[ faUnity, faGooglePlay, faGithub, faItchIo, faYoutube];

    for (let index = 0; index < number.iconCounter; index++) {
        for (let j = 0; j < listOfIcons.length; j++) {
            emtyList.push(listOfIcons[j]);
        }
    }
return (
    <div className='separator-icon'>
        {emtyList.map((icon, index) => (
            <FontAwesomeIcon id="separator-icon" key={`${index}`} icon ={icon}/>
        ))}
    </div>
    );
}
export default Separetor;