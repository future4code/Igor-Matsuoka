import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
`

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    max-width: 450px;
    align-items: center;
    margin-bottom: 20px;
`

export const LoginFormContainer = styled.div`
    display: flex;
    flex-direction: column
    width: 800vw;
    max-width: 450px;
    align-items: center;
    margin-bottom: 20px;
`

export const SignUpButtonContainer = styled.div`
    width: 80vw;
    max-width: 450px;
`

export const LogoImage = styled.img`
    width: 10vw;
    max-width: 350px;
    margin-top: 10vh;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    :link{
        color: #F27649;
    }
    :visited{
        color: #F27649;
    }
`