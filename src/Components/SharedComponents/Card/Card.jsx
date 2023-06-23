/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import './Card.css';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

function Card({_id,title, summary,cover,color}) {
    const cardStyle = {
        background: color
      };
return (
    <motion.div initial={{'opacity':0, 'scale':0}} animate={{'opacity':1, 'scale':1}} exit={{'opacity':0, 'scale':0}} transition={{'duration':0.5}} className='card' style = {cardStyle} >
        <div className='card-body'>
            <div className='card-image'>
                <img src={'http://localhost:4000/'+cover} alt=''/>
            </div>
            <div className='card-text-conteiner' style = {cardStyle}>
                <h2 className='card-tittle'>{title}</h2>
                <p className='card-text text-secondary'>
                { summary ? summary :
                'El creador de esta página se olvidó de agregar contenido en esta sección. '
                }
                </p>
            </div>
        </div>

    </motion.div >
);
}
export default Card;