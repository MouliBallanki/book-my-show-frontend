import React from "react";
import Slider from "react-slick";

import Poster from "../Poster/Poster.component";
 
// config
import PosterCorouselSettings from '../../config/PosterCorousel.config';

const PosterSlider = (props) => {
    return (
        <>  
        
            <Slider {...PosterCorouselSettings}>
                {
                    props.images.map((image) => (
                        <Poster {...image} isDark={props.isDark} />
                    ))
                }
            </Slider>
        </>
    )
}

export default PosterSlider;
