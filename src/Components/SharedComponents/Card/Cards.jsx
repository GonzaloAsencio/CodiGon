import React from "react";
import { useEffect,useState } from "react";
import Card from "./Card";
import "./Card.css";
import { faUnity} from "@fortawesome/free-brands-svg-icons";
import { faCode} from "@fortawesome/free-solid-svg-icons"
import errorImage from  '../../../assets/Image/Main/QuestionGrey.png';
import {motion,AnimatePresence} from 'framer-motion';
import MiniCard from "../MiniCard/index";
import Articles from '../ArticleList/index';

function Cards({search,language}){

    const [posts,setPosts] = useState([]);

    useEffect(() => {
    fetch('https://codigon.onrender.com/post').then(response => {
        response.json().then(posts => {
        setPosts(posts);
        });
    }).catch(error => {
        console.log('Error getting fake data: ' + error);
        });
    }, []);

    let result = posts.filter((item) => {
        return language === '' &&  search.toLowerCase() === '' ? item : item.icon.toLowerCase().includes(language) &&  item.title.toLowerCase().includes(search);
    });


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
    <>
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
                    <p>ARTÍCULO NO ENCONTRADO.</p>
                </motion.div>
            }
        </AnimatePresence>
    </motion.div>
    <div>
        <MiniCard lists={result}/>
    </div>
    <Articles title={'Artículos de Unity'} marker={faUnity} lists={posts.filter((item) => {
        return item.icon.toLowerCase().includes('unity');
    })}/>
     <Articles title={'Artículos de C#'} marker={faCode} lists={posts.filter((item) => {
        return item.icon.toLowerCase().includes('csharp');
    })}/>
    </>
  );
}

export default Cards;