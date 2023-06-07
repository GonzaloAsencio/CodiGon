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

return(
    <div className="cards">
        {posts.length > 0 && posts.map(post => (
            <div className="cards-conteiner" key={post._id}>
                <Card {...post}/>
            </div>
        ))}
    </div>
  );
}

export default Cards;