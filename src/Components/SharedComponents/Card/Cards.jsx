import React from "react";
import { useEffect,useState } from "react";
import Card from "./Card";
import "./Card.css";

function Cards({search}){

    const [posts,setPosts] = useState([]);
    useEffect(() => {
    fetch('http://localhost:4000/post').then(response => {
        response.json().then(posts => {
        setPosts(posts);
        });
    });
    }, []);

    CalculateColor();

    function CalculateColor(){
        var initialColor =0;
        var ColorPallete=["#55efc4","#81ecec","#74b9ff","#fab1a0","#ff7675","#fd79a8"];
         posts.forEach(element => {
                element.color = ColorPallete[initialColor];
                initialColor++;
                if(initialColor >= ColorPallete.length){
                    initialColor =0;
                }
        });
    }
//ME FALTA CONFIGURAR PARA CUANDO HAGAN CLICK EN UNITY O CSH
return(
    <div className="cards">
        {posts.filter((item) =>{
            return search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search);
        }).map(post => (
            <div className="cards-conteiner" key={post._id}>
                <Card {...post}/>
            </div>
        ))}
    </div>
  );
}

export default Cards;