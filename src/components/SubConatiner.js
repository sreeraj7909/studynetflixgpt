import { useSelector } from "react-redux"
import VideoList from "./VideoList"

const SubContainer=()=>{
    const nowPlaying=useSelector((store)=>store.movie?.nowPlayingMovies)
    const popularMovies=useSelector((store)=>store.movie?.popularMovies)
    const topRatedMovies=useSelector((store)=>store.movie?.topRatedMovies)
    const upComing=useSelector((store)=>store.movie?.upComing)
    return (
        <div className="bg-black ">
          <div className="relative z-30 -mt-12 md:-mt-80">
            <VideoList title={"Now Playing Movies"} movies={nowPlaying}/>
            <VideoList title={"Popular Movies"} movies={popularMovies}/>
            <VideoList title={"Top Rated Movies"} movies={topRatedMovies}/>
            <VideoList title={"Up Coming Movies"} movies={upComing}/>
          </div>
        </div>
    )
}

export default SubContainer