import React, { useContext }from "react";
import useForm from "../hooks/useForm";
import GlobalStateContext from "../global/globalStateContext";
import { HeaderContainer } from "./styledHeader";

const HeaderForm = () => {

    const { setters } = useContext(GlobalStateContext)

    const {form, handleInputOnChange, clear} = useForm({name:"", lastName:"", participation:""})

    const onSubmitForm = (event) => {
        setters.send(form)
        event.preventDefault()
        clear()
    }

    return (<HeaderContainer>
        <form onSubmit={onSubmitForm}>

        <input
            name={"name"}
            value={form.name}
            onChange={handleInputOnChange}
            placeholder={"Name"}
            type={"text"}
        />

        <input
            name={"lastName"}
            value={form.lastName}
            onChange={handleInputOnChange}
            placeholder={"Last name"}
            type={"text"}
        />

        <input
            name={"participation"}
            value={form.participation}
            onChange={handleInputOnChange}
            placeholder={"Participation"}
            type={"text"}
        />

        <button
            type={"submit"}
        >
            SEND
        </button>

        </form>
        </HeaderContainer>
    )
}

export default HeaderForm