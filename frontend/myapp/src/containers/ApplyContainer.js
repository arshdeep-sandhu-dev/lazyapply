import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import ApplyContext from '../context/apply/ApplyContext.jsx';
import SharedTable from '../components/SharedTable.jsx';
export default function ApplyContainer() {
  const { applications, handleDataFetch, handleDataFormat } = useContext(ApplyContext);
  const tableType = 'apply';
  return (
    <Container maxWidth="lg" sx={{ pt: 7 }}>
      <Grid container spacing={3} justifyContent="center" alignItems="center" style={{ minHeight: '80vh' }}>
        <Grid item xs={12}>
          <button onClick={() => console.log(handleDataFetch())}>Refresh Data</button>
          <Typography variant='h4' sx={{ mb: 3 }}>Job Applications</Typography>
          <SharedTable tableType={tableType} data={applications || []} />
        </Grid>
      </Grid>
    </Container>
  );
}