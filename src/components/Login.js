import Header from "./Header"
import { BG_IMG_URL } from "../utils/constants"
import { useRef, useState } from "react"
import { checkValidate } from "../utils/validate"
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth"
import {auth} from "../utils/firebase"



const Login=()=>{
    
    const [isSignInForm,setIsSignInForm]=useState(true)
    const [errMessage,setErrMessage]=useState(null)
    const email=useRef(null)
    const password=useRef(null)
    const name=useRef(null)

    const toggleForm=()=>{
       setIsSignInForm(!isSignInForm);
    }

    const handleSubmit=()=>{

        const Error=checkValidate(email.current.value,password.current.value)
        setErrMessage(Error)
        if(Error) return;

        if(isSignInForm){
            signInWithEmailAndPassword(auth, email.current.value,password.current.value)
      .then((userCredential) => {
    // Signed in 
       const user = userCredential.user;
      
       
      
       
    // ...
})
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrMessage(errorMessage+"-"+errorCode)
  });


        }else{
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                
                updateProfile(auth.currentUser, {
                    name:name.current.value
                  }).then(() => {
                    
                  }).catch((error) => {
                    
                  });
                  
   
            const user = userCredential.user;
         
   
            })
            .catch((error) => {
            
            console.log(errMessage)
    
           });
        }
    }

    return(
        <div>
            <Header/>
            <div className=" fixed h-screen" >
                <img className="h-screen object-cover md:w-screen" src={BG_IMG_URL} alt="loginbg"></img>
            </div>
            <div>
                <form className="md:p-12 p-4   bg-black w-full  md:w-3/12 absolute m-auto left-0 right-0 md:mt-44 mt-32 bg-opacity-80 text-white rounded-lg  " onSubmit={(e)=>e.preventDefault()} >
                    <h1 className="md:text-4xl text-2xl font-bold py-4">{isSignInForm? "Sign In":"Sign Up"}</h1>
                   {!isSignInForm && <input type="text" placeholder="Full Name" className="p-4 my-2 w-full rounded-lg bg-gray-700" ref={name}></input>}
                    <input
                     type="text" placeholder="Email" className="p-4 my-2 w-full rounded-lg bg-gray-700" ref={email}>
                     </input>
                    <input 
                    type="text" placeholder="Password" className="p-4 my-2 w-full rounded-lg bg-gray-700" ref={password}>

                    </input>
                    <p className="text-red-800 font-bold">{errMessage}</p>
                    <button 
                    className="p-4 my-4 bg-red-700 w-full rounded-lg font-bold cursor-pointer" onClick={handleSubmit} >
                         {isSignInForm? "Sign In":"Sign Up"}</button>
                    <p className="py-5 cursor-pointer" onClick={toggleForm}>{isSignInForm?"New to Netflix? SignUp Now":"Already a User Sign In Now"}</p>
                    
                </form>
            </div>
           
        </div>
    )
}
export default Login