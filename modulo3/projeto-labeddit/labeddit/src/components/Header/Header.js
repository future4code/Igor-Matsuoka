import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { StyledToolbar } from './StyledHeader';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate()

  return (
    <Box>
      <AppBar position="static">
        <StyledToolbar>
          <Button color="inherit" size="large" onClick={()=>navigate("/")}>
            LABEDDIT
          </Button>
          <Button color="inherit" onClick={()=>navigate("/login")}>Login</Button>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}

export default Header;