import { Box, Grid } from '@mui/material';

export default function Hobbies() {
  return (
    <Grid sx={{ height: '350px' }} container rowSpacing={1}>
      <Grid item xs={12} md={3}>
        <Box>Image</Box>
      </Grid>
      <Grid item xs={12} md={3}>
        <Box>Image</Box>
      </Grid>
      <Grid item xs={12} md={3}>
        <Box>Image</Box>
      </Grid>
      <Grid item xs={12} md={3}>
        <Box>Image</Box>
      </Grid>
    </Grid>
  );
}
