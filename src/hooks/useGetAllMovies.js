import {addnowPlayingMovies,addPopularMovies,addTopRatedMovies,addUpComingMovies} from "../utils/movieSlice"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { options } from "../utils/constants"
import { useNavigate } from "react-router-dom"

 export const useGetAllMovies=()=>{

    const nowPlaying=useSelector((store)=>store.movie?.nowPlayingMovies) 
    const popular=useSelector((store)=>store.movie?.popularMovies) 
    const topRated=useSelector((store)=>store.movie?.topRatedMovies) 
    const upComing=useSelector((store)=>store.movie?.upComing) 
    const navigate=useNavigate()
    const dispatch=useDispatch()
    
    useEffect(()=>{
      !nowPlaying && getNowPlayingMovies()
      !popular && getPopularMovies()
      !topRated && getTopRatedMovies()
      !upComing && getUpComingMovies()
    },[])

    const getNowPlayingMovies=async()=>{
         try{const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',options)
         const json=await data.json()
         const nowPlaying=json.results
         dispatch(addnowPlayingMovies(nowPlaying))}
         catch(error){
          console.error('API call failed:', error);
          navigate('/error');
         }
    }
    const getPopularMovies=async()=>{
        try{const data=await fetch('https://api.themoviedb.org/3/movie/popular?page=1',options)
        const json=await data.json()
        const popularMovies=json.results
        dispatch(addPopularMovies(popularMovies)) }
        catch(error){
          console.error('API call failed:', error);
          navigate('/error');
        }
   }
    const getTopRatedMovies=async()=>{
        try{const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',options)
        const json=await data.json()
        const topRatedMovies=json.results
        dispatch(addTopRatedMovies(topRatedMovies))}
        catch(error){
          console.error('API call failed:', error);
          navigate('/error');
        }
   }
    const getUpComingMovies=async()=>{
        try{const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',options)
        const json=await data.json()
        const upComingMovies=json.results
        dispatch(addUpComingMovies(upComingMovies))}
        catch(error){
          console.error('API call failed:', error);
          navigate('/error');
        }
   }


}

