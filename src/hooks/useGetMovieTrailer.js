import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTrailerVideo } from "../utils/movieSlice"
import { options } from "../utils/constants"
import { useNavigate } from "react-router-dom"

const useGetMovieTrailer=(movieId)=>{
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const trailer=useSelector((store)=>store.movie?.trailerVideo)

    useEffect(()=>{
        !trailer &&
         getMovieTriler()
    },[])

    const getMovieTriler=async ()=>{
        try{
        const data=await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",options)
        const json=await data.json()
        const filterData=json.results.filter((video)=>video.type==="Trailer")
        const trailer=filterData.legth ? filterData[0] :json?.results[0]
        dispatch(addTrailerVideo(trailer))
        
    }catch(error){
        console.log("Api call failed"+error)}
        navigate("/error")
    }
   
}
export default useGetMovieTrailer;