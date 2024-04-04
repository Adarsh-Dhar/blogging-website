import { AppBar } from "../components/AppBar"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Publish = () => {
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
    const Navigate = useNavigate()

    return(
                <div>
                    <div>
                       <AppBar />
                    </div>
                    <div className="pt-10 px-20 mx-20 p-2.5">

                        <textarea id="message" rows={2} className="block w-full mb-3  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Give your blog a title here..." onChange={(e) => setTitle(e.target.value)}></textarea>
                        <textarea id="editor" rows={8}  className="block w-full mb-3  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  " placeholder="Write the contents of the blog..." onChange={(e) => setDescription(e.target.value)}required />
                    </div>
                    <div className="pt-10 px-20 mx-20 p-2.5">
                            <button onClick={async () => {
                                    const response = await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                                        title,
                                        content : description
                                    },{
                                        headers : {
                                            Authorization: localStorage.getItem("token") || ""
                                            

                                        }
                                    })
                                    Navigate(`/blog/${response.data.id}`)
                                }} type="submit" className="inline-flex items-center px-3  py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200  hover:bg-blue-800">
                                Publish post
                        </button>
                    </div>
                </div>
            )
}

