import React from "react";
import { InputsContainer } from "./StyledSignUpPage";
import TextField from '@mui/material/TextField'
import useForm from '../../hooks/useForm'
import Button from '@mui/material/Button';
import { SignUp } from '../../services/Access'
import { useNavigate } from "react-router-dom";


const SignUpForm = ({setRightButtonText}) => {
    const {form, handleInputOnChange, clear} = useForm({username:"", email:"", password:""})
    const navigate = useNavigate()

    const onSubmitForm = (event) => {
        event.preventDefault()
        SignUp(form, clear, navigate, setRightButtonText)
    }
    
    return (
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField
                        name={"username"}
                        value={form.username}
                        onChange={handleInputOnChange}
                        label={"Nome"}
                        type={"name"}
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                        required
                    />
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
                    type="submit"
                    >
                        Cadastrar
                    </Button>
                </form>
            </InputsContainer>
    )
}

export default SignUpForm;