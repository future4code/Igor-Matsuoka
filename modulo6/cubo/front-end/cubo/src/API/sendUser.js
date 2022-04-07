import { baseUrl } from "../constants/baseUrl"
import axios from "axios"

export const send = (form) => {
    axios.post(`${baseUrl}/users/submit`, form)
    .then((res)=>{
        console.log(res)
    })
    .catch((error)=>{
        console.log(error.message)
    })
}