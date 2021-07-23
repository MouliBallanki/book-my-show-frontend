import React from 'react'
import MovieInfo from '../MovieInfo/MovieInfo.component';
const MovieHero = () => {
    return (
        <>
            <div>
                {/* mobile */}
                <div className="relative md:hidden w-full" style={{height:"calc(180vw)"}}>
                    <div className="bg-black bg-opacity-60 absolute w-full h-56 z-10 bottom-0"/>

                    <div className="absolute z-20 bottom-4 left-4">
                        < MovieInfo/>
                    </div>
                    <img src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg" alt="moviepage_background" className="w-full h-full" />
                </div>

                {/* tablet */}
                <div className="hidden md:block lg:hidden relative" style={{height:"calc(100vw)"}}>
                    <div className="absolute z-20 bottom-4">
                        < MovieInfo/>
                    </div>
                    <div className="bg-black bg-opacity-60 absolute w-full h-56 z-10 bottom-0"/>
                    <img src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg" alt="moviepage_background" className="w-full h-full" />
                </div>

                {/* PC */}
                <div className="relative hidden lg:block" style={{height:"calc(40vw)"}}>
                    <div className="h-full w-full absolute z-10" 
                    style={{ 
                        backgroundImage:"linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)",}} 
                    />
                    
                    <div className="absolute z-20 flex left-14 top-20 items-center gap-8 ">
                        <div className="h-96 w-64  ">
                            <img src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg" alt="poster" className="w-full h-full rounded-xl"/>
                        </div>
                        <div>
                            < MovieInfo/>
                        </div>
                    </div>
                    
                    
                    <img src="https://in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg" alt="moviepage_background" className="h-full w-full"/>
                </div>
            </div>
        </>
    )
}

export default MovieHero
