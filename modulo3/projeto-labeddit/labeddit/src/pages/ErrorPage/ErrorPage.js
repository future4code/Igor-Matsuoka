import React from "react";
import Error from '../../assets/Error.png';
import Typography from '@material-ui/core/Typography'
import { ErrorPageContainer, ErrorImage } from "./StyledErrorPage";

const ErrorPage = () => {
    return <ErrorPageContainer>
        <ErrorImage src={Error}/>
        <Typography color={'primary'} variant={'h3'} align={'center'}>ERRO 404 - PÁGINA NÂO ENCONTRADA!</Typography>
    </ErrorPageContainer>
}

export default ErrorPage;