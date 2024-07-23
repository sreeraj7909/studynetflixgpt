import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle"

const MainContainer=()=>{
    const movies=useSelector((store=>store.movie?.nowPlayingMovies))
    if(!movies) return;
    const oneMovie=movies[0]
    const {original_title,overview,id}=oneMovie
    return(
        <div className="md:pt-0 pt-28 bg-black">
          <VideoTitle title={original_title} overview={overview}/>
          <VideoBackground movieId={id}/>
        </div>
    )
}

export default MainContainer