import React from "react";
import Card from "./Card";
import "./Card.css";

function Cards(){
return(
    <div className="cards">
        <div className="cards-conteiner">
            <Card/>
        </div>
        <div className="cards-conteiner">
            <Card/>
        </div>
        <div className="cards-conteiner">
            <Card/>
        </div>
        <div className="cards-conteiner">
            <Card/>
        </div>
    </div>
  );
}

export default Cards;