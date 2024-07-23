import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        topRatedMovies:null,
        upComing:null,
        trailerVideo:null
    },
    reducers:{
        addnowPlayingMovies:(state,action)=>{
           state.nowPlayingMovies=action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload
         },
         addTopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload
         },
         addUpComingMovies:(state,action)=>{
           state.upComing=action.payload
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload
        }
    }

})

export const{addnowPlayingMovies,addPopularMovies,addTopRatedMovies,addUpComingMovies,addTrailerVideo}=movieSlice.actions
export default movieSlice.reducer;