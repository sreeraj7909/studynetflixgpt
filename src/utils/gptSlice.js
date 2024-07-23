import { createSlice } from "@reduxjs/toolkit";


const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        gptPage:false,
        gptSuggessionMovies:null,
        gptMovieList:null
    },
    reducers:{
        toggleGptPage:(state)=>{
           state.gptPage=!state.gptPage  
        },
        addgptSuggesionMovies:(state,action)=>{
            const {movies,gptResult}=action.payload
            state.gptSuggessionMovies=gptResult
            state.gptMovieList=movies
        }
    }
})

export default gptSlice.reducer;
export const {toggleGptPage,addgptSuggesionMovies}=gptSlice.actions