/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import csharpIncon from '../../../assets/Image/Icons/csharpicon.png';
import unityIcon from '../../../assets/Image/Icons/unityIcon.png';
import './Card.css';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import styled from 'styled-components';


const TextAreaStyle = styled(motion.div)`
    box-shadow: ${(props) => props.color};
    border:5px solid ${(props) => props.color};
     .card-text-conteiner{
        border-top: 5px solid ${(props) => props.color};
    }
    .card-text-conteiner > h2{
        color:#2d3436;
    }
    .card:hover{
    transition: all 0.3s linear;
    }
    &:hover .card-text-conteiner{
        transition: all 0.2s linear;
        font-size: 20px;
        color:white;
        background-color:${(props) => props.color};
    }
    &:hover .card-text-conteiner> p {
        display: -webkit-box;
        font-weight:400;
        visibility: visible;
        opacity: 1;
    }
    &:hover .card-text-conteiner> h2 {
        color:white;
        text-shadow: 1px 1.2px #2d3436;
    }
`;

function Card({_id,title, summary,cover,color,icon}) {


return (
    <TextAreaStyle layout initial={{'opacity':0, 'scale':0}} animate={{'opacity':1, 'scale':1}} exit={{'opacity':0, 'scale':0 }} transition={{'duration':0.2}} className='card' color={color} >
        <div className='card-body'>
            <div className='card-icon-image'>
                    <img src={icon === 'Unity' ? unityIcon : csharpIncon } alt=''/>
            </div>
            <div className='card-image'>
                <img src={'http://localhost:4000/'+cover} alt=''/>
            </div>
            <div className='card-text-conteiner'>
                <h2 className='card-tittle'>{title}</h2>
                <p className='card-text text-secondary'>
                { summary ? summary :
                'El creador de esta página se olvidó de agregar contenido en esta sección. '
                }
                </p>
            </div>
        </div>
    </TextAreaStyle>
);
}
export default Card;