import { playButton } from "../utils/constants";

const VideoTitle=({title,overview})=>{
    return(
        <div className=" md:px-20 absolute text-white bg-gradient-to-r h-auto from-black aspect-video pt-[30%] md:pt-[10%]">
           <h1 className="font-bold md:text-6xl text-2xl">{title}</h1>
           <p className="hidden md:inline-block text-l w-1/4 py-6">{overview}</p>
           <div className="flex md:pt-0 ">
             <button className="bg-white text-lg m-1 p-1 text-black md:p-4 md:px-8 md:text-xl hover:opacity-50 rounded-lg items-center flex"><img src={playButton} alt="something" className="w-7 px-1 "></img>Play</button>
             <button className="bg-gray-200 text-lg md:mx-3 m-1 p-1 text-black md:p-4 md:px-8 md:text-xl opacity-50 rounded-lg items-center">More Info</button>
           </div>
        </div>
    )
}

export default VideoTitle;