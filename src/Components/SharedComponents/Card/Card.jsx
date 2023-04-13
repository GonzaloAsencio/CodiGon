import React from 'react';
import './Card.css';

//Falta enviarle el icono tambien
function Card({title, description, image,url,icon,color}) {
    const stylesObj = {
        background: color
      };
return (
    <div className='card'>
        <div className='card-body'>
            <div className='card-image'>
                <img src={image} alt=''/>
            </div>
            <div className='card-icon-image'>
                <img src={icon} alt=''/>
            </div>
            <div className='card-text-conteiner' style = {stylesObj}>
                <h2 className='card-tittle'>{title}</h2>
                <p className='card-text text-secondary'>
                { description ? description :
                'Lorem ipsum dolor sit amet consectetur adipisicing elit'
                }
                </p>
            </div>
            <button style = {stylesObj}>
                <a href={url}>View More</a>
            </button>
        </div>

    </div>

);
}
export default Card;