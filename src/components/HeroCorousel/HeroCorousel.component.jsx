import React,{useState , useEffect} from "react";
import HeroSlider from "react-slick";

import axios from "axios";

import { NextArrow,PrevArrow } from "./Arrows.component";

const HeroCorousel = () =>{
    const [images,setImages] = useState([]);

    useEffect(() =>{
        const requestNowPlayingMovies = async ()=>{
            const getImages = await axios.get("/movie/now_playing");
            setImages(getImages.data.results);
        }
        requestNowPlayingMovies();
    },[])
    const settingsLG = {

        arrows:true,
        autoplay:true,
        centerMode:true,
        centerPadding:"300px",
        slidesToScroll:1,
        slidesToShow:1,
        infinite:true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow/>,
        
    };
    const settings = {
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
    };
    

    return (
        <>
            <div className="lg:hidden ">
                <HeroSlider {...settings}>
                    {
                        images.map((image) => (
                            <div className="w-full h-56 md:h-80 py-2">
                                <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-full rounded-md"/>
                            </div>
                        ))
                    }

                </HeroSlider>
            </div>

            <div className="hidden lg:block ">
                <HeroSlider {...settingsLG}>
                    {
                        images.map((image) => (
                            <div className="w-20 h-80 px-1 py-3 ">
                                <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-full rounded-md"/>
                            </div>
                        ))
                    }

                </HeroSlider>
            </div>
        </>
    );
};

export default HeroCorousel;