/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import './Card.css';

function Card({title, description, image,url,icon,color}) {
    const cardStyle = {
        background: color,
      };
return (
    <div className='card' style = {cardStyle} >
        <div className='card-body'>
            <a href={url}/>
            <div className='card-image'>
                <img src={image} alt=''/>
            </div>
            <div className='card-icon-image'>
                <img src={icon} alt=''/>
            </div>
            <div className='card-text-conteiner' style = {cardStyle}>
                <h2 className='card-tittle'>{title}</h2>
                <p className='card-text text-secondary'>
                { description ? description :
                'Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit '
                }
                </p>
            </div>
        </div>

    </div>
);
}
export default Card;