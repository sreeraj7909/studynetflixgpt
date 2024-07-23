import VideoCard from "./VideoCard";

const VideoList=({title,movies})=>{
    if(!movies) return
    return(
        <div className="pt-6 md:px-14 px-0">
        <h1 className="px-4 text-white font-bold md:text-2xl">{title}</h1>
        <div className="flex overflow-x-scroll scrollbar-hide">
           
           <div className="flex">
               {
                movies.map((movies)=><VideoCard key={movies.id} poster_path={movies.poster_path}/>)
               }
           </div>
        </div>
      </div>
    )
}

export default VideoList;