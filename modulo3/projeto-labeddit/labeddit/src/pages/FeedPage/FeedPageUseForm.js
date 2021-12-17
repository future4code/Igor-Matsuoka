import React, { useState } from "react";
import { InputsContainer } from "./StyledPostForm";
import TextField from '@mui/material/TextField'
import useForm from '../../hooks/useForm'
import Button from '@mui/material/Button';
import { createPost } from "../../services/Create";
import { CircularProgress } from "@mui/material";


const PostForm = () => {
    const {form, handleInputOnChange, clear} = useForm({title:"", body:""})
    const [isLoading, setIsLoading] = useState("")

    const onSubmitForm = (event) => {
        event.preventDefault()
        createPost(form, clear, setIsLoading)
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
                        size="small"
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
                        size="small"
                        required
                    />

                    <Button 
                    fullWidth 
                    variant="contained"
                    type={"submit"} 
                    size="small"
                    >
                        {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <p>POSTAR</p>}
                    </Button>
                </form>
            </InputsContainer>
    )
}

export default PostForm;