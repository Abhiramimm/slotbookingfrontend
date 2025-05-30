import axios from "axios"

export async function registerApi(data){

    return await axios.post("https://127.0.0.1:8000/api/register/",data)
}

export async function getTokenApi(data){

    return await axios.post("http://127.0.0.1:8000/api/token/",data)
}

export async function createAppointmentApi(data){

    let token=localStorage.getItem("token")

    console.log(token);
    
    let headers={Authorization:token}

    return await axios.post("http://127.0.0.1:8000/api/appointments/",data,{headers})
}

export async function freeSlotsApi(date){

    return await axios.get(`http://127.0.0.1:8000/api/appointments/slots/?date=${date}`)
    
}

export async function appointmentListApi(){

    let token=localStorage.getItem("token")

    console.log(token);
    
    let headers={Authorization:token}

    return await axios.get("http://127.0.0.1:8000/api/appointments/",{headers})
}