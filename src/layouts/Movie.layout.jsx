import React from 'react'

import Navbar from "../components/Navbar/navbar.component";
import MovieNavbar from '../components/Navbar/Movie.navbar.component';
const MovieLayout = (props) => {
    return (
        <>
            <MovieNavbar />
            {props.children}
        </>
    );
}

export default MovieLayout;
