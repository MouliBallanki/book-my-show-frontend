import React from "react";

import Slider from "react-slick";

const EntertainmentCard = (props) =>{
    return (
        <>
                <div className="w-full  px-2 ">
                    <img src={props.src} alt="entertainment" className="w-full h-full rounded-xl"/>
                </div>
        </>
    );
};

const EntertainmentCardSlider = () =>{
    
    const EntertainmentImages = [
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjM1KyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png",

        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/fitness-collection-2020081150.png",

        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/kids-collection-202007220710.png",

        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTA1KyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/comedy-shows-collection-202007220710.png",

        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NCBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/music-shows-collection-202007220710.png",

        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/esports-collection-202011150107.png",

        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/self-improvement-collection-202007220710.png",

        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MSBFdmVudA%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/food-n-drinks-collection-202010061250.png",

        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NSBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/interactive-games-collection-202012041129.png"
    ];

    const settings = {

        slidesToScroll:4,
        slidesToShow:5,
        infinite:false,
        IntialSlide:0,
        infinite:true,
        resposive:[
            {
                breakpoints:1024,
                settings :{
                    slidesToShow:3,
                    slidesToScroll:2,
                    infinite:true,
                    
                },
            },
            {
                breakpoints:768,
                settings :{
                    slidesToShow:2,
                    slidesToScroll:1,
                    IntialSlide:1,
                },
            },

            {
                breakpoints:640,
                settings :{
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinite:true,
                },
            },

        ]
        
    };
    return (
        <>
            
            <Slider {...settings}>
                {
                    EntertainmentImages.map((image) => (
                        <EntertainmentCard src={image}/>
                    ))
                }
            </Slider>
        </>
    );
};

export default EntertainmentCardSlider;