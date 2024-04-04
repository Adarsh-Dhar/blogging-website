import { BlogBody } from "../components/BlogBody";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";

export const Blog = () => {
    const { id } = useParams();
    

    const {loading, blog} = useBlog({
        id: id || ""
    });
    console.log(blog)


    if (loading) {
        return <div>loading...</div>;
    }

    if (!blog) {

        return <div>Blog not found</div>; // Handle case where blog is not found
    }else{
    console.log(blog.author.name)

        return (
            <div>
                <BlogBody blog={blog} /> 
            </div>
        );
    }

    
};
