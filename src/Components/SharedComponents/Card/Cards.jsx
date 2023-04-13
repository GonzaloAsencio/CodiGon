import React from "react";
import Card from "./Card";
import "./Card.css";
import image from '../../../assets/Image/Holder/614e5365a3d18.jpg';
import icon from '../../../assets/Image/Holder/csharpicon.png';

const cards= [
    {
        id:1,
        Image:image,
        url:"https://www.youtube.com/watch?v=ZZ5LpwO-An4&t=2s",
        description:"",
        title:"My Title",
        icon:icon,

    },
    {
        id:2,
        Image:image,
        url:"https://www.youtube.com/watch?v=ZZ5LpwO-An4&t=2s",
        title:"My Title",
        icon:icon,


    },
    {
        id:3,
        Image:image,
        url:"https://www.youtube.com/watch?v=ZZ5LpwO-An4&t=2s",
        description:"",
        title:"SOY EL TERCERO",
        icon:icon,


    },
    {
        id:4,
        Image:image,
        url:"https://www.youtube.com/watch?v=ZZ5LpwO-An4&t=2s",
        description:"",
        title:"SOY EL CUARTO",
        icon:icon,
   

    },
    {
        id:5,
        Image:image,
        url:"https://www.youtube.com/watch?v=ZZ5LpwO-An4&t=2s",
        description:"",
        title:"SOY EL QUINTO",
        icon:icon,


    },
    {
        id:6,
        Image:image,
        url:"https://www.youtube.com/watch?v=ZZ5LpwO-An4&t=2s",
        description:"",
        title:"SOY EL SEXTO",
        icon:icon,


    }
]
var initialPosition =0;
 function CalculateColor(){
    var printColor;
    var ColorPallete=["#55efc4","#81ecec","#74b9ff","#fab1a0","#ff7675","#fd79a8"];
    printColor = ColorPallete[initialPosition];
    if(initialPosition > ColorPallete.length){
        initialPosition = 0;
    } else  initialPosition++;
    return(printColor);
}

function Cards(){
return(
    <div className="cards">
        {
            cards.map( card => (
                <div className="cards-conteiner" key={card.id}>
                <Card title={card.title} description={card.description} image={card.Image} url={card.url} icon ={icon} color={CalculateColor()}/>
                 </div>
            ))
        }
    </div>
  );
}

export default Cards;