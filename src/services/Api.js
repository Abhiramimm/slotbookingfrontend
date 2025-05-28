import axios from "axios"

export async function registerApi(data){
    return await axios.post("https://127.0.0.1:8000/api/register/",data)
}

export async function getTokenApi(data){
    return await axios.post("http://127.0.0.1:8000/api/token/",data)
}