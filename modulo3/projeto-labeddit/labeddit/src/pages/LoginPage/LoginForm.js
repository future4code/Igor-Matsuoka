import React, {useState} from "react";
import { InputsContainer } from "./StyledLoginPage";
import TextField from '@mui/material/TextField'
import useForm from '../../hooks/useForm'
import Button from '@mui/material/Button';
import { Login } from '../../services/Access'
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const LoginForm = ({setRightButtonText}) => {
    const {form, handleInputOnChange, clear} = useForm({email:"", password:""})
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState("")

    const onSubmitForm = (event) => {
        event.preventDefault()
        Login(form, clear, navigate, setRightButtonText, setIsLoading)
    }

    return (
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    
                    <TextField
                        name={"email"}
                        value={form.email}
                        onChange={handleInputOnChange}
                        label={"E-mail"}
                        type={"email"}
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                        required
                    />
                    <TextField
                        name={"password"}
                        value={form.password}
                        onChange={handleInputOnChange}
                        label={"Senha"}
                        type={"password"}
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                        required
                    />

                    <Button 
                    fullWidth 
                    variant="contained"
                    type={"submit"} 
                    >
                        {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <p>Logar</p>}
                    </Button>
                </form>
            </InputsContainer>
    )
}

export default LoginForm;