import React from 'react'

const Poster = (props) => {
    return (
        <>
                <div className=" flex flex-col px-2">
                    <div className="h-40 md:h-80">
                        <img src={props.src} alt={props.title} className=" w-full h-full rounded-md md:rounded-xl" />
                    </div>
                    <h1 className={`text-lg font-bold ${props.isDark ? "text-white":"text-gray-700"}`}>
                        {props.title}
                    </h1>
                    <p className={`text-sm ${props.isDark ? "text-white":"text-gray-700"}`}>
                        {props.subtitle}
                    </p>
                </div>
        </>
    );
};

export default Poster;