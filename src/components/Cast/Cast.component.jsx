import React from 'react'

const Cast = (props) => {
    return (
        <div className="flex flex-col items-center">
            <div className="h-32 w-32">
                <img src={props.src} alt="cast"  className="w-full h-full rounded-full" />
            </div>
            <h2 className="text-lg">{props.title}</h2>
            <p className="text-gray-600  text-xs">{props.role}</p>
        </div>
    )
}

export default Cast;
