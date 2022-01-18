import React from "react";
import { InputsContainer } from "./StyledCommentForm";
import TextField from '@mui/material/TextField'
import useForm from '../../hooks/useForm'
import Button from '@mui/material/Button';
import { createComment } from "../../services/Create";

const CommentForm = (props) => {
    const {form, handleInputOnChange, clear} = useForm({body:""})

    const onSubmitForm = (event) => {
        event.preventDefault()
        createComment(form, props.id, clear)
    }

    return (
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField
                        name={"body"}
                        value={form.body}
                        onChange={handleInputOnChange}
                        label={"Faça seu comentário!"}
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
                        <p>COMENTAR</p>
                    </Button>
                </form>
            </InputsContainer>
    )
}

export default CommentForm;