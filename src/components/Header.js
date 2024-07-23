import { onAuthStateChanged } from "firebase/auth";
import { LOGO_URL } from "../utils/constants";
import { useEffect } from "react";
import {auth} from "../utils/firebase"
import { useDispatch, useSelector } from "react-redux";
import { addUser,removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { toggleGptPage } from "../utils/gptSlice";
import { signOut } from "firebase/auth";
import { USER_AVTR } from "../utils/constants";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header=()=>{

    const dispatch=useDispatch()
    const navigate=useNavigate()
    const user=useSelector((store)=>store.user)
    const isGpt=useSelector((store)=>store.gpt?.gptPage)
    

    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth,(user)=>{
          if(user){
              const {uid,email,displayName}=user
              dispatch(addUser({uid:uid,email:email,name:displayName}))
              navigate("/browse")
          }
          else{
              dispatch(removeUser())
              navigate("/")
          }
        })
        return ()=>unsubscribe()
      },[])

    const handleSignout=()=>{
        
        signOut(auth).then(() => {
           console.log("Sign out successfully")
          }).catch((error) => {
            console.log("faliled to signout")
          });
    }  

    const handleGptSearch=()=>{
           dispatch(toggleGptPage())

    }
    const handleLangChange=(e)=>{
        dispatch(changeLanguage(e.target.value))
    }


    return(
        <div className="absolute bg-gradient-to-b from-black z-10 flex   items-center justify-between flex-col w-full md:flex-row">
              <img className="md:w-64 mx-16 w-48"
              src={LOGO_URL} alt="logo"></img>
           
          
            <div className="flex items-center md:mx-14 ">
              { user && <button className="md:p-3 md:font-bold md:m-3 md:mx-14 p-1 m-1 mx-5    bg-purple-700 text-white  rounded-lg" onClick={handleGptSearch}>{isGpt?"Home":"Gpt Search"}</button>}
              {user && <img className="md:w-12 md:h-12 w-8 h-8 " src={USER_AVTR} alt="user ICon"></img>}
             
              { user && <button className="md:p-3 md:font-bold md:m-3 m-1 p-1 md:mx-14 mx-5    bg-red-600 text-white  rounded-lg" onClick={handleSignout}>Log Out</button>}
             {isGpt && <select className="bg-green-600 md:p-3 md:m-3 p-1 m-1 text-white  rounded-lg" onChange={handleLangChange}>
              {
                SUPPORTED_LANGUAGES.map((lang)=><option key={lang.identifire} value={lang.identifire}>{lang.name}</option>)
              }
              </select>}
            </div>
          
           
           
        </div>
    )
}

export default Header;