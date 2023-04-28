import React from "react";
import Card from "./Card";
import "./Card.css";
import image from '../../../assets/Image/Holder/614e5365a3d18.jpg';
import icon from '../../../assets/Image/Holder/csharpicon.png';


//HAY QUE LLAMAR AL OBJETO DIRECTAMENTE.
const cards= [
    {
        id:1,
        Image:image,
        url:"https://www.youtube.com/watch?v=ZZ5LpwO-An4&t=2s",
        description:"",
        title:"My Unity",
        icon:icon,
        color :"",
        languague: "unity"
    },
    {
        id:2,
        Image:image,
        url:"https://www.youtube.com/watch?v=ZZ5LpwO-An4&t=2s",
        title:"My Title",
        icon:icon,
        color :"",
        languague:"unity"

    },
    {
        id:3,
        Image:image,
        url:"https://www.youtube.com/watch?v=ZZ5LpwO-An4&t=2s",
        description:"",
        title:"SOY EL TERCERO",
        icon:icon,
        color :"",
        languague:"unity"


    },
    {
        id:4,
        Image:image,
        url:"https://www.youtube.com/watch?v=ZZ5LpwO-An4&t=2s",
        description:"",
        title:"SOY EL CUARTO",
        icon:icon,
        color :"",
        languague: "unity"

    },
    {
        id:5,
        Image:image,
        url:"https://www.youtube.com/watch?v=ZZ5LpwO-An4&t=2s",
        description:"",
        title:"SOY EL QUINTO",
        icon:icon,
        color :"",
        languague:"unity"


    },
    {
        id:6,
        Image:image,
        url:"https://www.youtube.com/watch?v=ZZ5LpwO-An4&t=2s",
        description:"",
        title:"SOY EL SEXTO",
        icon:icon,
        color :"",
        languague:"unity"


    },
    {
        id:7,
        Image:image,
        url:"https://www.youtube.com/watch?v=ZZ5LpwO-An4&t=2s",
        description:"",
        title:"SOY EL CUARTO",
        icon:icon,
        color :"",
        languague: "csharp"

    },
    {
        id:8,
        Image:image,
        url:"https://www.youtube.com/watch?v=ZZ5LpwO-An4&t=2s",
        description:"",
        title:"SOY EL QUINTO",
        icon:icon,
        color :"",
        languague: "Csharp"


    },
    {
        id:9,
        Image:image,
        url:"https://www.youtube.com/watch?v=ZZ5LpwO-An4&t=2s",
        description:"",
        title:"SOY EL SEXTO",
        icon:icon,
        color :"",
        languague: "Csharp"


    }
]

 function CalculateColor(){
    var initialColor =0;
    var ColorPallete=["#55efc4","#81ecec","#74b9ff","#fab1a0","#ff7675","#fd79a8"];
     cards.forEach(element => {
        if(element.color === ""){
            element.color = ColorPallete[initialColor];
            initialColor++;
            if(initialColor >= ColorPallete.length){
                initialColor =0;
            }
        }
    });
}

function Cards({search}){
CalculateColor();
return(
    <div className="cards">
        {
            cards.filter((item) =>{
                    return search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search) || item.languague.toLowerCase().includes(search) ;
            }).map(card => (
                <div className="cards-conteiner" key={card.id}>
                <Card title={card.title} description={card.description} image={card.Image} url={card.url} icon ={icon} color={card.color}/>
                 </div>
            ))
        }
    </div>
  );
}

export default Cards;