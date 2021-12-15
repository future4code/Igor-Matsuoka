import axios from "axios"
import { BASE_URL } from "../constants/URLs"
import { goToFeed } from "../routes/Coordinator"

export const Login = (body, clear, navigate, setRightButtonText) => {
    axios.post(`${BASE_URL}/users/login`, body)
    .then((res)=>{
        localStorage.setItem("token", res.data.token)
        clear()
        goToFeed(navigate)
        setRightButtonText("Logout")
    })
    .catch((err)=>{
        alert(err.response.data.message)
    })
}

export const SignUp = (body, clear, navigate, setRightButtonText) => {
    axios.post(`${BASE_URL}/users/signup`, body)
    .then((res)=>{
        localStorage.setItem("token", res.data.token)
        alert("Cadastro Realizado com sucesso!")
        clear()
        goToFeed(navigate)
        setRightButtonText("Logout")
    })
    .catch((err)=>{
        alert(err.response.data.message)
    })
}

