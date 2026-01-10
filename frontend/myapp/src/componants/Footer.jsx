import React from 'react'
import { Box, Container, Link, Typography } from '@mui/material'
import { profile } from '../data/profile'

export default function Footer() {
  return (
    <Box sx={{ mt: 10, py: 6, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <Container maxWidth="lg">
        <Typography sx={{ opacity: 0.8 }}>
          © {new Date().getFullYear()} {profile.name}. Built with React + MUI.
        </Typography>
        <Box sx={{ mt: 1, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Link href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</Link>
          <Link href={profile.github} target="_blank" rel="noreferrer">GitHub</Link>
          <Link href={`mailto:${profile.email}`}>{profile.email}</Link>
        </Box>
      </Container>
    </Box>
  )
}
