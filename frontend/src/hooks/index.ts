import { useEffect, useState } from "react"
import axios from "axios"
import { BACKEND_URL } from "../config"

export interface BlogType{
    title : string,
    content : string,
    id : number,
    author : {
        name : string
    }
}



export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<BlogType[]>([]);

   
    console.log(localStorage.getItem("token") )

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: localStorage.getItem("token") || ""
            }
        })
        .then(response => {
            setLoading(false);
            setBlogs(response.data.blogs);
            console.log(response.data)
        })
        .catch(error => {
            console.error("Error fetching blogs:", error);
            setLoading(false); // Set loading to false even on error
        });
    }, []);
    
    return {
        loading,
        blogs
    }
}


export const useBlog = ({id} : {id : string}) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<BlogType>();

    console.log("helloooooo")
    console.log(localStorage.getItem("token") )

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token") || ""
            }
        })
        .then(response => {
            setLoading(false);
            setBlog(response.data.blog);
            console.log(response.data)
        })
        .catch(error => {
            console.error("Error fetching blogs:", error);
            setLoading(false); // Set loading to false even on error
        });
    }, []);
    
    return {
        loading,
        blog
    }
}