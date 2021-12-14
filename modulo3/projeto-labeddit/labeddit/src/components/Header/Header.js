import * as  React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { StyledToolbar } from './StyledHeader';
import { useNavigate } from 'react-router-dom';
  

const Header = ({rightButtonText, setRightButtonText}) => {
  const navigate = useNavigate()
  const token = localStorage.getItem("token")

  const logout = () => {
    localStorage.removeItem("token")
  }

  const rightButtonAction = () => {
    if(token) {
      logout()
      setRightButtonText("Login")
      navigate("/login")
    } else {
      navigate("/")
    }
  }

  return (
    <Box>
      <AppBar position="static">
        <StyledToolbar>
          <Button color="inherit" size="large" onClick={()=>navigate("/")}>LABEDDIT</Button>
          <Button color="inherit" onClick={rightButtonAction}>{rightButtonText}</Button>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}

export default Header;