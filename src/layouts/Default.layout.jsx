import React from "react";

// Navbar
import Navbar from "../components/Navbar/navbar.component";

// herocorousel
import HeroCorousel from "../components/HeroCorousel/HeroCorousel.component";

const DefaultLayout = (props) => {
    return (
        <>
            <Navbar/>
            <HeroCorousel />
            {props.children}
        </>
    );
};

export default DefaultLayout;