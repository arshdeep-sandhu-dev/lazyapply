import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

export default function ErrorContainer() {
  return (
    <Container maxWidth="lg" sx={{ pt: 7 }}>
      <Grid container spacing={3} justifyContent="center" alignItems="center" style={{ minHeight: '80vh' }}>
        <Typography variant='h1'>Oops this page does not exist!</Typography>
      </Grid>
    </Container>
  );
}