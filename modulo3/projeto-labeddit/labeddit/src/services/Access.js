import axios from "axios"
import { BASE_URL } from "../constants/URLs"
import { goToFeed } from "../routes/Coordinator"

export const Login = (body, clear, navigate, setRightButtonText, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/users/login`, body)
    .then((res)=>{
        localStorage.setItem("token", res.data.token)
        clear()
        setIsLoading(false)
        goToFeed(navigate)
        setRightButtonText("Logout")
    })
    .catch((err)=>{
        setIsLoading(false)
        alert(err.response.data)
    })
}

export const SignUp = (body, clear, navigate, setRightButtonText, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/users/signup`, body)
    .then((res)=>{
        localStorage.setItem("token", res.data.token)
        alert("Cadastro Realizado com sucesso!")
        clear()
        setIsLoading(false)
        goToFeed(navigate)
        setRightButtonText("Logout")
    })
    .catch((err)=>{
        console.log(err)
        setIsLoading(false)
        alert("Possiveis erros: senha com menos de 8 caracteres, e-mail já criado, senha igual a de outro usuário!")
    })
}

