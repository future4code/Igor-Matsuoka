import React from "react"
import { HeaderContainer, ImagemLogo } from "./StyledHeaders"
import Logo from "../assets/Logo.png"
import styled from "styled-components"

const Header = () => {
    return (
        <HeaderContainer>
            <ImagemLogo src={Logo} alt="logo"/>
            <h1>GITHUB</h1>
        </HeaderContainer>
    )
}

export default Header

