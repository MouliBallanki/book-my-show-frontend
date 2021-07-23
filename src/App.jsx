import React from "react";

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
