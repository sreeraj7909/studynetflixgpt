
import Header from "./Header"
import {useGetAllMovies} from "../hooks/useGetAllMovies"
import MainContainer from "./MainContainer"
import SubConatiner from "./SubConatiner"
import GptSearch from "./GptSearch"
import { useSelector } from "react-redux"


const Browse=()=>{

   
   useGetAllMovies()

   const gptPage=useSelector((store)=>store.gpt.gptPage)
    
    return(
        <div>
            <Header/> 
            {gptPage ? <GptSearch/>:<><MainContainer/>
            <SubConatiner/></>}
            
            
            {/**
             * main Container
             *   -subcontainer
             *     -videoBagground 
             *     -Title
             * subcontainer
             *    -movielist*n
             *    -cards *n
             * 
             * 
             */

            }
        </div>
    )
}

export default Browse