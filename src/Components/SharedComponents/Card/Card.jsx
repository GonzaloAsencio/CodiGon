import React from 'react';
import image from '../../../assets/Image/Holder/25C13A4B-4DCB-4C46-941B-0966ED7BC1DA.jpeg';
import icon from '../../../assets/Image/Holder/csharpicon.png';
import './Card.css';

function Card() {
return (
    <div className='card'>
        <div className='card-body'>
            <div className='card-image'>
                <img src={image} alt=''/>
            </div>
            <div className='card-icon-image'>
                <img src={icon} alt=''/>
            </div>
            <h2 className='card-tittle'>My Title</h2>
            <div className='card-text-conteiner'>
                <p className='card-text text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <button>
                <a href="https://www.youtube.com/watch?v=ZZ5LpwO-An4">View More</a>
            </button>
        </div>

    </div>

);
}
export default Card;