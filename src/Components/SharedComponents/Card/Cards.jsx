import React from "react";
import { useEffect,useState } from "react";
import Card from "./Card";
import "./Card.css";
import {motion,AnimatePresence} from 'framer-motion';

function Cards({search,language}){

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
    <motion.div initial={{'opacity':0}} animate={{'opacity':1}}className="cards">
        <AnimatePresence>
        {posts.filter((item) =>{
            return  language === '' &&  search.toLowerCase() === '' ? item : item.icon.toLowerCase().includes(language) &&  item.title.toLowerCase().includes(search);
        }).map(post => (
            <div className="cards-conteiner" key={post._id}>
                <Card {...post}/>
            </div>
        ))}
        </AnimatePresence>
    </motion.div>
  );
}

export default Cards;