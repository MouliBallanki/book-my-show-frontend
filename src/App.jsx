import React from "react";

import { Route } from "react-router-dom";

// HOC
import DefaultHoc from "./HOC/Default.HOC";

// components
import Temp from "./components/Temp";
function App() {
  return (
    <>
      <DefaultHoc path="/" exact component={Temp} />
    </>
  );
}

export default App;
