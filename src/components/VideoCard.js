import { POSTER_CDN_URL } from "../utils/constants";

const VideoCard=({poster_path})=>{
    if(!poster_path) return "poster is not availeble🥲";
    return(
        <div className="md:w-48 md:p-2 md:m-2 p-1 m-1 w-36">
           <img alt="Movie Poster" src={POSTER_CDN_URL+poster_path}></img>
        </div>
    )
}

export default VideoCard;