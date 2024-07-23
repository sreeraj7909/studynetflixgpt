import { useSelector } from "react-redux";
import useGetMovieTrailer from "../hooks/useGetMovieTrailer";

const VideoBackground=({movieId})=>{
   
   
    const trailerVideo=useSelector((store)=>store.movie.trailerVideo)
    useGetMovieTrailer(movieId)
   
   return(
        <div className="w-screen">
         <iframe    className="w-screen h-auto aspect-video" width="560" height="315"  src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&rel=0&controls=0&mute=1&loop=1&modestbranding=1&playlist="+trailerVideo?.key}title="YouTube video player" 
         allow="autoplay=1 accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
    )
}

export default VideoBackground;