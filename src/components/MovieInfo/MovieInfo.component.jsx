import React,{useContext} from 'react';

// context
import { MovieContext } from '../../Context/Movie.context';

const MovieInfo = () => {
    const { movie } = useContext(MovieContext);
    // optional chianing
    const genres = movie.genres?.map(({name}) => name).join(", ");
    return (
        <>
            <div className="flex flex-col gap-6 items-start">
                <div className="flex items-center gap-3 md:px-4">
                    <div className="h-6 w-28 ">
                        <img src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png" alt="premiere" className="h-full w-full h-full"/>
                    </div>
                    <span className="bg-premiere-700 text-white text-xs  rounded-md">Streaming Now</span>
                </div>
                <h1 className="hidden lg:block text-4xl text-white font-bold md:px-4">{movie.title}</h1>
                <div className="flex flex-col flex-col-reverse lg:flex-col gap-4">
                    <div className="text-white font-light flex flex-col gap-4 md:px-4">
                        <p> 4K &bull; {movie.original_language}</p>
                        <p>{(movie.runtime/60).toFixed(2)} h &bull;{genres} &bull;16+ </p>

                    </div>
                    <div className="text-white flex gap-2 lg:gap-4 md:w-screen md:px-4 lg:w-full">
                        <button className="bg-butcolor-600 w-full py-3  rounded-lg font-semibold">Rent ₹149</button>
                        <button className="bg-butcolor-600 w-full py-3  rounded-lg font-semibold">Buy ₹689</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieInfo;
