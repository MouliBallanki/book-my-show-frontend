import React from "react";


import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";
import PosterSlider from '../components/PosterSlider/PosterSlider.component';

import TempImages from '../config/temp.posters.config';

const Homepage = () =>{
    return (
        <>
         <div className="flex flex-col gap-6 w-full">
            <div className="container flex flex-col gap-3 flex-start mx-auto px-10 my-4 w-full">
                <h1 className=" w-full text-xl md:text-2xl font-bold">The best of Entertainment</h1>
                <EntertainmentCardSlider  />
            </div>
            <div className="bg-premiere-700 w-full flex flex-col gap-16 py-6">
                <div className="container mx-auto px-10 flex flex-col gap-10">
                    <div className="h-16 px-2">
                        <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="rupay" />
                    </div>
                </div>
                <div className="container mx-auto px-10">
                    <div className="flex flex-col px-2 py-2 md:px-3">
                            <h1 className="text-white text-2xl font-bold">Premieres</h1>
                            <p className="text-white text-md font-semi-bold">Brand new realeses every day</p>
                    </div>
                    <PosterSlider images={TempImages} isDark/>
                </div>

                
            </div>

            <div className="container mx-auto px-10">
                    <div className="flex flex-col px-2 md:px-3 py-2">
                            <h1 className="text-gray-700 text-2xl font-bold">Outdoor Events</h1>
                    </div>
                    <PosterSlider images={TempImages} isDark={false}/>
            </div>

            <div className="container mx-auto px-10 ">
                    <div className="flex flex-col px-2 py-2 md:px-3">
                            <h1 className="text-gray-700 text-2xl font-bold">Online Streaming Events</h1>
                    </div>
                    <PosterSlider images={TempImages} isDark={false}/>
            </div>
         </div>
         
        </>
    );
}
export default Homepage;