import React from "react";
import { ScreenContainer, SignUpButtonContainer, LogoImage } from "./StyledSignUpPage";
import Logo from '../../assets/Logo.png'
import SignUpForm from "./SignUpForm";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";

const SignUpPage = () => {
    useUnprotectedPage()

    return (
        <ScreenContainer>
            <LogoImage src={Logo}/>

            <h1>Faça seu Cadastro!</h1>

            <SignUpForm/>

            <SignUpButtonContainer>
                </SignUpButtonContainer>

        </ScreenContainer>
    )
}

export default SignUpPage;