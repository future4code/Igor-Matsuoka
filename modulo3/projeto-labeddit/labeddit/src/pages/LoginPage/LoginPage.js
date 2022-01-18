import React from "react";
import { ScreenContainer, SignUpButtonContainer, LogoImage, StyledLink } from "./StyledLoginPage";
import Logo from '../../assets/Logo.png'
import LoginForm from "./LoginForm";
import Button from '@mui/material/Button';
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";

const LoginPage = ({setRightButtonText}) => {
    useUnprotectedPage()

    return (
        <ScreenContainer>
            <LogoImage src={Logo}/>

            <h1>Faça seu Login!</h1>

            <LoginForm setRightButtonText={setRightButtonText}/>

            <SignUpButtonContainer>
                    <Button 
                        fullWidth 
                        variant="text"
                        color="success"
                    >
                            <StyledLink to="/cadastro">
                            Não possui conta? Cadastre-se!
                            </StyledLink>
                    </Button>
                </SignUpButtonContainer>

        </ScreenContainer>
    )
}

export default LoginPage;