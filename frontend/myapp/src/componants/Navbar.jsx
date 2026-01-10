import React from 'react'
import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'
import { NavLink, useLocation } from 'react-router-dom'
import CodeIcon from '@mui/icons-material/Code'

const linkStyle = ({ isActive }) => ({
  textTransform: 'none',
  fontWeight: 700,
  opacity: isActive ? 1 : 0.75,
  color: 'primary.contrastText'
})

export default function Navbar() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <AppBar position="sticky" color="transparent" elevation={0}
      sx={{ borderBottom: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 1, gap: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mr: 2 }}>
            <CodeIcon />
            <Typography variant="h6" sx={{ fontWeight: 900, letterSpacing: -0.4 }}>
              Arsh
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, flex: 1 }}>
            <Button component={NavLink} to="/" sx={linkStyle}>Home</Button>
            <Button component={NavLink} to="/about" sx={linkStyle}>About</Button>
            <Button component={NavLink} to="/projects" sx={linkStyle}>Projects</Button>
            <Button component={NavLink} to="/experience" sx={linkStyle}>Experience</Button>
            <Button component={NavLink} to="/resume" sx={linkStyle}>Resume</Button>
            <Button component={NavLink} to="/research" sx={linkStyle}>Research</Button>
            <Button component={NavLink} to="/contact" sx={linkStyle}>Contact</Button>
            
          </Box>

          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              component={NavLink}
              to="/projects"
              variant={isHome ? "contained" : "outlined"}
              color="primary"
              sx={{ textTransform: 'none', fontWeight: 800 }}
            >
              View Work
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
