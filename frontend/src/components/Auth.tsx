import { ChangeEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { SignupInput } from "@adarsh23/blogging-site-common"
import axios from "axios"
import {BACKEND_URL} from "../config"

export function Auth({type} : {type : "signup" | "signin"}) {

    const Navigate = useNavigate()

const [postInputs,setPostInputs] = useState<SignupInput>({
    username : "",
    password : "",
    name : ""
})

async function sendRequest(){

    try {
        const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs);
        const jwt = response.data.jwt; // Extract JWT token string
        console.log(jwt);
        localStorage.setItem("token", jwt);
        Navigate("/blogs");
    } catch(e) {
        alert("Error while signing up");
        // alert the user here that the request failed
    }
    
}
    


return (
    <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
                <div>
            <div className="text-3xl font-extrabold px-10">
            {type == "signup" ? "Create an Account" : "Welcome Back"}
            </div>
            <div className="text-slate-400 text-center mb-6">
                {type == "signup" ? "Already have an account" : "Don't have an account"}
                <Link className="pl-2 underline" to={type == "signup" ? "/signin" : "/signup"}>{type == "signup" ? "Login" : "Create new account"}</Link>
            </div>
            <div className="mb-2">
                {type == "signup" ? <LabelledInput label="Name" placeholder="Adarsh Dhar..." onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        name : e.target.value
                    })
                }} /> : null}
            </div>
            <div className="mb-2">
               
        
                 <LabelledInput label="email" placeholder="adarshdhar@gmail.com" onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        username : e.target.value
                    })
                }} /> 
            </div>
            <div className="mb-2">
                <LabelledInput label={"Password" }type={"password"} placeholder="123456" onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        password : e.target.value
                    })
                }} />
            </div>
            <button onClick={sendRequest} className="bg-black hover:bg-blue-500 text-white font-bold py-2 w-full ounded mt-8">{type == "signup" ? "Sign Up" : "Sign In"}</button>
        </div>
        </div>
    </div>
)
            }

interface LabelledInputType{
    label : string,
    placeholder : string,
    onChange : (e: any) => void,
    type? : string
}

function LabelledInput ({ label , placeholder , onChange , type} : LabelledInputType){
    return(
        <div>
        <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-black">{label}</label>
        <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
    </div>
    )
}