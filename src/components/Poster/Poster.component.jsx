import React from 'react';
import {Link} from "react-router-dom";

const Poster = (props) => {
    return (
        <Link to={`movie/${props.id}`}>
                <div className=" flex flex-col px-2">
                    <div className="h-40 md:h-80">
                        <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt={props.original_title} className=" w-full h-full rounded-md md:rounded-xl" />
                    </div>
                    <h1 className={`text-lg font-bold ${props.isDark ? "text-white":"text-gray-700"}`}>
                        {props.original_title}
                    </h1>
                    <p className={`text-sm ${props.isDark ? "text-white":"text-gray-700"}`}>
                        {props.subtitle}
                    </p>
                </div>
        </Link>
    );
};

export default Poster;