import React ,{useContext } from "react";
import { BiShareAlt,BiSearch,BiChevronDown,BiMenu } from "react-icons/bi";
// context
import { MovieContext } from "../../Context/Movie.context";
const NavSm = () =>{
    const {movie} = useContext(MovieContext);
    return (
        <div className="flex items-center justify-between w-full">
            <div>
                <h3 className="text-white font-bold text-2xl">{movie.original_title}</h3>
            </div>
            <div className="w-8 h-8">
                <BiShareAlt className="w-full h-full text-white"/>
            </div>
        </div>
    );
}

const NavLg = () =>{
    return (
        <div className="container mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center gap-6 w-full">
                <div className="w-12 h-12">
                    <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" alt="logo" className="w-full h-full"/>
                </div>
                <div className=" h-9 flex items-center gap-3 bg-white rounded-md w-3/5">
                    <BiSearch />
                    <input type="search" placeholder="Search for movies, events, plays, Sports, Activities ."className="w-full h-full bg-transparent border-none focus:outline-none rounded"/>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div>
                    <span className="text-gray-200 text-sm flex items-center hover:text-white cursor-pointer">Bengaluru <BiChevronDown/></span>
                </div>
                <div className="w-16">
                    <button className="bg-butcolor-300 text-xs text-white  py-1 rounded w-full">Sign in</button>
                </div>
                <div className="h-8 w-8 text-white">
                    <BiMenu className="h-full w-full"/>
                </div>
            </div>
        </div>

    );
}

const MovieNavbar = () =>{
    return (
        <>
            <nav className="absolute inset-x-0 bg-opacity-50 z-30 backdrop-filter backdrop-blur-lg lg:relative lg:bg-bms-700 p-2">
                <div className="md:hidden ">
                    {/* mobile screen */}
                    <NavSm />
                </div>

                <div className="hidden md:block  lg:hidden">
                    {/* medium screen */}
                    <NavSm />
                </div>

                <div className="hidden lg:block ">
                    {/* PC screen */}
                    <NavLg />
                </div>
            </nav>
        </>
    );


};

export default MovieNavbar;