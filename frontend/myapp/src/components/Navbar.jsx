import React from 'react'
import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'
import { NavLink, useLocation } from 'react-router-dom'
import WeekendIcon from '@mui/icons-material/Weekend';
import { useAuth } from '../context/auth/AuthState';
import { doSignOut } from "../firebase/auth";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from 'react-router-dom';
const linkStyle = ({ isActive }) => ({
  textTransform: 'none',
  fontWeight: 700,
  opacity: isActive ? 1 : 0.75,
  color: 'text.primary',
})

export default function Navbar() {
  const location = useLocation()
  const { userLoggedIn } = useAuth();
  const navigate = useNavigate();

  return (
    <AppBar position="sticky" color="transparent" elevation={0}
      sx={{ borderBottom: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)' }}>
      <Container maxWidth="32rem">
        <Toolbar disableGutters sx={{ py: 1, gap: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mr: 2 }}>
            <WeekendIcon />
            <Typography variant="h6" sx={{ fontWeight: 900, letterSpacing: -0.4 }}>
              Lazy Apply
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, flex: 1 }}>
            <Button component={NavLink} to="/" sx={linkStyle}>Home</Button>


          </Box>

          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
            
            {!userLoggedIn && (
              <React.Fragment>
                <Button
                  component={NavLink}
                  to="/register"
                  variant={"outlined"}
                  color="primary"
                  sx={{ textTransform: 'none', fontWeight: 800 }}
                >
                  Register
                </Button>
                <Button
                  component={NavLink}
                  to="/login"
                  variant={"outlined"}
                  color="primary"
                  sx={{ textTransform: 'none', fontWeight: 800 }}
                >
                  Login
                </Button>
              </React.Fragment>
            )}
            {userLoggedIn && (
              <ExitToAppIcon onClick={() => {
                doSignOut();
                navigate('/');
              }} />
            )}
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
