import axios from "axios"

async function registerApi(data){
    return await axios.post("https://127.0.0.1:8000/api/register/",data)
}

async function getToken(data){
    return await axios.post("http://127.0.0.1:8000/api/token/",data)
}