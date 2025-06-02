import axios from "axios"

export async function registerApi(data){

    return await axios.post("https://abhiramimm.pythonanywhere.com/api/register/",data)
}

export async function getTokenApi(data){

    return await axios.post("https://abhiramimm.pythonanywhere.com/api/token/",data)
}

export async function createAppointmentApi(data){

    let token=localStorage.getItem("token")

    console.log(token);
    
    let headers={Authorization:token}

    return await axios.post("https://abhiramimm.pythonanywhere.com/api/appointments/",data,{headers})
}

export async function freeSlotsApi(date){

    return await axios.get(`https://abhiramimm.pythonanywhere.com/api/appointments/slots/?date=${date}`)
    
}

export async function appointmentListApi(){

    let token=localStorage.getItem("token")

    console.log(token);
    
    let headers={Authorization:token}

    return await axios.get("https://abhiramimm.pythonanywhere.com/api/appointments/",{headers})
}

export async function appointmentDeleteApi(id){

    let token=localStorage.getItem("token")

    let headers={Authorization:token}

    return await axios.delete(`https://abhiramimm.pythonanywhere.com/api/appointments/${id}/`,{headers})
}

export async function appointmentUpdateApi(id,data){

    let token=localStorage.getItem("token")

    let headers={Authorization:token}

    return await axios.put(`https://abhiramimm.pythonanywhere.com/api/appointments/${id}/`,data,{headers})
}