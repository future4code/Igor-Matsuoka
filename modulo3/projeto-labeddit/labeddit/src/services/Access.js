import axios from "axios"
import { BASE_URL } from "../constants/URLs"

export const Login = (body, clear, goToFeed) => {
    axios.post(`${BASE_URL}/users/login`, body)
    .then((res)=>{
        localStorage.setItem("token", res.data.token)
        clear()
        goToFeed()
    })
    .catch((err)=>{
        alert(err.response.data.message)
    })
}

export const SignUp = (body, clear, goToFeed) => {
    axios.post(`${BASE_URL}/users/signup`, body)
    .then((res)=>{
        localStorage.setItem("token", res.data.token)
        alert("Cadastro Realizado com sucesso!")
        clear()
        goToFeed()
    })
    .catch((err)=>{
        alert(err.response.data.message)
    })
}

