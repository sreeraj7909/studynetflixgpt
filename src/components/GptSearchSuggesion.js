import { useSelector } from "react-redux";
import VideoList from "./VideoList";

const GptSearchSuggesion=()=>{

   const movieNames=useSelector((store)=>store.gpt?.gptMovieList)
   const moviesResult=useSelector((store)=>store.gpt?.gptSuggessionMovies)
   
  
    
   if(!moviesResult) return
   const movieName=movieNames.split(',')

    return (
        <div className="p-2 m-2 bg-black text-white mt-8">
             {
                movieName.map((movies,index)=><VideoList key={movies} title={movies} movies={moviesResult[index]} />)
             }
        </div>
    )
}

export default GptSearchSuggesion;