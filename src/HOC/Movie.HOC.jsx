import React from "react";
import { Route } from "react-router-dom";

// layout
import MovieLayout from "../layouts/Movie.layout";

const MovieHoc = ({component:Component ,...rest}) =>{
    return(
        <>
            <Route 
            {...rest}
            component={(props) =>(
                <MovieLayout>
                    <Component {...props}/>
                </MovieLayout>
            )}
            />
        </>
    );
};
export default MovieHoc;