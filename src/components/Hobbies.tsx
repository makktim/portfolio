import { Box, Grid, styled } from '@mui/material';
import picture17 from '../pictures/17.jpg';
import picture5 from '../pictures/5.jpeg';
import picture16 from '../pictures/16.jpeg';
import picture13 from '../pictures/13.jpeg';
import picture4 from '../pictures/4.jpeg';
import picture11 from '../pictures/11.jpeg';
import { useNav } from '../customHooks/useNav';

export default function Hobbies() {
  const aboutRef = useNav('Hobbies');

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
    <Box ref={aboutRef} id='hobbiesImages' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '5rem' }}>
      <Gallery container>
        <Grid item xs={12} md={2}>
          <Img src={picture17} alt='' />
        </Grid>
        <Grid item xs={12} md={2}>
          <Img src={picture5} alt='' />
        </Grid>
        <Grid item xs={12} md={2}>
          <Img src={picture13} alt='' />
        </Grid>
        <Grid item xs={12} md={2}>
          <Img src={picture16} alt='' />
        </Grid>
        <Grid item xs={12} md={2}>
          <Img src={picture4} alt='' />
        </Grid>
        <Grid item xs={12} md={2}>
          <Img src={picture11} alt='' />
        </Grid>
      </Gallery>
    </Box>
  );
}
