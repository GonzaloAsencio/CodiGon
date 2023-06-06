/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import './Card.css';

function Card({title, summary,cover,color}) {
    const cardStyle = {
        background: color
      };
return (
    <div className='card' style = {cardStyle} >
        <div className='card-body'>
            <div className='card-image'>
                <img src={'http://localhost:4000/'+cover} alt=''/>
            </div>
            <div className='card-text-conteiner' style = {cardStyle}>
                <h2 className='card-tittle'>{title}</h2>
                <p className='card-text text-secondary'>
                { summary ? summary :
                'Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit '
                }
                </p>
            </div>
        </div>

    </div>
);
}
export default Card;