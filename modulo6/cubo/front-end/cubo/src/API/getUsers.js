import { baseUrl } from "../constants/baseUrl"
import axios from "axios"

export const getUsers = (setData) => {
    const url = `${baseUrl}/users`
    axios.get(url)
    .then((res)=>{
        console.log(res.data)
        setData(res.data.user)
    })
    .catch((error)=>{
        console.log(error.data)
    })
}