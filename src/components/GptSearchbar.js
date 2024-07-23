import { useSelector } from "react-redux";
import { lagnuageConstant } from "../utils/languageConstant";
import groq from "../utils/openai";
import { options } from "../utils/constants";
import { useRef } from "react";
import { addgptSuggesionMovies } from "../utils/gptSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const GptSearchbar=()=>{
     
    const langKey=useSelector((store)=>store.config?.lang)
    const dispatch=useDispatch()
    const searchText=useRef(null)
    const navigate=useNavigate()


    const getMovieResults=async(movie)=>{
     try {const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', options)
      const json=await data.json()
      return json.results;}
      catch(error){console.log(error)}
    }

    const handleGptResult=async()=>{
       try{ const content=searchText.current.value
        const gptQuery="Act as a movie Recommendation system and suggest some movie for the query:"+content+"only give me name of five movies, comma seperated like the example result given ahead. Example Result:Jaws,Her,Up,Elf,it. only show the name of the movies do not mention any thing apart from the movies";
        const gptSearchResult= await groq.chat.completions.create({
            messages: [
              {
                role: "user",
                content: gptQuery,
              },
            ],
            model: "llama3-8b-8192",
          });
        const gptMovies=(gptSearchResult.choices[0]?.message?.content || "")
        const movieArray=gptMovies.split(',')
        
        const promiseArry=movieArray.map((movie)=>getMovieResults(movie))
        const tmdbResults=await Promise.all(promiseArry)
        dispatch(addgptSuggesionMovies({movies:gptMovies,gptResult:tmdbResults}))
        
        
}catch(error)
{console.log("Api call Failed"+error)}
               navigate("/error")
    }
    
    return (
        <div>
            
        <div className="md:pt-[10%] -mt-6   md:-mt-52 flex justify-center">
        <form className="bg-black w-3/4 md:w-1/2 grid grid-cols-12 rounded-lg " onSubmit={(e)=>e.preventDefault()}>
            <input  className="md:p-4 md:m-4 p-3 m-3  rounded-lg col-span-9" type="text" placeholder={lagnuageConstant[langKey]?.gptSearchText} ref={searchText}></input>
            <button className="md:py-4 md:px-3 md:m-4 m-3 py-3  bg-red-700 text-white rounded-lg col-span-3" onClick={handleGptResult}>{lagnuageConstant[langKey]?.search}</button>
        </form>
     </div>
    </div>
    )
}
export default GptSearchbar;