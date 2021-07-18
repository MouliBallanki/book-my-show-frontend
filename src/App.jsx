import React from "react";

import { Route } from "react-router-dom";

// HOC
import DefaultHoc from "./HOC/Default.HOC";

// css files for slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// homepage
import Homepage from './pages/Home.page'
function App() {
  return (
    <>
      <DefaultHoc path="/" exact component={Homepage} />
    </>
  );
}

export default App;
