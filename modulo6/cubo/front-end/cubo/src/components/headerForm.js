import React, { useContext }from "react";
import useForm from "../hooks/useForm";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import GlobalStateContext from "../global/globalStateContext";

const HeaderForm = () => {

    const { setters } = useContext(GlobalStateContext)

    const {form, handleInputOnChange, clear} = useForm({name:"", lastName:"", participation:""})

    const onSubmitForm = (event) => {
        setters.send(form)
        event.preventDefault()
        clear()
    }

    return (<div>
        <form onSubmit={onSubmitForm}>
        <TextField
            name={"name"}
            value={form.name}
            onChange={handleInputOnChange}
            label={"Name"}
            type={"text"}
            variant={"outlined"}
            margin={"dense"}
            width={200}
            required
        />

        <TextField
            name={"lastName"}
            value={form.lastName}
            onChange={handleInputOnChange}
            label={"Last name"}
            type={"text"}
            variant={"outlined"}
            margin={"dense"}
            width={200}
            required
        />

        <TextField
            name={"participation"}
            value={form.participation}
            onChange={handleInputOnChange}
            label={"Participation"}
            type={"text"}
            variant={"outlined"}
            margin={"dense"}
            width={200}
            required
        />

        <Button
            type={"submit"}
            size={"large"}
            variant={"outlined"}
            color={"primary"}
        >
            SEND
        </Button>
        </form>
        </div>
    )
}

export default HeaderForm