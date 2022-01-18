import axios from "axios"
import { BASE_URL } from "../constants/URLs"

export const createPost = (body, clear, setIsLoading) => {
        setIsLoading(true)
        axios.post(`${BASE_URL}/posts`, body, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then((res)=>{
            alert("Post criado com sucesso!")
            clear()
            setIsLoading(false)
        })
        .catch((err)=>{
            alert("Houve um erro ao criar o post!")
            setIsLoading(false)
        })
}

export const createComment = (body, id, clear) => {
    axios.post(`${BASE_URL}/posts/${id}/comments`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res)=>{
        alert("Comentário criado com sucesso!")
        clear()
    })
    .catch((err)=>{
        alert("Houve um erro ao criar o comentário!")
    })
}