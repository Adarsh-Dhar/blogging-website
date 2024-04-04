import { BlogType } from "../hooks"
import { AppBar } from "./AppBar"
import { Avatar } from "./BlogCard"



    export const BlogBody = ({ blog } : { blog : BlogType}) => {
        return(
            <div>
                <AppBar />
                <div className="flex justify-center">
            <div className="grid grid-cols-3 px-10 w-full pt-20 max-w-screen-2xl ">
                <div className="col-span-2 ">
                    <div className="text-5xl font-extrabold">
                    {blog.title}
                    </div>
                    <div className="text-slate-500 pt-5"> Post on 3rd April 2024</div>
                    <div className="pt-5">
                        {blog.content}
                    </div>
                 
            </div>
            <div className=" col-span-1" >
                <div className="pb-4 pt-4">
                Author

                </div>
                <div className="flex w-full pb-4">
                    <div className="pt-6 pr-4">
                        <Avatar name={blog.author.name || "Anonymous"} />
                    </div>
                    <div>
                    <div className="text-3xl font-bold pb-4">
                {blog.author.name || "Anonymous"}

                </div>
                <div className="text-slate-500 ">
                Random catchphrase by user

                </div>
                    </div>
               
            </div>
            </div>
            
        </div>
        </div>
        </div>
    )
}