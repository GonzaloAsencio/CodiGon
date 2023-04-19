import {useState,useEffect} from "react";
import './Carousel.css';
import styled from "styled-components";

const CarouselImg= styled.img`
width: 100%;
height:auto;
opacity:0;
transition:1s;
&.loaded {
    opacity:1;
}
`;

export default function Carousel (){
    const images = ['progrmacion.png','sc2ng.png']
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage,setSelectedImage] = useState(images[0]);
    const [loaded, setLoaded] = useState(false);

    const selectNewImage = (index, images, next= true) => {
        setLoaded(false);
        setTimeout(() => {
            const condition = next ? selectedIndex < images.length -1: selectedIndex > 0;
            const nextIndex = next ? (condition ? selectedIndex +1 :0) : condition ? selectedIndex -1: images.length -1;
            setSelectedImage(images[nextIndex]);
            setSelectedIndex(nextIndex);
        }, 250);
    };

    useEffect(() => {
        const interval = setInterval(()=> {
            selectNewImage(selectedIndex,images);
        },3000);
        return ()=> clearInterval(interval);
    });

    const previous = () => {
      selectNewImage(selectedIndex, images, false);
    };

    const next = () => {
        selectNewImage(selectedIndex, images, true);
    }
    return (
        <div  className="carouselConteiner">
            <CarouselImg
            src={require(`../../../assets/Image/Main/${selectedImage}`)}
            alt=""
            className={loaded ? "loaded" : ""}
            onLoad={()=>setLoaded(true)}
            />
            <div className="carouselButtonConteiner">
                <button onClick={previous}>{"<"}</button>
                <button onClick={next}>{">"}</button>
            </div>
        </div>
    );
}