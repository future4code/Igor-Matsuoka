import React from "react";
import { InputsContainer } from "./StyledLoginPage";
import TextField from '@mui/material/TextField'
import useForm from '../../hooks/useForm'
import Button from '@mui/material/Button';


const LoginForm = () => {
    const {form, handleInputOnChange, clear} = useForm({email:"", password:""})

    const onSubmitForm = (event) => {
        event.preventDefault()
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
                    >
                        Logar
                    </Button>
                </form>
            </InputsContainer>
    )
}

export default LoginForm;