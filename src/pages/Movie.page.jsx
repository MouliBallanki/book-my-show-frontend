import React,{useContext} from 'react'
import {FaCcVisa} from "react-icons/fa"
import MovieHero from '../components/MovieHero/MovieHero.component'
import Cast from '../components/Cast/Cast.component';
import PosterSlider from '../components/PosterSlider/PosterSlider.component';

import TempImages from '../config/temp.posters.config';
// context
import { MovieContext } from '../Context/Movie.context';
const Movie = () => {
    const { movie } = useContext(MovieContext);
    const settings = {
        infinite: false,
        dots:false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 2,
    
              
            },
          },
        ],
      };


    return (
        <>
           <MovieHero />
           <div className="container px-4 lg:ml-10 py-8 lg:w-3/4">
                <div className="flex flex-col gap-4">
                    <h2 className="text-gray-800 font-bold text-2xl"> About the movie</h2>
                    <p>{movie.overview}</p>
                </div>
                <div className="mt-8">
                    <hr />
                </div>


                <div className="text-gray-800">
                    <h1 className=" text-lg font-bold py-4">Applicable Offers</h1>
                </div>
                <div className="flex flex-col gap-2 lg:flex-row mb-8">
                    <div className="bg-yellow-100 rounded-md px-2 py-2 border-yellow-200 border-2 border-dashed ">
                        <div className="flex gap-4 ">
                            <div className="h-11 w-11">
                                < FaCcVisa className="w-full h-full "/>
                            </div>
                            <div className="flex flex-col ">
                                <h2 className="text-gray-800 text-xl font-semibold">Visa Sream Offer</h2>
                                <p className="text-gray-500">get 50% off upto INR 150 on all VISA cards* on bookmyshow stream</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-yellow-100 rounded-md px-2 py-2 border-yellow-200 border-2 border-dashed ">
                        <div className="flex gap-4 ">
                            <div className="h-11 w-11">
                                < FaCcVisa className="w-full h-full "/>
                            </div>
                            <div className="flex flex-col ">
                                <h2 className="text-gray-800 text-xl font-semibold">Visa Sream Offer</h2>
                                <p className="text-gray-500">get 50% off upto INR 150 on all VISA cards* on bookmyshow stream</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    <hr />
                </div>

                <div className="text-gray-800 text-lg font-bold">Cast & Crew</div>
                <div className="my-2 flex flex-wrap gap-4 ">
                    <Cast 
                    src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ben-affleck-292-12-09-2017-05-12-16.jpg"
                    title="Ben Affleck"
                    role="ACTOR"
                    />
                    <Cast 
                    src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/henry-cavill-23964-04-05-2020-04-25-14.jpg"
                    title="Henry Cavill"
                    role="ACTOR"
                    />
                    <Cast 
                    src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/gal-gadot-11088-17-10-2017-11-45-36.jpg"
                    title="Gal Gadot"
                    role="ACTOR,Director"
                    />
                    <Cast 
                    src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ray-fisher-1072729-17-10-2017-12-14-18.jpg"
                    title="Ray Fisher"
                    role="ACTOR"
                    />
                </div>

                <div className="mt-8">
                    <hr />
                </div>

                <div className="mb-8">
                    <div className="flex flex-col px-2 md:px-3 py-2">
                                <h1 className="text-gray-700 text-xl font-bold">You might also like</h1>
                    </div>
                    <PosterSlider config={settings} images={TempImages} isDark={false}/>
                </div>

                <div>
                    <div className="flex flex-col px-2 md:px-3 py-2">
                                <h1 className="text-gray-700 text-xl font-bold">BMS XCLUSIVE </h1>
                    </div>
                    <PosterSlider config={settings} images={TempImages} isDark={false}/>
                </div>
           </div>
           
        </>
    )
}

export default Movie;
