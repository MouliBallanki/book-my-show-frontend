import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FaCcVisa } from "react-icons/fa"
import MovieHero from '../components/MovieHero/MovieHero.component'
import Cast from '../components/Cast/Cast.component';
import PosterSlider from '../components/PosterSlider/PosterSlider.component';
import Slider from 'react-slick';
import TempImages from '../config/temp.posters.config';
// context
import { MovieContext } from '../Context/Movie.context';
const Movie = () => {
    const { id } = useParams();
    const { movie } = useContext(MovieContext);
    const [cast, setCast] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);
    const [recommended, setRecommended] = useState([]);


    useEffect(() => {
        const requestCast = async () => {
            const getCast = await axios.get(`/movie/${id}/credits`);
            setCast(getCast.data.cast);
        }
        requestCast();
    }, [id])

    useEffect(() =>{
        const requestsimilarMovies = async () => {
            const getsimilarMovies = await axios.get(`/movie/${id}/similar`);
            setSimilarMovies(getsimilarMovies.data.results)
    
        }
        requestsimilarMovies();
    },[id])

    useEffect(() =>{
        const requestRecommendedMovies = async () => {
            const getRecommendedMovies = await axios.get(`/movie/${id}/recommendations`);
            setRecommended(getRecommendedMovies.data.results)
    
        }
        requestRecommendedMovies();
    },[id])

    const settings = {
        infinite: false,
        dots: false,
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
    const cast_settings = {
        infinite: false,
        dots: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
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
                                < FaCcVisa className="w-full h-full " />
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
                                < FaCcVisa className="w-full h-full " />
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

                <Slider {...cast_settings}>
                        {
                            cast.map((castdata) => (
                                <Cast
                                    src={`https://image.tmdb.org/t/p/original${castdata.profile_path}`}
                                    title={castdata.original_name}
                                    role={castdata.character}
                                />
                            ))
                        }
                </Slider>


                <div className="mt-8">
                    <hr />
                </div>

                <div className="mb-8">
                    <div className="flex flex-col px-2 md:px-3 py-2">
                        <h1 className="text-gray-700 text-xl font-bold">You might also like</h1>
                    </div>
                    <PosterSlider config={settings} images={similarMovies} isDark={false} />
                </div>

                <div>
                    <div className="flex flex-col px-2 md:px-3 py-2">
                        <h1 className="text-gray-700 text-xl font-bold">BMS XCLUSIVE </h1>
                    </div>
                    <PosterSlider config={settings} images={recommended} isDark={false} />
                </div>
            </div>

        </>
    )
}

export default Movie;
