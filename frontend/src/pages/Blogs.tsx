import { AppBar } from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../hooks";

export  function Blogs(){

    const {loading , blogs} = useBlogs()

    if(loading){
        return(
            <div>
                Loading...
            </div>
        )
    }
    return(
        <div>
            <AppBar />
        <div className="flex justify-left">
        <div className="max-w-4xl">

            {blogs.map(blog =>  <BlogCard 
        authorName={blog.author.name || "Anonymous"}
        id = {blog.id}
        title={blog.title}
        content={blog.content}
        publishedDate="3rd april 2024"
        /> )}
            
       
        
        </div>
        </div>
        </div>
        
    )
}