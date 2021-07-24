import React from "react";
import HeroSlider from "react-slick";


import { NextArrow,PrevArrow } from "./Arrows.component";

const HeroCorousel = () =>{
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
    

    const images = [
        "https://in.bmscdn.com/promotions/cms/creatives/1625077257492_dearishqafestivalofkisseykahaniyaanpoetry_webshowcase_1280x500.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1625559967524_bsm_1280x500_romcom.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1625685026902_joboltahaiwohihotahaifeatharshgujral_webshowcase_1280x500.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1626065541062_spanishbundle1280x500ios.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1626516962069_honestthief_1280x500_ios.jpg",
      ];

    return (
        <>
            <div className="lg:hidden ">
                <HeroSlider {...settings}>
                    {
                        images.map((image) => (
                            <div className="w-full h-56 md:h-80 py-2">
                                <img src={image} alt="testing" className="w-full h-full rounded-md"/>
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
                                <img src={image} alt="testing" className="w-full h-full rounded-md"/>
                            </div>
                        ))
                    }

                </HeroSlider>
            </div>
        </>
    );
};

export default HeroCorousel;