import { Box, Grid, styled } from '@mui/material';
import picture6 from '../pictures/6.jpeg';
import picture3 from '../pictures/3.jpeg';
import picture5 from '../pictures/me.jpeg';
import picture2 from '../pictures/2.jpg';
import picture14 from '../pictures/14.jpeg';
import picture1 from '../pictures/1.jpg';

export default function IntroduceImages() {
  const Gallery = styled(Grid)`
    transition: all 0.3s ease(gravity);
    background-color: #82a6cb;
    cursor: zoom-in;
    height: 40vh;
    @media (max-width: 900px) {
      height: 100%;
    }
  `;

  const Img = styled('img')`
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: all 0.3s/2 ease(downhill);
    position: relative;
    box-shadow: 0 0 0 #0000;
    opacity: 0.67;
    filter: sepia(80%) hue-rotate(180deg);
    &:hover {
      opacity: 1;
      z-index: 1;
      box-shadow: 1em 1em 1em #0004;
      filter: sepia(0%) hue-rotate(0deg);
      border-radius: 5px;
      width: 125%;
      height: 110%;
      top: -10%;
    }
    @media (max-width: 900px) {
      &:hover {
        left: -10%;
      }
    }
  `;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '5rem' }}>
      <Gallery container>
        <Grid item xs={12} md={2}>
          <Img src={picture6} alt='' />
        </Grid>
        <Grid item xs={12} md={2}>
          <Img src={picture14} alt='' />
        </Grid>
        <Grid item xs={12} md={2}>
          <Img src={picture5} alt='' />
        </Grid>
        <Grid item xs={12} md={2}>
          <Img src={picture1} alt='' />
        </Grid>
        <Grid item xs={12} md={2}>
          <Img src={picture2} alt='' />
        </Grid>
        <Grid item xs={12} md={2}>
          <Img src={picture3} alt='' />
        </Grid>
      </Gallery>
    </Box>
  );
}
