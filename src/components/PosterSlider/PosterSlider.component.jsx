import React from "react";
import Slider from "react-slick";

import Poster from "../Poster/Poster.component";
 
// config
import PosterCorouselSettings from '../../config/PosterCorousel.config';

const PosterSlider = (props) => {
    const SliderConfig = props.config ? props.config: PosterCorouselSettings;
    return (
        <>  
        
            <Slider {...SliderConfig}>
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
