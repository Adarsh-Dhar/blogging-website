import { Avatar } from "./BlogCard"
import { Link } from "react-router-dom"


export function AppBar(){
    return(
        
        <div className="border-b flex justify-between px-10 py-4">
            <Link to={"/blogs"} className="flex flex-col justify-center cursor-pointer">
        
                Medium
            
            </Link>
            <div>
                <Link to={"/publish"}>
            <button type="button" className="focus:outline-none mr-4 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Create Blog</button>
            </Link>
                <Avatar name="Adarsh"/>
            </div>
        </div>
    )
}