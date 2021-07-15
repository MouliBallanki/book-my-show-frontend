import React from "react";
import HeroSlider from "react-slick";

// css files for slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCorousel = () =>{
    const settings = {
        arrows:true,
        centerMode:true,
        centerPadding:"200px",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    const images = [
        "https://in.bmscdn.com/promotions/cms/creatives/1625077257492_dearishqafestivalofkisseykahaniyaanpoetry_webshowcase_1280x500.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1625559967524_bsm_1280x500_romcom.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1625685026902_joboltahaiwohihotahaifeatharshgujral_webshowcase_1280x500.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1626065541062_spanishbundle1280x500ios.jpg",
        "https://images.unsplash.com/photo-1511875762315-c773eb98eec0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bW92aWUlMjBwb3N0ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
      ];

    return (
        <>
            <HeroSlider {...settings}>
                {
                    images.map((image) => (
                        <div className="w-20 h-80">
                            <img src={image} alt="testing" className="w-full h-full"/>
                        </div>
                    ))
                }

            </HeroSlider>
        </>
    );
};

export default HeroCorousel;