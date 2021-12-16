import React from "react";
import { InputsContainer } from "./StyledPostForm";
import TextField from '@mui/material/TextField'
import useForm from '../../hooks/useForm'
import Button from '@mui/material/Button';
import { createPost } from "../../services/Create";

const PostForm = () => {
    const {form, handleInputOnChange, clear} = useForm({title:"", body:""})

    const onSubmitForm = (event) => {
        event.preventDefault()
        createPost(form, clear)
    }

    return (
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    
                    <TextField
                        name={"title"}
                        value={form.title}
                        onChange={handleInputOnChange}
                        label={"Título"}
                        type={"text"}
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                        required
                    />
                    <TextField
                        name={"body"}
                        value={form.body}
                        onChange={handleInputOnChange}
                        label={"Descrição"}
                        type={"text"}
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
                        Enviar Post!
                    </Button>
                </form>
            </InputsContainer>
    )
}

export default PostForm;