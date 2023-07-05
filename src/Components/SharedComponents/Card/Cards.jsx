import React from "react";
import { useEffect,useState } from "react";
import Card from "./Card";
import "./Card.css";
import errorImage from  '../../../assets/Image/Main/QuestionGrey.png';
import {motion,AnimatePresence} from 'framer-motion';

function Cards({search,language}){

    const [posts,setPosts] = useState([]);

    let result = posts.filter((item) => {
        return language === '' &&  search.toLowerCase() === '' ? item : item.icon.toLowerCase().includes(language) &&  item.title.toLowerCase().includes(search);
    });

    useEffect(() => {
    fetch('http://localhost:4000/post').then(response => {
        response.json().then(posts => {
        setPosts(posts);
        });
    }).catch(error => {
        console.log('Error getting fake data: ' + error);
        });
    }, []);

    CalculateColor();

    function CalculateColor(){
        var initialColor =0;
        var ColorPallete=["#55efc4","#81ecec","#74b9ff","#a29bfe","#fab1a0","#fd79a8"];
         posts.forEach(element => {
                element.color = ColorPallete[initialColor];
                initialColor++;
                if(initialColor >= ColorPallete.length){
                    initialColor =0;
                }
        });
    }

return(
    <motion.div layout initial={{'opacity':0}} animate={{'opacity':1}}className="cards">
        <AnimatePresence>
            {result.length > 0 ?
                (result).map(post => (
                    <div className="cards-conteiner" key={post._id}>
                        <Card {...post}/>
                    </div>
                )):
                <motion.div initial={{'opacity':0}} animate={{'opacity':1}} transition={{'delay':0.2}} className="cards-error">
                    <img src={errorImage} alt="" />
                    <p>POST NO ENCONTRADO</p>
                </motion.div>
            }
        </AnimatePresence>
    </motion.div>
  );
}

export default Cards;