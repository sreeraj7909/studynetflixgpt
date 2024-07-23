import { BG_IMG_URL } from "../utils/constants";
import GptSearchbar from "./GptSearchbar";
import GptSearchSuggesion from "./GptSearchSuggesion";
const GptSearch=()=>{
    return (
        <div>
             <div className=" fixed -z-10  ">
                <img className="h-screen md:w-screen md:h-screen object-cover" src={BG_IMG_URL} alt="loginbg"></img>
            </div>
            <div className="pt-52">
               <GptSearchbar/>
               <GptSearchSuggesion/>
            </div>
            
            
        </div>
    )
}

export default GptSearch;