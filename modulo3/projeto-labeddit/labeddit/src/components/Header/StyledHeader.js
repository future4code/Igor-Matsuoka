import styled from "styled-components";
import { Toolbar } from "@mui/material";
import { Link } from 'react-router-dom'

export const StyledToolbar = styled(Toolbar)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    :link{
        color: white;
    }
    :visited{
        color: white;
    }
`