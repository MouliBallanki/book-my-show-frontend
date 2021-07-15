import React from "react";
import { Route } from "react-router-dom";

// layout
import DefaultLayout from "../layouts/Default.layout";

const DefaultHoc = ({component:Component ,...rest}) =>{
    return(
        <>
            <Route 
            {...rest}
            component={(props) =>(
                <DefaultLayout>
                    <Component {...props}/>
                </DefaultLayout>
            )}
            />
        </>
    );
};
export default DefaultHoc;