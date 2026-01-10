import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

export default function UpcomingPage() {
  const locationArray = useLocation().pathname.split('/');
  const pageName = locationArray[locationArray.length-1] || 'this';
  return (
    <Container maxWidth="lg" sx={{ pt: 7 }}>
      <Grid container spacing={3} justifyContent="center" alignItems="center" style={{ minHeight: '80vh' }}>
        <Typography variant='h1'>We are working on {pageName} page! Please be Patient</Typography>
      </Grid>
    </Container>
  );
}