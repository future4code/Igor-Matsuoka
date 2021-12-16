import axios from "axios"
import { BASE_URL } from "../constants/URLs"

export const createPost = (body, clear) => {
    axios.post(`${BASE_URL}/posts`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res)=>{
        alert("Post criado com sucesso!")
    })
    .catch((err)=>{
        alert("Houve um erro ao criar o post!")
    })
}