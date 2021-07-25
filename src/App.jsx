import React from "react";

// Axios
import axios from "axios";

// Router
import { Route } from "react-router-dom";

// HOC
import DefaultHoc from "./HOC/Default.HOC";

// css files for slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Pages
import Homepage from './pages/Home.page'
import Movie from "./pages/Movie.page";
import Plays from "./pages/Plays.page";

// Hoc
import MovieHoc from "./HOC/Movie.HOC";

// axois defaults
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params ["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
      <DefaultHoc path="/" exact component={Homepage} />
      <MovieHoc path="/movie/:id" exact component={Movie} />
      <DefaultHoc path="/plays" exact component={Plays} />
  
    </>
  );
}

export default App;
